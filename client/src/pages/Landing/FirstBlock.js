import React from "react";
import image from "./self-portrait.JPG";

const FirstBlock = () => {
  return (
    <div
      style={{
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
        <h1
          style={{
            color: "white",
            textShadow: "0px 0px 13px black",
            maxWidth: 600,
          }}
        >
          Celebrating The Life Of Skip Wiese
        </h1>
        <div
          style={{
            fontSize: 26,
            fontWeight: 600,
            marginBottom: 5,
            marginTop: -5,

            textShadow: "0px 0px 10px white",
          }}
        >
          October 2021
        </div>
        <a
          className="yellow-button waves-effect "
          href="mailto:ckbleck@gmail.com"
          target="_blank"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div>CONTACT →</div>
        </a>
      </div>
    </div>
  );
};

export default FirstBlock;
