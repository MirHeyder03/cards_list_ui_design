import "./App.scss";
import getApis from "./api/cards.json";
import SearchBar from "./components/search/SearchBar";
import { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards";
function App() {
  const [search, setSearch] = useState("");
  const [apis, setApis] = useState(getApis);
  const bookmarks = apis.filter((api) => api.bookmark === true);
  const toogleBookMark = (id) => {
    setApis(
      apis.map((api) => {
        if (api.id === id) {
          api.bookmark = !api.bookmark;
        }
        return api;
      })
    );
  };
  return (
    <div className="App">
      <h3>
        A collective list of free APIs for use in <br /> software and web
        development.
      </h3>
      <SearchBar search={search} setSearch={setSearch} />
      <div className="container">
        <h3>Featured APIs of this week</h3>
        <div className="api-list">
          {apis
            .filter((api) =>
              api.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((api) => (
              <Cards api={api} key={api.id} toogleBookMark={toogleBookMark} />
            ))}
        </div>
      </div>
      <div className="container">
        <h4>Your Bookmarks</h4>
        <div className="api-list">
          {bookmarks.map((api) => (
            <Cards api={api} key={api.id} toogleBookMark={toogleBookMark} />
          ))}
          {bookmarks.length === 0 && (
            <h5>There is no item on your bookmarks</h5>
          )}
        </div>
      </div>
    </div>
  );
}
export default App;
