import React, { FC, useContext, useMemo } from "react";
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

  return (
    <div>
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
