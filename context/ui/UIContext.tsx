import { createContext } from "react";

interface ContextProps {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  toggleSideMenu: () => void;
  setIsAddingEntry: (value: boolean) => void;
}

export const UIContext = createContext({} as ContextProps);
