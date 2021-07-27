import React from "react";
import image from "./self-portrait.webp";
import image2 from "../_images/monotype.webp";
import image3 from "../_images/etching.webp";
import image4 from "../_images/graphite.webp";
import image5 from "../_images/commercial.webp";
import M from "materialize-css";
import { SRLWrapper } from "simple-react-lightbox";

const options = {
  settings: {
    overlayColor: "rgb(10, 12, 14)",
    autoplaySpeed: 3000,
    transitionSpeed: 1200,
  },
  buttons: {
    backgroundColor: "rgb(10,12,14)",
    iconColor: "rgba(255, 255, 139, 0.8)",
    showDownloadButton: false,
  },

  caption: {
    captionColor: "white",
    captionFontFamily: "Gill Sans, sans-serif",
    captionFontWeight: "400",
    captionContainerPadding: "0px 10px",
  },
  progressBar: {
    showProgressBar: false,
  },
};

class Display extends React.Component {
  render() {
    return (
      <SRLWrapper options={options}>
        <div>
          <img src={image} style={{ width: 500 }} alt="Picture of the author" />
        </div>
        <a href={image2}>
          <img src={image2} alt="Umbrella" />
        </a>
        <a href={image3}>
          <img src={image3} alt="Umbrella" />
        </a>
        <a href={image4}>
          <img src={image4} alt="Umbrella" />
        </a>
        <a href={image5}>
          <img src={image5} alt="Umbrella" />
        </a>
      </SRLWrapper>
    );
  }
}

export default Display;
