import { NamesList } from "./names-list";
import { useNames } from "../provider/names";
import { useAppState } from "../provider/appState";

export function NamePicker() {
  let names = useNames()
  let {searchName,shortList, setShortList} = useAppState()
  // 1. first make filtered array
  let filteredNames = names.filter((entry)=> 
  entry.name.toLowerCase().includes(searchName.toLowerCase()))
  .filter((entry)=> !shortList.includes(entry.id))

  function handleClick(idx){
      setShortList( [...shortList,idx])
    }

  console.log(shortList)
  return (
    <NamesList namesList={filteredNames} handleOnClick={handleClick}/>
  );
}

