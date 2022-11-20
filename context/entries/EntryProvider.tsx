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

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: Status.PENDING,
    };

    dispatch({ type: "Entries - Add Entry", payload: newEntry });
  };

  const onEntryUpdated = (entry: Entry) => {
    dispatch({ type: "Entries - Entry Update", payload: entry });
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addNewEntry,
        onEntryUpdated,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
