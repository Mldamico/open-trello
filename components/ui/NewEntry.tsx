import React from "react";
import { AiOutlineSave } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
export const NewEntry = () => {
  return (
    <div className="mt-2 mb-1 px-1">
      <button className="w-full flex py-1 items-center justify-center space-x-2 border rounded-md">
        <IoIosAddCircleOutline />
        <span> Add New Entry</span>
      </button>
      <div className="relative my-4">
        <textarea
          id="text"
          className="peer bg-slate-800 outline w-full my-1 resize-none rounded p-2 placeholder-transparent"
          placeholder="New Entry"
          aria-label="New Entry"
        />
        <label
          htmlFor="text"
          className="absolute bg-slate-800 left-2 -top-1.5 text-gray-200 text-sm
          peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 transition-all duration-150 peer-focus:-top-1.5 peer-focus:text-xs peer-focus:text-gray-200 peer-placeholder-shown:px-2 "
        >
          New Entry
        </label>
      </div>

      <div className="flex justify-between">
        <button className="flex items-center space-x-2 py-1 px-3 border rounded outline-none focus:outline-none hover:text-slate-800 hover:bg-white duration-150 ease-linear transition-all">
          <AiOutlineSave />
          <p>Cancelar</p>
        </button>
        <button className="flex items-center space-x-2 py-1 px-3 border rounded outline-none focus:outline-none hover:text-slate-800 hover:bg-white duration-150 ease-linear transition-all">
          <AiOutlineSave />
          <p>Save</p>
        </button>
      </div>
    </div>
  );
};