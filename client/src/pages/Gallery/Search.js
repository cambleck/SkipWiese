import React, { Component } from "react";
import M from "materialize-css";

const Search = ({ searchValue, onSearchChange }) => {
  return (
    <div
      className="row "
      style={{
        display: "flex",
        alignItems: "center",
        borderRadius: 20,
        marginTop: 20,
        padding: "10px 30px",
        height: 20,
        maxWidth: 500,
      }}
    >
      <div className="col s12" style={{ marginTop: 24 }}>
        <div className="row">
          <form className="col s12">
            <div className="input-field col s12 font">
              <i className="material-icons prefix ">search</i>
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
