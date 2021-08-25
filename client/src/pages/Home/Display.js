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
  { image: image, caption: "Self Portrait", box: 1 },
  { image: image2, caption: "Monotype", box: 2 },
  { image: image3, caption: "Etching", box: 2 },
  { image: image4, caption: "Graphite", box: 1 },
  { image: image, caption: "Self Portrait", box: 1 },
  { image: image5, caption: "Commerical", box: 2 },
  { image: image2, caption: "Monotype", box: 2 },
  { image: image4, caption: "Graphite", box: 1 },
  { image: image, caption: "Self Portrait", box: 1 },
  { image: image3, caption: "Etching", box: 2 },
  { image: image5, caption: "Commerical", box: 2 },
  { image: image4, caption: "Graphite", box: 1 },
  { image: image4, caption: "Graphite", box: 1 },
  { image: image2, caption: "Monotype", box: 2 },
  { image: image3, caption: "Etching", box: 2 },
  { image: image4, caption: "Graphite", box: 1 },
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
        <div className="grid" style={{ marginTop: 40 }}>
          {renderList()}
        </div>
      </Lightbox>
    );
  }
}

export default Display;
