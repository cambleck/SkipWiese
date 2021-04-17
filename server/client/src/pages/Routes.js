import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import Gallery from "./Gallery";
import About from "./About";
import Admin from "./_Admin";
import FourZeroFour from "./404";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/gallery" component={Gallery} />
      <Route exact path="/about" component={About} />
      <Route exact path="/_admin" component={Admin} />
      <Route render={FourZeroFour} />
    </Switch>
  );
};
