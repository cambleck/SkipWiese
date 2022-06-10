import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";

import { Routes } from "./Routes";
import Header from "../common/Header";
import Footer from "../common/Footer";

class App extends React.Component {
  state = {
    display: window.location.pathname,
  };

  updateDisplay = (page) => {
    console.log(page);
    this.setState({ display: page });
  };
  render() {
    return (
      <BrowserRouter>
        <Header
          display={this.state.display}
          updateDisplay={(page) => this.updateDisplay(page)}
        />
        {Routes()}
      </BrowserRouter>
    );
  }
}

export default App;
