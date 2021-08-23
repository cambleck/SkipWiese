import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import loadable from "@loadable/component";

const Home = loadable(() => import("./Home"));
const Gallery = loadable(() => import("./Gallery"));
const Shop = loadable(() => import("./Shop"));
const About = loadable(() => import("./About"));
const Admin = loadable(() => import("./_Admin"));
const FourZeroFour = loadable(() => import("./404"));
const ArtworkPage = loadable(() => import("./Gallery/ArtworkPage"));
const ArtworkList = loadable(() => import("./Gallery/ArtworkList"));
const ListView = loadable(() => import("./Gallery/ListView"));

export const Routes = () => {
  return (
    <Switch>
      <Redirect from="/gallery/s/:type/1" to="/gallery/s/:type" />
      <Route exact path="/" component={Home} />
      <Route exact path="/gallery" component={Gallery} />
      <Route path="/gallery/a/:id" component={ArtworkPage} />
      <Route path="/gallery/s/:type/:pageNumber" component={ArtworkList} />
      <Route exact path="/gallery/s/:type" component={ArtworkList} />
      <Route exact path="/about" component={About} />
      <Route exact path="/list" component={ListView} />
      <Route exact path="/shop" component={Shop} />
      <Route exact path="/login" component={Admin} />
      <Route component={FourZeroFour} />
    </Switch>
  );
};
