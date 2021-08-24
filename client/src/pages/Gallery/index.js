import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import typeList from "../typeList";
import all from "../_images/all.webp";

const renderTypes = () => {
  return _.map(typeList, ({ type, image }) => {
    return (
      <Link
        to={`./gallery/s/${type.toLowerCase()}`}
        className="type-card flex-center column"
      >
        <img className="type-image" src={image} alt={type} />
        <div style={{ padding: 10 }}>{type}</div>
      </Link>
    );
  });
};

const Gallery = () => {
  return (
    <div id="gallery" className="flex-center full-width column">
      <div className="row type-grid">
        {renderTypes()}
        <Link className="type-card flex-center column" to="./gallery/s/all">
          <img className="type-image" src={all} alt="all" />
          <div style={{ padding: 10, color: "black" }}>All</div>
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
