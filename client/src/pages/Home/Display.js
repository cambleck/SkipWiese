import React from "react";
import _ from "lodash";
import image from "./self-portrait.webp";
import image2 from "../_images/monotype.webp";
import image3 from "../_images/etching.webp";
import image4 from "../_images/graphite.webp";
import image5 from "../_images/commercial.webp";
import M from "materialize-css";
import Lightbox from "../../common/Lightbox";
const imageList = [
  { image: image, caption: "Self Portrait" },
  { image: image2, caption: "Monotype" },
  { image: image3, caption: "Etching" },
  { image: image4, caption: "Graphite" },
  { image: image, caption: "Self Portrait" },
  { image: image5, caption: "Commerical" },
  { image: image2, caption: "Monotype" },
  { image: image4, caption: "Graphite" },
  { image: image, caption: "Self Portrait" },
  { image: image3, caption: "Etching" },
  { image: image5, caption: "Commerical" },
  { image: image4, caption: "Graphite" },
  { image: image4, caption: "Graphite" },
  { image: image2, caption: "Monotype" },
  { image: image3, caption: "Etching" },
  { image: image4, caption: "Graphite" },
];

const renderList = () => {
  return _.map(imageList, ({ image, caption, box }) => {
    return <img src={image} className="home-image" alt={caption} />;
  });
};

class Display extends React.Component {
  render() {
    return (
      <Lightbox>
        <div className="grid">{renderList()}</div>
      </Lightbox>
    );
  }
}

export default Display;
