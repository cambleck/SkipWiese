import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import ReactGa from "react-ga";
import { Routes } from "./Routes";
import Header from "../components/Header";
import Footer from "../components/Footer";

class App extends Component {
  componentDidMount() {
    if (process.env.NODE_ENV == "production") {
      ReactGa.initialize(process.env.GOOGLE_GA_ID);
      ReactGa.pageview(window.location.pathname + window.location.search);
    }
  }
  render() {
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
