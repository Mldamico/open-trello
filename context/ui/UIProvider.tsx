import { FC, useReducer } from "react";
import { UIContext, uiReducer } from "./";
export interface UIState {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false,
};

type Props = {
  children: JSX.Element;
};

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const toggleSideMenu = () => {
    dispatch({ type: "UI - Toggle Sidebar" });
  };

  const setIsAddingEntry = (value: boolean) => {
    dispatch({ type: "UI - Set Adding Entry", payload: value });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        toggleSideMenu,
        setIsAddingEntry,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
