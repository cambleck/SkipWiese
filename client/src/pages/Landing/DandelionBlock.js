import React from "react";
import image from "./self-portrait.JPG";

const DandelionBlock = () => {
  return (
    <div
      style={{
        marginTop: 10,
        display: "flex",
        width: "100%",
        height: "650px",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        flexDirection: "column",
        position: "relative",
        padding: 30,
      }}
    >
      <div className="landingBlob">
        <h2>The Many Expressions of Skip Wiese</h2>
        <div
          style={{
            fontSize: 20,
            fontWeight: 600,
            marginBottom: 50,
            marginTop: -15,
          }}
        >
          April 17th 2021 - May 2021
        </div>
        <div style={{ fontSize: 20, fontWeight: "bold" }}>
          Dandelion Art Gallery
        </div>
        <div style={{ fontSize: 16, fontWeight: 400 }}>
          109 S Genesee St | Waukegan, IL 60085
        </div>
        <a
          className="yellow-button yellow waves-effect "
          href="https://www.dandeliongallery.org/"
          target="_blank"
        >
          <div style={{ marginTop: 15 }}>SEE MORE →</div>
        </a>
      </div>
    </div>
  );
};

export default DandelionBlock;
