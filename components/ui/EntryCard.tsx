import { useRouter } from "next/router";
import React, { DragEvent, FC, useContext } from "react";
import { UIContext } from "../../context/ui";
import { Entry } from "../../interfaces";
import { dateFunctions } from "../../utils";
import { IoIosTimer } from "react-icons/io";
interface Props {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const { startDragging, endDragging } = useContext(UIContext);
  const router = useRouter();
  const onDragSart = (event: DragEvent) => {
    event.dataTransfer.setData("text", entry._id);
    startDragging();
  };

  const onDragEnd = (event: DragEvent) => {
    endDragging();
  };
  const onClick = () => {
    router.push(`/entries/${entry._id}`);
  };
  return (
    <div
      onClick={onClick}
      draggable
      onDragStart={onDragSart}
      onDragEnd={onDragEnd}
      className="mb-1 cursor-pointer bg-gray-400 hover:bg-slate-300 dark:bg-gray-700 p-3 dark:hover:bg-slate-500 transition duration-200 ease-in-out rounded-xl"
    >
      <div>
        <div>
          <p className="whitespace-pre-line">{entry.description}</p>
        </div>
        <div className="flex justify-end">
          <p className="text-sm flex items-center space-x-1">
            <IoIosTimer />
            <span>{dateFunctions.getFormatDistanceToNow(entry.createdAt)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
