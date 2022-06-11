import React from "react";
import _ from "lodash";
import typeList from "../typeList";
import { useHistory } from "react-router-dom";
import {
  SortDropdownSelect,
  TypeDropdownSelect,
} from "../../common/DropdownSelect";

function renderTypeOptions() {
  return _.map(typeList, ({ type }) => {
    return (
      <option value={type.toUpperCase()} key={type}>
        {type}
      </option>
    );
  });
}

export default function GalleryPanel({
  onSortChange,
  sort,
  onShuffleClick,
  type,
}) {
  const history = useHistory();

  function handleTypeChange(event) {
    history.push(`/gallery/${event.target.value.toLowerCase()}`);
    window.location.reload();
  }
  return (
    <div
      className="flex-center"
      style={{ width: "100%", marginTop: 20, background: "transparent" }}
    >
      <TypeDropdownSelect
        onChange={handleTypeChange}
        defaultValue={type.toUpperCase()}
      />
      <SortDropdownSelect onChange={onSortChange} />
      {sort === "shuffle" && (
        <button
          className="btn flex-center black-text"
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
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
}
