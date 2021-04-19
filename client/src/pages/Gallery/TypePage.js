import React from "react";
import _ from "lodash";
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
        <div className="type-box-cover">{type}</div>
      </div>
    );
  });
};

const TypePage = () => {
  return (
    <div className="row type-grid">
      <div className="type-box" style={{ backgroundImage: `url(${all}) ` }}>
        <div className="type-box-cover">All</div>
      </div>
      {renderTypes()}
    </div>
  );
};

export default TypePage;
