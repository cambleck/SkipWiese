import React, { Component } from "react";
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

export default Search;
