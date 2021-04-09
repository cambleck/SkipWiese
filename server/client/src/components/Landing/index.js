import React from "react";
import M from "materialize-css";
import DandelionBlock from "./DandelionBlock";
import About from "./About";

const renderFirstBlock = () => {
  return <DandelionBlock />;
};

const renderSecondBlock = () => {
  return <About />;
};

class Landing extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <>
        {renderFirstBlock()} {renderSecondBlock()}
      </>
    );
  }
}
export default Landing;
