import React from "react";
import M from "materialize-css";
import { SortDropdownSelect } from "../../common/DropdownSelect";

const Search = ({ searchValue, onSearchChange }) => {
  return (
    <div className="search">
      <i
        className="material-icons grey-text text-darken-4"
        style={{ marginRight: 5, marginLeft: 10 }}
      >
        search
      </i>
      <input
        className="search-input"
        value={searchValue}
        onChange={onSearchChange}
        type="search"
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

      <SortDropdownSelect onChange={onSortChange} />

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
