import { UIState } from "./";

type UIAction = {
  type: "UI - Toggle Sidebar";
};

export const uiReducer = (state: UIState, action: UIAction): UIState => {
  switch (action.type) {
    case "UI - Toggle Sidebar":
      return {
        ...state,
        sidemenuOpen: !state.sidemenuOpen,
      };
    default:
      return state;
  }
};
