import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ContentPage from "./components/contentPage";
import CounterPage from "./components/counterPage";

export default class Routes extends Component {
  render() {
    return (
      <Router basename="/playlist-test">
        <Switch>
          <Route
            exact
            path={"/"}
            component={ContentPage}>
          </Route>
          <Route
            path={"/contenidos"}
            component={ContentPage}
          ></Route>
          <Route
            path={"/contadores"}
            component={CounterPage}
          ></Route>
        </Switch>
      </Router>
    );
  }
}
