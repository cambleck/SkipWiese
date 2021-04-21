import React from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

const ArtCard = ({ artwork }) => {
  const imageRef = React.useRef();

  React.useEffect(() => {
    M.Materialbox.init(imageRef.current);
  }, [imageRef]);

  return (
    <div className="col s12 m6 l4 card-container" style={{ margin: 100 }}>
      <div
        style={{
          border: "10px solid rgb(32,12,38)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "5px 7px 3px rgba(50,50,50,.5)",
        }}
      >
        <img
          className="materialboxed gallery-image"
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
          <span className="subContent" style={{ textTransform: "capitalize" }}>
            {artwork.type.toLowerCase()}
          </span>
          <span className="subContent">{artwork.size}</span>
          <span className="subContent">${artwork.price}</span>
        </Link>
      </div>
    </div>
  );
};

export default ArtCard;