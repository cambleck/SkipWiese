import React from "react";
import M from "materialize-css";
import Display from "./Display";

class Home extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div id="home" className="flex-center column" style={{}}>
        <Display />
      </div>
    );
  }
}
export default Home;
