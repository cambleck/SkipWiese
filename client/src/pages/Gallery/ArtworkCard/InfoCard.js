import React from "react";
import { Link } from "react-router-dom";

export default function InfoCard({
  title,
  _id,
  typeLabel,
  size,
  description,
  noLink,
}) {
  return (
    <div className="artwork-info-container">
      <Link
        to={`/${_id}`}
        className="artwork-info-card"
        style={{ cursor: noLink && "default" }}
      >
        <div className="art-content">
          <span className="artwork-info-title">{title}</span>
          <span className="artwork-info-subContent">
            {typeLabel ? typeLabel : ""}
          </span>
          <span className="artwork-info-subContent">{size && size}</span>
          <span className="artwork-info-subContent" style={{ marginTop: 10 }}>
            {description}
          </span>
        </div>
      </Link>
    </div>
  );
}
