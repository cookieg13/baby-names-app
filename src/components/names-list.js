import { Fragment } from "react";
import { useAppState } from "../provider/appState";
export function NamesList({ namesList, handleOnClick}) {
  return (
    <Fragment>
      {namesList.map((item) => (
        <li key={item.id} className={item.sex}>
          {/* to pass id, make onclick an arrow function */}
          <button onClick={() => handleOnClick(item.id)}>{item.name}</button>
        </li>
      ))}
    </Fragment>
  );
}

