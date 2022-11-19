import { FC, useReducer } from "react";
import { Entry, Status } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";
import { v4 as uuidv4 } from "uuid";
export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: "Est tempor nulla id ipsum adipisicing do ea duis nostrud.",
      status: Status.PENDING,
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: "Est tempor nulla id ipsum adipisicing do ea duis nostrud2.",
      status: Status.IN_PROGRESS,
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description: "Est tempor nulla id ipsum adipisicing do ea duis nostrud3.",
      status: Status.FINISHED,
      createdAt: Date.now() - 100000,
    },
  ],
};

type Props = {
  children: JSX.Element;
};

export const EntryProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  return (
    <EntriesContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
