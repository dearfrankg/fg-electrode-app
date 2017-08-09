import React from "react";
import { Route, IndexRoute } from "react-router";
import { Home } from "./components/home";
import { YourComponent } from "@cogent-labs/yourcomponent";

export const routes = (
  <Route path="/" component={Home}>
    <IndexRoute component={YourComponent} />
    <Route path="/invite" component={YourComponent} />
  </Route>
);
