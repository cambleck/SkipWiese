import React from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

const ArtCard = ({ artwork }) => {
  const { height, width, imageUrl, _id, title, type, typeLabel } = artwork;
  const imageRef = React.useRef();

  React.useEffect(() => {
    M.Materialbox.init(imageRef.current);
  }, [imageRef]);
  const size = `${height} x ${width}`;

  return (
    <div
      className="col s12 m6 l4 card-container"
      style={{ margin: "200px auto" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "5px 7px 3px rgba(50,50,50,.5)",
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
        <div className="content-container">
          <div className="card-action" style={{ fontWeight: "bold" }}></div>
          <Link
            to={`/gallery/a/${_id}`}
            className="card-content"
            style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}
          >
            →
          </Link>
        </div>
      ) : (
        <div className="content-container">
          <div className="card-action" style={{ fontWeight: "bold" }}></div>
          <Link to={`/gallery/a/${_id}`} className="card-content">
            <span className="card-title">{title}</span>
            <span className="subContent">{typeLabel}</span>
            {height && <span className="subContent">{size}</span>}
          </Link>
        </div>
      )}
    </div>
  );
};

export default ArtCard;
