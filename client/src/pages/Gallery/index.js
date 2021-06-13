import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import typeList from "../typeList";
import all from "../_images/all.webp";

const renderTypes = () => {
  return _.map(typeList, ({ type, image }) => {
    return (
      <div
        className="type-box"
        style={{
          backgroundImage: `url(${image})`,
          backgroundColor: "rgb(18,20,22)",
        }}
        key={image}
      >
        <Link
          to={`./gallery/s/${type.toLowerCase()}`}
          className="type-box-cover"
        >
          {type}
        </Link>
      </div>
    );
  });
};

const GalleryPage = () => {
  return (
    <div className="flex-center full-width column">
      <Link
        className="black-text btn transparent flex-center"
        style={{ padding: "10px 50px", margin: 40 }}
        to="./list"
      >
        <i className="material-icons menu-item" style={{ marginRight: 10 }}>
          menu
        </i>
        LIST VIEW
      </Link>
      <div className="row type-grid">
        {renderTypes()}
        <div
          className="type-box"
          style={{
            backgroundImage: `url(${all}) `,
            backgroundColor: "rgb(18,20,22)",
          }}
        >
          <Link to="./gallery/s/all" className="type-box-cover">
            All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
