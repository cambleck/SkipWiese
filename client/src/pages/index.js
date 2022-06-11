import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";

import Routes from "./Routes";
import Header from "../common/Header";
import Footer from "../common/Footer";

export default function App() {
  const [display, setDisplay] = useState(window.location.pathname);

  function updateDisplay(page) {
    setDisplay(page);
  }

  return (
    <BrowserRouter>
      <Header display={display} updateDisplay={(page) => updateDisplay(page)} />
      {Routes()}
      <Footer />
    </BrowserRouter>
  );
}
