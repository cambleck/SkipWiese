import React from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

const ArtCard = ({ artwork }) => {
  const imageRef = React.useRef();

  React.useEffect(() => {
    M.Materialbox.init(imageRef.current);
  }, [imageRef]);
  const size = `${artwork.height} x ${artwork.width}`;
  return (
    <div
      className="col s12 m6 l4 card-container"
      style={{ margin: "200px 10px" }}
    >
      <div
        style={{
          border: "10px solid rgb(32,12,38)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "5px 7px 3px rgba(50,50,50,.5)",
          minHeight: 150,
          minWidth: 200,
        }}
      >
        <img
          className="materialboxed card-image"
          src={
            "https://skipwiese.s3.us-east-2.amazonaws.com/" + artwork.imageUrl
          }
          alt={"image"}
          ref={imageRef}
        />
      </div>
      <div className="content-container">
        <div className="card-action" style={{ fontWeight: "bold" }}></div>
        <Link to={`/gallery/a/${artwork._id}`} className="card-content">
          <span className="card-title">{artwork.title}</span>
          <span className="subContent">{artwork.typeLabel}</span>
          {artwork.height && <span className="subContent">{size}</span>}
        </Link>
      </div>
    </div>
  );
};

export default ArtCard;
