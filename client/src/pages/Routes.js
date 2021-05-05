import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import Gallery from "./Gallery";
import About from "./About";
import Admin from "./_Admin";
import FourZeroFour from "./404";
import Shop from "./Shop";
import ArtworkPage from "./Gallery/ArtworkPage";
import NewArtwork from "./_Admin/Create/";
import ArtworkList from "./Gallery/ArtworkList";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/gallery" component={Gallery} />
      <Route path="/gallery/a/:id" component={ArtworkPage} />
      <Route path="/gallery/s/:type" component={ArtworkList} />
      <Route exact path="/about" component={About} />
      <Route exact path="/shop" component={Shop} />
      <Route exact path="/_admin" component={Admin} />
      <Route path="/_admin/new" component={NewArtwork} />

      <Route render={FourZeroFour} />
    </Switch>
  );
};
