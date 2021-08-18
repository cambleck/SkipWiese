import React, { Component } from "react";
import M from "materialize-css";

const Search = ({ searchValue, onSearchChange }) => {
  return (
    <div className="row search">
      <div className="col s12">
        <div className="row">
          <form className="col s12">
            <div className="input-field col s12 font">
              <i className="material-icons prefix tiny">search</i>
              <input
                type="text"
                value={searchValue}
                onChange={onSearchChange}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
