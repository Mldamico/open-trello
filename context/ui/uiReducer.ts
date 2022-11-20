import { UIState } from "./";

type UIAction =
  | {
      type: "UI - Toggle Sidebar";
    }
  | { type: "UI - Set Adding Entry"; payload: boolean };

export const uiReducer = (state: UIState, action: UIAction): UIState => {
  switch (action.type) {
    case "UI - Toggle Sidebar":
      return {
        ...state,
        sidemenuOpen: !state.sidemenuOpen,
      };
    case "UI - Set Adding Entry":
      return {
        ...state,
        isAddingEntry: action.payload,
      };
    default:
      return state;
  }
};
