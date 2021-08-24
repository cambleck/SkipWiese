import React from "react";
import M from "materialize-css";

const Search = ({ searchValue, onSearchChange }) => {
  return (
    <div className="search">
      <i className="material-icons" style={{ marginRight: 5 }}>
        search
      </i>
      <input
        className="search-input"
        type="text"
        value={searchValue}
        onChange={onSearchChange}
      />
    </div>
  );
};

const ListPanel = ({ searchValue, onSearchChange }) => {
  return (
    <div className="list-panel">
      <Search onSearchChange={onSearchChange} searchValue={searchValue} />
      <div
        style={{
          width: 1,
          height: 20,
          background: "black",
          margin: 5,
        }}
      ></div>
      <select class="browser-default">
        <option value="1">A-Z</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
    </div>
  );
};

export default ListPanel;
