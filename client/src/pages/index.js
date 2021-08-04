import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";

import { Routes } from "./Routes";
import Header from "./Header";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <main>{Routes()}</main>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
