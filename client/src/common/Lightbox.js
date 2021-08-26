import React from "react";
import { SRLWrapper } from "simple-react-lightbox-pro";

const options = {
  settings: {
    overlayColor: "rgb(255, 253, 250)",
    autoplaySpeed: 5000,
    transitionSpeed: 3000,
  },
  buttons: {
    backgroundColor: "transparent",
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
