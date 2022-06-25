import { NamesList } from "./names-list";
import { useNames } from "../provider/names";
import { useAppState } from "../provider/appState";

export function ShortList() {
  let names = useNames()
  let { shortList, setShortList } = useAppState()
  let shortListedNames = names.filter((item) => shortList.includes(item.id));
  let hasNames = shortListedNames.length > 0;
  function removeFromShortlist(idx) {
    setShortList(shortList.filter((item) => item !== idx));
  }

  return (
    <div className="short-list">
      <h2>{hasNames ? "Your ShortList" : "ShortList Baby names"}</h2>
      {hasNames && (
        <NamesList
          namesList={shortListedNames}
          handleOnClick={removeFromShortlist}
        />
      )}
    </div>
  );
}
