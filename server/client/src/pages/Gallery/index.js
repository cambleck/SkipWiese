import React from "react";
import M from "materialize-css";
import ArtworkList from "./ArtworkList";

class Gallery extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return <ArtworkList />;
  }
}
export default Gallery;
