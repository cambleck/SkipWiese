import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";

import { Routes } from "./Routes";
import Header from "../components/Header";
import Footer from "../components/Footer";

class App extends React.Component {
  state = {
    loading: true,
  };

  // removes loading icon after page loads
  componentDidMount() {
    this.fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove(); // removing the spinner element
        this.setState({ loading: false }); // showing the app
      }
    });
  }

  fakeRequest = () => {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  };

  render() {
    if (this.state.loading) {
      return null; //app is not ready (fake request is in process)
    }
    return (
      <div>
        <BrowserRouter>
          <body>
            <Header />
            <main>{Routes()}</main>
            <Footer />
          </body>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
