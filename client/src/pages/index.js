import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";

import { Routes } from "./Routes";
import Header from "./Header";
import Footer from "./Footer";

class App extends React.Component {
  state = {
    display: window.location.pathname,
  };

  componentDidMount() {
    console.log(this.state.display);
  }
  updateDisplay = (page) => {
    this.setState({ display: page });
  };
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header
            display={this.state.display}
            updateDisplay={(page) => this.updateDisplay(page)}
          />
          <main>{Routes()}</main>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
