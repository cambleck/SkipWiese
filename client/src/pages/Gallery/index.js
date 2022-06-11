import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import typeList from "../typeList";
import "./gallery.css";

import MetaInfo from "../../common/MetaInfo";

function renderTypes() {
  return _.map(typeList, ({ type, image }) => {
    return (
      <Link
        to={`./gallery/${type.toLowerCase()}`}
        className="type-card flex-center column"
        key={type}
      >
        <img className="type-image" src={image} alt={type} />
        <div
          className="flex-center"
          style={{
            padding: "10px 5px",
          }}
        >
          {type}
        </div>
      </Link>
    );
  });
}

export default function Gallery() {
  return (
    <div
      id="gallery"
      className="flex-center full-width column"
      style={{ marginTop: 10 }}
    >
      <MetaInfo title="Gallery | Skip Wiese" />
      <div className="row type-grid">{renderTypes()}</div>
    </div>
  );
}
