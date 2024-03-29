import React from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import InfoCard from "./InfoCard";

export default function ArtworkCard({ artwork, noLink }) {
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
          alt={title}
        />
      </div>
      {!size && !title ? (
        noLink ? (
          <></>
        ) : (
          <div className="artwork-info-container">
            <div className="card-action" style={{ fontWeight: "bold" }}></div>
            <Link
              to={_id}
              className=""
              style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
                color: "black",
              }}
            >
              →
            </Link>
          </div>
        )
      ) : (
        <InfoCard
          title={title}
          _id={_id}
          typeLabel={typeLabel}
          description={description}
          size={size}
          noLink={noLink}
        />
      )}
    </div>
  );
}
