import React, { FC, useMemo, useContext, useState } from "react";
import { Layout } from "../../components/layouts";
import { AiOutlineSave, AiOutlineDelete } from "react-icons/ai";
import { Entry, Status } from "../../interfaces";
import { TextAreaInput } from "../../components/ui/TextAreaInput";
import { GetServerSideProps } from "next";
import { dbEntries } from "../../database";

import { EntriesContext } from "../../context/entries/EntryContext";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
const validStatus: Status[] = [
  Status.PENDING,
  Status.IN_PROGRESS,
  Status.FINISHED,
];

interface Props {
  entry: Entry;
}

const EntryPage: FC<Props> = ({ entry }) => {
  const [inputValue, setInputValue] = useState(entry.description);
  const [status, setStatus] = useState<Status>(entry.status);
  const [touched, setTouched] = useState(false);
  const { updateEntry } = useContext(EntriesContext);
  const router = useRouter();

  const isValid = useMemo(
    () => inputValue.length === 0 && touched,
    [inputValue, touched]
  );
  const onTextFieldChanges = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputValue(event.target.value);
  };

  const onSave = () => {
    if (inputValue.trim().length === 0) return;
    const updatedEntry: Entry = {
      ...entry,
      status,
      description: inputValue,
    };
    updateEntry(updatedEntry);
    toast.success("Entry has been updated 😀");
    setTouched(false);
  };

  const onStatusChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value as Status);
  };

  return (
    <Layout title={inputValue.substring(0, 10) + "..."}>
      <div className="flex justify-center mt-1 bg-slate-900 w-full mx-auto md:w-[70%] lg:w-[50%] rounded-lg">
        <div className="w-full m-3">
          <Toaster position="top-center" reverseOrder={false} />
          <div className="flex flex-col justify-start">
            <h3>Entry</h3>
            <h5>Created at {entry.createdAt}</h5>
          </div>
          <TextAreaInput
            inputValue={inputValue}
            onTextFieldChanges={onTextFieldChanges}
            setTouched={setTouched}
            touched={touched}
          />
          <div>
            <label htmlFor="status">Status</label>
            <div className="flex flex-row space-x-4 ml-6" id="status">
              {validStatus.map((option) => (
                <div
                  className="flex justify-center items-center  space-x-2"
                  key={option}
                >
                  <input
                    id={option}
                    type="radio"
                    value={option}
                    checked={option === status}
                    onChange={onStatusChanged}
                  />
                  <label htmlFor={option}>{option}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <button
              className="flex justify-center rounded font-bold py-2 space-x-2 items-center w-full bg-slate-600 hover:bg-slate-300 hover:text-black disabled:bg-gray-400 disabled:text-gray-600"
              onClick={onSave}
              disabled={inputValue.length === 0}
            >
              <AiOutlineSave />
              <span>Save</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <button className="fixed text-3xl bottom-7 right-7 bg-red-500 p-3 rounded-full">
          <AiOutlineDelete />
        </button>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };

  const entry = await dbEntries.getEntryById(id);
  if (!entry) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      entry,
    },
  };
};
export default EntryPage;
