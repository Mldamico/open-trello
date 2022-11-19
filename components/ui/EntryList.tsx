import React from "react";
import { EntryCard } from "./";

export const EntryList = () => {
  return (
    <div>
      <div className="h-[calc(100vh_-250px)] overflow-scroll bg-transparent p-1">
        <ul className="opacity-100">
          <EntryCard />
        </ul>
      </div>
    </div>
  );
};
