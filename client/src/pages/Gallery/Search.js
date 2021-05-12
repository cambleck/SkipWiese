import React, { Component } from "react";
import M from "materialize-css";

const Search = ({ searchValue, onSearchChange }) => {
  return (
    <div
      class="row "
      style={{
        display: "flex",
        alignItems: "center",
        borderRadius: 20,

        padding: "10px 30px",
        height: 20,
        maxWidth: 500,
      }}
    >
      <div class="col s12" style={{ marginTop: 24 }}>
        <div class="row">
          <form class="col s12">
            <div class="input-field col s12 font">
              <i class="material-icons prefix ">search</i>
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
