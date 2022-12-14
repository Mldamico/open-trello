import { FC, useEffect, useReducer } from "react";
import { Entry, Status } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";
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

  const addNewEntry = async (description: string) => {
    const { data } = await entriesApi.post<Entry>("/entries", { description });

    dispatch({ type: "Entries - Add Entry", payload: data });
  };

  const updateEntry = async (entry: Entry) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${entry._id}`, {
        description: entry.description,
        status: entry.status,
      });
      dispatch({ type: "Entries - Entry Update", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEntry = async (entry: Entry) => {
    try {
      const { data } = await entriesApi.delete<Entry>(`/entries/${entry._id}`);
      dispatch({ type: "Entries - Delete Entry", payload: data });
    } catch (error) {
      console.log(error);
    }
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
        updateEntry,
        deleteEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
