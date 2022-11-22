import React, { useMemo, useRef, useState } from "react";
import { Layout } from "../../components/layouts";
import { AiOutlineSave, AiOutlineDelete } from "react-icons/ai";
import { Status } from "../../interfaces";
import { TextAreaInput } from "../../components/ui/TextAreaInput";

const validStatus: Status[] = [
  Status.PENDING,
  Status.IN_PROGRESS,
  Status.FINISHED,
];

const EntryPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState<Status>(Status.IN_PROGRESS);
  const [touched, setTouched] = useState(false);

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
    if (inputValue.length === 0) return;
    // addNewEntry(inputValue);
    setInputValue("");
    setTouched(false);
    // setIsAddingEntry(false);
  };

  const onStatusChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value as Status);
  };

  return (
    <Layout>
      <div className="flex justify-center mt-1 bg-slate-900 w-full mx-auto md:w-[70%] lg:w-[50%] rounded-lg">
        <div className="w-full m-3">
          <div className="flex flex-col justify-start">
            <h3>Entry</h3>
            <h5>Created at ...</h5>
          </div>
          <TextAreaInput
            inputValue={inputValue}
            onTextFieldChanges={onTextFieldChanges}
            setTouched={setTouched}
            touched={touched}
          />
          <div>
            <label htmlFor="">Status</label>
            <div className="flex flex-row space-x-4">
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

          <div>
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

export default EntryPage;
