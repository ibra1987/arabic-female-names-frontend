import { createContext } from "react";

const store = {
  state: {
    names: [],
  },
  actions: {
    setNames: (payload) => {
      return (state.names = [...payload]);
    },
  },
};

const AppContext = createContext(store);

export const AppContextProvider = ({ children }) => {
  return <AppContext>{children}</AppContext>;
};
