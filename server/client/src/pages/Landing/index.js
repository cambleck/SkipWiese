import React from "react";
import M from "materialize-css";
import DandelionBlock from "./DandelionBlock";
import About from "./About";
import GalleryCarousel from "./GalleryCarousel";

const renderFirstBlock = () => {
  return <DandelionBlock />;
};

const renderSecondBlock = () => {
  return <GalleryCarousel />;
};

const renderThirdBlock = () => {
  return <About />;
};

class Landing extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <>
        {renderFirstBlock()} {renderSecondBlock()} {renderThirdBlock()}
      </>
    );
  }
}
export default Landing;
