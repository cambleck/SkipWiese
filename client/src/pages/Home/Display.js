import React from "react";
import _ from "lodash";
import image from "./self-portrait.webp";
import image2 from "../_images/monotype.webp";
import image3 from "../_images/etching.webp";
import image4 from "../_images/graphite.webp";
import image5 from "../_images/commercial.webp";
import M from "materialize-css";
import { SRLWrapper } from "simple-react-lightbox";

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

const options = {
  settings: {
    overlayColor: "rgb(255, 255, 255)",
    autoplaySpeed: 2500,
    transitionSpeed: 2000,
  },
  buttons: {
    backgroundColor: "rgb(255,255,255)",
    iconColor: "rgba(10, 12, 14, 0.8)",
    showDownloadButton: false,
  },

  caption: {
    captionColor: "black",
    captionFontFamily: "Gill Sans, sans-serif",
    captionFontWeight: "400",
    captionContainerPadding: "0px 10px",
  },
  progressBar: {
    showProgressBar: false,
  },
};

const renderList = () => {
  return _.map(imageList, ({ image, caption, box }) => {
    return (
      <img
        src={image}
        style={{
          width: 350,
          height: 350,
          margin: 10,
          objectFit: "cover",
        }}
        alt={caption}
      />
    );
  });
};

class Display extends React.Component {
  render() {
    return (
      <SRLWrapper options={options}>
        <div className="grid" style={{ marginTop: 10 }}>
          {renderList()}
        </div>
      </SRLWrapper>
    );
  }
}

export default Display;
