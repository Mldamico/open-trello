import { Entry } from "../../interfaces";
import { EntriesState } from "./";

type EntriesAction =
  | {
      type: "Entries - Add Entry";
      payload: Entry;
    }
  | {
      type: "Entries - Entry Update";
      payload: Entry;
    };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesAction
): EntriesState => {
  switch (action.type) {
    case "Entries - Add Entry":
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };
    case "Entries - Entry Update":
      return {
        ...state,
        entries: state.entries.map((entry) => {
          if (entry._id === action.payload._id) {
            entry.status = action.payload.status;
            entry.description = action.payload.description;
          }

          return entry;
        }),
      };
    default:
      return state;
  }
};
