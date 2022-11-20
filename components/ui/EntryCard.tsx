import React, { DragEvent, FC } from "react";
import { Entry } from "../../interfaces";

interface Props {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const onDragSart = (event: DragEvent) => {
    event.dataTransfer.setData("text", entry._id);
  };

  const onDragEnd = (event: DragEvent) => {};
  return (
    <div
      draggable
      onDragStart={onDragSart}
      onDragEnd={onDragEnd}
      className="mb-1 cursor-pointer bg-gray-700 p-3 hover:bg-slate-500 transition duration-200 ease-in-out rounded-xl"
    >
      <div>
        <div>
          <p className="whitespace-pre-line">{entry.description}</p>
        </div>
        <div className="flex justify-end">
          <p className="text-sm">{entry.createdAt}</p>
        </div>
      </div>
    </div>
  );
};
