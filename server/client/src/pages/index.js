import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";

import { Routes } from "./Routes";
import Header from "../components/Header";
import Footer from "../components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            {Routes()}
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
