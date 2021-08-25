import React from "react";
import { SRLWrapper } from "simple-react-lightbox-pro";

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

const Lightbox = ({ children, customCaptions }) => {
  return (
    <SRLWrapper options={options} customCaptions={customCaptions}>
      {children}
    </SRLWrapper>
  );
};

export default Lightbox;
