import { createContext, useContext } from "react";
import {names} from "../data/index"

//1. Create context
const NamesContext = createContext();

//2. Context = provider + consumer 

//3. Provider
export function NamesProvider({ children }) {
    return (
      <NamesContext.Provider value={names}>{children}</NamesContext.Provider>
    );
  }

//4. Add provider in index.js, any component wrapped inside NamesProvider will be able to consume context value

// custom hook to return names
export function useNames(){
    const context = useContext(NamesContext);
    return context;
}