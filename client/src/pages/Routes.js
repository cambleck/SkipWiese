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
const GalleryScroll = loadable(() => import("./Gallery/GalleryScroll"));
const ListView = loadable(() => import("./List"));

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/gallery" component={Gallery} />

      <Route exact path="/gallery/:type" component={GalleryScroll} />
      <Route exact path="/about" component={About} />
      <Route exact path="/list" component={ListView} />
      <Route exact path="/shop" component={Shop} />
      <Route exact path="/login" component={Admin} />
      <Route path="/:id" component={ArtworkPage} />
      <Route component={FourZeroFour} />
    </Switch>
  );
};
