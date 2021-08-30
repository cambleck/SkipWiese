import React from "react";
import M from "materialize-css";
import Display from "./Display";
import Banner from "./Banner";
import MetaInfo from "../../common/MetaInfo";

class Home extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div id="home" className="flex-center column">
        <MetaInfo title="Skip Wiese" />
        <Banner />
        <Display />
      </div>
    );
  }
}
export default Home;
