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
        <div style={{ padding: 5 }}>{type}</div>
      </Link>
    );
  });
};

const GalleryPage = () => {
  return (
    <div id="gallery" className="flex-center full-width column">
      <div className="row type-grid">
        {renderTypes()}
        <div
          className="type-box"
          style={{
            backgroundImage: `url(${all}) `,
            backgroundColor: "rgb(18,20,22)",
          }}
        >
          <Link to="./gallery/s/all" className="type-box">
            All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
