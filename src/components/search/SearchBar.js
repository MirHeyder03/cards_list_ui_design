import { GrSearch } from "react-icons/gr";
import React from "react";
import "./searchBar.scss";
const SearchBar = ({ search, setSearch }) => {
  return (
    <form className="api-search-form">
      <div className="icon">
        <GrSearch />
      </div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Find development, games, images APIs"
      />
      <h1>{search}</h1>
    </form>
  );
};
export default SearchBar;
