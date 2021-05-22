import React from "react";
import Carousel from "../../components/Carousel";
import ImageList from "../typeList";

const GalleryCarousel = () => {
  return (
    <div style={{ background: "rgba(0,0,0,.01)", width: "100%" }}>
      <Carousel imageList={ImageList} />
      <div className="flex-center full-width">
        <a
          href="./gallery"
          className="black-text btn transparent"
          style={{ margin: "0px  0px 50px 0px " }}
        >
          Gallery →
        </a>
      </div>
    </div>
  );
};

export default GalleryCarousel;
