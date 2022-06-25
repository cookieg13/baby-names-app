import {React} from "react";
import { useAppState } from "../provider/appState";
export function ResetSearch() {

  let{searchName, setSearchName} = useAppState()
  let hasSearchName = searchName !== ""

  return (
      <div>
    { hasSearchName &&
    <button className="reset-search" onClick={()=>{  setSearchName("")}}>Reset Search</button>
    }
    </div>
  );
}
