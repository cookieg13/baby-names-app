import { createContext, useState,useContext } from "react";

const AppStateContext = createContext();

export function AppStateProvider({ children }) {
  let [searchName, setSearchName] = useState("");
  let [shortList, setShortList] = useState([]);
  const value = { searchName, setSearchName, shortList, setShortList };
  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
}
// custom hook 
export function useAppState(){
    const context = useContext(AppStateContext);
    return context;
}
