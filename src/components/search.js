import { Fragment } from "react";
import {React, useRef,useEffect} from "react";
import { useAppState } from "../provider/appState";
export function Search() {
  let{searchName, setSearchName} = useAppState()
  function handleSearch (event){
    setSearchName(event.target.value);
  }
  let inputRef = useRef();
  useEffect(()=>{
    inputRef.current.focus()}
  )
  // console.log(searchName)
  return (
    <Fragment>
      <header>
        <input type="text" ref={inputRef} placeholder="Type a baby name..." value={searchName} onChange={handleSearch}/>
        </header>
    </Fragment>
  );
}
