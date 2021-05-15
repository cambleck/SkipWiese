import React from "react";
import M from "materialize-css";
import GalleryPage from "./GalleryPage";

class Gallery extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return <GalleryPage />;
  }
}
export default Gallery;
