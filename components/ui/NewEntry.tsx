import React, { useContext, useRef, useState } from "react";
import { AiOutlineSave } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { EntriesContext } from "../../context/entries/EntryContext";
import { UIContext } from "../../context/ui";
import { TextAreaInput } from "./TextAreaInput";

export const NewEntry = () => {
  const { addNewEntry } = useContext(EntriesContext);
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);
  const [inputValue, setInputValue] = useState("");
  const [touched, setTouched] = useState(false);

  const onTextFieldChanges = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputValue(event.target.value);
  };
  const onSave = () => {
    if (inputValue.length === 0) return;
    addNewEntry(inputValue);
    setInputValue("");
    setTouched(false);
    setIsAddingEntry(false);
  };

  return (
    <div className="mt-2 mb-1 px-1">
      {isAddingEntry ? (
        <>
          <TextAreaInput
            inputValue={inputValue}
            onTextFieldChanges={onTextFieldChanges}
            setTouched={setTouched}
            touched={touched}
          />

          <div className="flex justify-between">
            <button
              onClick={() => setIsAddingEntry(false)}
              className="flex items-center space-x-2 py-1 px-3 border border-black dark:border-white rounded outline-none focus:outline-none hover:text-slate-700 hover:bg-gray-400 dark:hover:bg-white duration-150 ease-linear transition-all"
            >
              <AiOutlineSave />
              <p>Cancelar</p>
            </button>
            <button
              onClick={onSave}
              className="flex items-center space-x-2 py-1 px-3 border border-black dark:border-white rounded outline-none focus:outline-none hover:text-slate-700 hover:bg-gray-400 dark:hover:bg-white duration-150 ease-linear transition-all"
            >
              <AiOutlineSave />
              <p>Save</p>
            </button>
          </div>
        </>
      ) : (
        <button
          onClick={() => setIsAddingEntry(true)}
          className="w-full flex py-1 items-center justify-center space-x-2 border border-black dark:border-white  rounded-md hover:bg-gray-400 dark:hover:bg-slate-700"
        >
          <IoIosAddCircleOutline />
          <span> Add New Entry</span>
        </button>
      )}
    </div>
  );
};
