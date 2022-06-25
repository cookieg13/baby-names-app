import { NamePicker } from "./components/name-picker";
import { Search } from "./components/search";
import { ShortList } from "./components/short-list";
import { ResetSearch } from "./components/reset-search";

function App() {
  return (
    <>
      <h1>Baby Name Picker👼</h1>
      <Search />
      <ShortList />
      <hr />
      <NamePicker />
      <ResetSearch />
    </>
  );
}

export default App;
