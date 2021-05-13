import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Landing from "./Landing";
import Gallery from "./Gallery";
import About from "./About";
import Admin from "./_Admin";
import FourZeroFour from "./404";
import Shop from "./Shop";
import ArtworkPage from "./Gallery/ArtworkPage";
import ArtworkList from "./Gallery/ArtworkList";
import ListView from "./Gallery/ListView";

export const Routes = () => {
  return (
    <Switch>
      <Redirect from="/gallery/s/:type/1" to="/gallery/s/:type" />
      <Route exact path="/" component={Landing} />
      <Route exact path="/gallery" component={Gallery} />
      <Route path="/gallery/a/:id" component={ArtworkPage} />

      <Route path="/gallery/s/:type/:pageNumber" component={ArtworkList} />
      <Route exact path="/gallery/s/:type" component={ArtworkList} />
      <Route exact path="/about" component={About} />
      <Route exact path="/list" component={ListView} />
      <Route exact path="/_admin" component={Admin} />

      <Route render={FourZeroFour} />
    </Switch>
  );
};
