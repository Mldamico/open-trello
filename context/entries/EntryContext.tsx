import { createContext } from "react";
import { Entry } from "../../interfaces";

interface ContextProps {
  entries: Entry[];
  addNewEntry: (description: string) => void;
  onEntryUpdated: (entry: Entry) => void;
}

export const EntriesContext = createContext({} as ContextProps);
