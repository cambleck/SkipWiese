import React from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

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
  const imageRef = React.useRef();

  React.useEffect(() => {
    M.Materialbox.init(imageRef.current);
  }, [imageRef]);
  const size = `${height} x ${width}`;

  return (
    <div
      className="col s12 m6 l4 card-container"
      style={{ margin: "200px 20px" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          className="materialboxed card-image"
          src={"https://skipwiese.s3.us-east-2.amazonaws.com/" + imageUrl}
          alt={"image"}
          ref={imageRef}
        />
      </div>
      {!height && !title && !typeLabel ? (
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
              <span className="subContent">{height && size}</span>
              <span className="subContent" style={{ marginTop: 10 }}>
                {description}
              </span>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ArtCard;
