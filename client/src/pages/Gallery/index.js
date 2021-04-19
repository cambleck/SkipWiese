import React from "react";
import M from "materialize-css";
import TypePage from "./TypePage";

class Gallery extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return <TypePage />;
  }
}
export default Gallery;
