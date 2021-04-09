import React from "react";
import { Route } from "react-router-dom";
import Landing from "./Landing";
import Gallery from "./Gallery";
import About from "./Landing/About";

export const Routes = () => {
  return (
    <>
      <Route exact path="/" component={Landing} />
      <Route exact path="/gallery" component={Gallery} />
      <Route exact path="/about" component={About} />
    </>
  );
};
