import React from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

const ArtworkInfo = ({ title, _id, typeLabel, size, description }) => {
  return (
    <div className="gallery-content-container">
      <div className="card-action" style={{ fontWeight: "bold" }}></div>

      <Link
        to={`/gallery/a/${_id}`}
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <div className="art-content">
          <span className="card-title">{title}</span>
          <span className="subContent">{typeLabel ? typeLabel : ""}</span>
          <span className="subContent">{size && size}</span>
          <span className="subContent" style={{ marginTop: 10 }}>
            {description}
          </span>
        </div>
      </Link>
    </div>
  );
};

const ArtCard = ({ artwork }) => {
  const {
    height,
    width,
    imageUrl,
    _id,
    title,
    type,
    typeLabel,
    description,
  } = artwork;

  var size;
  if (height) {
    size = `${height} x ${width}`;
  } else {
    size = null;
  }

  return (
    <div className="col s12 m6 l4 card-container">
      <div className="flex-center">
        <img
          className="artwork-image"
          src={"https://skipwiese.s3.us-east-2.amazonaws.com/" + imageUrl}
          alt={"image"}
        />
      </div>
      {!height && !title ? (
        <div className="gallery-content-container">
          <div className="card-action" style={{ fontWeight: "bold" }}></div>
          <Link
            to={`/gallery/a/${_id}`}
            className=""
            style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}
          >
            →
          </Link>
        </div>
      ) : (
        <ArtworkInfo
          title={title}
          _id={_id}
          typeLabel={typeLabel}
          description={description}
          size={size}
        />
      )}
    </div>
  );
};

export default ArtCard;
