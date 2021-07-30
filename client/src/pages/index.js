import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";

import { Routes } from "./Routes";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
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
};

export default App;
