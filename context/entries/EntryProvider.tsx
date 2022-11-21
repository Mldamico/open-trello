import { FC, useEffect, useReducer } from "react";
import { Entry, Status } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";
import { v4 as uuidv4 } from "uuid";
import { entriesApi } from "../../api";

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
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

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>("/entries");
    dispatch({ type: "Entries - Refresh Update", payload: data });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

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
