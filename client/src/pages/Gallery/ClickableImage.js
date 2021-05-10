import React from "react";
import M from "materialize-css";

const ClickableImage = (url) => {
  console.log(url, "IMAGEMLKSMDFLKMASDLFKM");
  return (
    <img
      className="materialboxed gallery-image"
      src={"https://skipwiese.s3.us-east-2.amazonaws.com/" + url}
      alt={"image"}
    />
  );
};

export default ClickableImage;
