import React from "react";
import M from "materialize-css";
import Display from "./Display";
import Banner from "./Banner";
import { Helmet } from "react-helmet";

class Home extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div id="home" className="flex-center column">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Skip Wiese</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Banner />
        <Display />
      </div>
    );
  }
}
export default Home;
