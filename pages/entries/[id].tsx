import React from "react";
import { Layout } from "../../components/layouts";
import { AiOutlineSave } from "react-icons/ai";
const EntryPage = () => {
  return (
    <Layout>
      <div className="flex justify-center mt-1 bg-slate-900 w-full mx-auto md:w-[70%] lg:w-[50%] rounded-lg">
        <div className="w-full m-3">
          <div className="flex flex-col justify-start">
            <h3>Entry</h3>
            <h5>Created at ...</h5>
          </div>
          <div className="relative mt-2">
            <textarea
              // ref={setRef}
              // value={inputValue}
              // onChange={onTextFieldChanges}
              id="text"
              className="peer bg-slate-800 outline w-full my-1 resize-none rounded p-2 placeholder-transparent"
              placeholder="New Entry"
              aria-label="New Entry"
              // onBlur={() => setTouched(true)}
            />
            <label
              htmlFor="text"
              className="absolute bg-slate-800 left-2 -top-1.5 text-gray-200 text-sm
          peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 transition-all duration-150 peer-focus:-top-1.5 peer-focus:text-xs peer-focus:text-gray-200 peer-placeholder-shown:px-2 "
            >
              New Entry
            </label>
          </div>
          <div>
            <button className="flex justify-center rounded font-bold py-2 space-x-2 items-center w-full bg-slate-600 hover:bg-slate-300 hover:text-black">
              <AiOutlineSave />
              <span>Save</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EntryPage;
