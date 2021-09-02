import React from "react";
import { SRLWrapper } from "simple-react-lightbox-pro";

const options = {
  settings: {
    overlayColor: "rgb(255, 253, 250)",
    autoplaySpeed: 5000,
    disablePanzoom: true,
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
  thumbnails: {
    thumbnailsOpacity: 0.4,
    thumbnailsSize: ["50px", "50px"],
  },
};
const singleOptions = {
  settings: {
    overlayColor: "rgb(255, 253, 250)",
    autoplaySpeed: 5000,
    disablePanzoom: true,
    transitionSpeed: 3000,
  },
  buttons: {
    backgroundColor: "transparent",
    iconColor: "rgba(10, 12, 14, 0.8)",
    showDownloadButton: false,
    showNextButton: false,
    showPrevButton: false,
    showThumbnailsButton: false,
    showAutoplayButton: false,
  },

  caption: {
    showCaption: false,
  },
  progressBar: {
    showProgressBar: false,
  },
  thumbnails: {
    showThumbnails: false,
  },
};

const Lightbox = ({ children, customCaptions, single }) => {
  return (
    <SRLWrapper
      options={single ? singleOptions : options}
      customCaptions={customCaptions}
    >
      {children}
    </SRLWrapper>
  );
};

export default Lightbox;
