import React, {
  ChangeEvent,
  ChangeEventHandler,
  RefObject,
  useContext,
  useRef,
  useState,
} from "react";
import { AiOutlineSave } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { EntriesContext } from "../../context/entries/EntryContext";
import { UIContext } from "../../context/ui";

export const NewEntry = () => {
  const { addNewEntry } = useContext(EntriesContext);
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
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

  const setRef = (element: HTMLTextAreaElement) => {
    inputRef.current = element;
    inputRef.current?.focus();
  };
  return (
    <div className="mt-2 mb-1 px-1">
      {isAddingEntry ? (
        <>
          <div className="relative my-4">
            <textarea
              ref={setRef}
              value={inputValue}
              onChange={onTextFieldChanges}
              id="text"
              className="peer bg-slate-800 outline w-full my-1 resize-none rounded p-2 placeholder-transparent"
              placeholder="New Entry"
              aria-label="New Entry"
              onBlur={() => setTouched(true)}
            />
            <label
              htmlFor="text"
              className="absolute bg-slate-800 left-2 -top-1.5 text-gray-200 text-sm
          peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 transition-all duration-150 peer-focus:-top-1.5 peer-focus:text-xs peer-focus:text-gray-200 peer-placeholder-shown:px-2 "
            >
              New Entry
            </label>

            {inputValue.length === 0 && touched && (
              <div>
                <p className="text-sm text-error">Ingrese un valor</p>
              </div>
            )}
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => setIsAddingEntry(false)}
              className="flex items-center space-x-2 py-1 px-3 border rounded outline-none focus:outline-none hover:text-slate-800 hover:bg-white duration-150 ease-linear transition-all"
            >
              <AiOutlineSave />
              <p>Cancelar</p>
            </button>
            <button
              onClick={onSave}
              className="flex items-center space-x-2 py-1 px-3 border rounded outline-none focus:outline-none hover:text-slate-800 hover:bg-white duration-150 ease-linear transition-all"
            >
              <AiOutlineSave />
              <p>Save</p>
            </button>
          </div>
        </>
      ) : (
        <button
          onClick={() => setIsAddingEntry(true)}
          className="w-full flex py-1 items-center justify-center space-x-2 border rounded-md hover:bg-slate-700"
        >
          <IoIosAddCircleOutline />
          <span> Add New Entry</span>
        </button>
      )}
    </div>
  );
};
