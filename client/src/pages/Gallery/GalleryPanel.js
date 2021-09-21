import React from "react";
import _ from "lodash";
import typeList from "../typeList";
import { useHistory } from "react-router-dom";

function renderTypeOptions() {
  return _.map(typeList, ({ type }) => {
    return (
      <option value={type.toUpperCase()} key={type}>
        {type}
      </option>
    );
  });
}

const GalleryPanel = ({ onSortChange, sort, onShuffleClick, type }) => {
  const history = useHistory();

  const handleTypeChange = (event) => {
    history.push(`/gallery/${event.target.value.toLowerCase()}`);
    window.location.reload();
  };
  return (
    <div
      className="flex-center"
      style={{ width: "100%", marginTop: 30, background: "transparent" }}
    >
      <select
        className="browser-default"
        style={{ maxWidth: 200, margin: 5, zIndex: 99909 }}
        defaultValue={type.toUpperCase()}
        onChange={handleTypeChange}
      >
        {renderTypeOptions()}
      </select>
      <i className="material-icons black-text" style={{ marginLeft: -25 }}>
        arrow_drop_down
      </i>
      <select
        className="browser-default transparent"
        onChange={onSortChange}
        defaultValue="default"
        style={{ zIndex: 99909 }}
      >
        <option value="default">A-Z</option>
        <option value="reverse">Z-A</option>
        <option value="shuffle">Shuffle</option>
      </select>
      <i className="material-icons black-text" style={{ marginLeft: -20 }}>
        arrow_drop_down
      </i>
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
};

export default GalleryPanel;
