import React, { FC, useRef } from "react";

interface Props {
  inputValue: string;
  setTouched: (value: React.SetStateAction<boolean>) => void;
  onTextFieldChanges: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  touched: boolean;
}

export const TextAreaInput: FC<Props> = ({
  inputValue,
  setTouched,
  onTextFieldChanges,
  touched,
}) => {
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const setRef = (element: HTMLTextAreaElement) => {
    inputRef.current = element;
    inputRef.current?.focus();
  };
  return (
    <div className="relative my-4">
      <textarea
        ref={setRef}
        value={inputValue}
        onChange={onTextFieldChanges}
        id="text"
        className={`peer bg-slate-800 outline w-full my-1 resize-none rounded p-2 placeholder-transparent focus:outline-lightPrimary ${
          touched && inputValue.length === 0 && "outline-red-500 "
        }`}
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
          <p className="text-sm text-error ml-2">Ingrese un valor</p>
        </div>
      )}
    </div>
  );
};
