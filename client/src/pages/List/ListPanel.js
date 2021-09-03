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

const ListPanel = ({
  searchValue,
  onSearchChange,
  onSortChange,
  sort,
  onShuffleClick,
}) => {
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
      <select
        className="browser-default"
        onChange={onSortChange}
        defaultValue="default"
      >
        <option value="default">A-Z</option>
        <option value="reverse">Z-A</option>
        <option value="shuffle">Shuffle</option>
      </select>
      {sort === "shuffle" && (
        <button
          className="btn flex-center black-text waves-effect waves-light"
          style={{
            position: "fixed",
            bottom: 20,
            zIndex: 1000,
            background: "rgb(255,240,100)",
            width: 75,
            height: 75,
            borderRadius: "50%",
          }}
          onClick={onShuffleClick}
        >
          <i className="material-icons medium" style={{ fontSize: 28 }}>
            shuffle
          </i>
        </button>
      )}
    </div>
  );
};

export default ListPanel;
