import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import typeList from "../typeList";
import all from "../_images/all.webp";
import { Helmet } from "react-helmet";

const renderTypes = () => {
  return _.map(typeList, ({ type, image }) => {
    return (
      <Link
        to={`./gallery/${type.toLowerCase()}`}
        className="type-card flex-center column"
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
};

const Gallery = () => {
  return (
    <div
      id="gallery"
      className="flex-center full-width column"
      style={{ marginTop: 10, marginBottom: 40 }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gallery | Skip Wiese</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="row type-grid">
        {renderTypes()}
        <Link className="type-card flex-center column" to="./gallery/all">
          <img className="type-image" src={all} alt="all" />
          <div style={{ padding: 10, color: "black" }}>All</div>
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
