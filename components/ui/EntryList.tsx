import React, { DragEvent, FC, useContext, useMemo } from "react";
import { EntryCard } from "./";
import { Status } from "../../interfaces/entry";
import { EntriesContext } from "../../context/entries";

interface Props {
  status: Status;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries } = useContext(EntriesContext);

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  const onDrop = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData("text");
  };

  return (
    <div onDrop={onDrop} onDragOver={allowDrop}>
      <div className="h-[calc(100vh_-250px)] overflow-scroll bg-transparent p-1">
        <ul className="opacity-100">
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </ul>
      </div>
    </div>
  );
};
