import { Entry } from "../../interfaces";
import { EntriesState } from "./";

type EntriesAction = {
  type: "Entries - ActionName";
  payload: Entry;
};

export const entriesReducer = (
  state: EntriesState,
  action: EntriesAction
): EntriesState => {
  switch (action.type) {
    case "Entries - ActionName":
      return {
        ...state,
      };
    default:
      return state;
  }
};
