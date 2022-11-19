import { FC, useReducer } from "react";
import { EntriesContext, entriesReducer } from "./";
export interface EntriesState {
  entries: [];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
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
