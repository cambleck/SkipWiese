import React from "react";
import M from "materialize-css";
import Display from "./Display";

class Home extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div id="home" className="flex-center column" style={{ marginTop: -20 }}>
        <Display />
      </div>
    );
  }
}
export default Home;
