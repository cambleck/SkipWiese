import React from "react";
import M from "materialize-css";
import FirstBlock from "./FirstBlock";
import ThirdBlock from "./About";
import SecondBlock from "./GalleryCarousel";

class Landing extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div className="flex-center column">
        <FirstBlock />
        <SecondBlock />
        <ThirdBlock />
      </div>
    );
  }
}
export default Landing;
