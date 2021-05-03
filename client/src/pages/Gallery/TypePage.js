import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import typeList from "../typeList";
import all from "../_images/all.jpg";
const renderTypes = () => {
  return _.map(typeList, ({ type, image }) => {
    return (
      <div
        className="type-box"
        style={{
          backgroundImage: `url(${image})`,
        }}
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

const TypePage = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="row type-grid">
        <div className="type-box" style={{ backgroundImage: `url(${all}) ` }}>
          <Link to="./gallery/s/all" className="type-box-cover">
            All
          </Link>
        </div>
        {renderTypes()}
      </div>
    </div>
  );
};

export default TypePage;
