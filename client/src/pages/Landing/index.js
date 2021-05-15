import React from "react";
import M from "materialize-css";
import FirstBlock from "./FirstBlock";
import About from "./About";
import GalleryCarousel from "./GalleryCarousel";

const renderFirstBlock = () => {
  return <FirstBlock />;
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {renderFirstBlock()} {renderSecondBlock()} {renderThirdBlock()}
      </div>
    );
  }
}
export default Landing;
