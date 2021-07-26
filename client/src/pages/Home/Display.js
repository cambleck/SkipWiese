import React from "react";
import image from "./self-portrait.webp";

const Display = () => {
  return (
    <div className="flex-center" style={{ margin: 20, maxWidth: 800 }}>
      <img
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          margin: "50px auto",
          boxShadow: "3px 3px 30px grey",
        }}
        src={image}
      ></img>
    </div>
  );
};

export default Display;
