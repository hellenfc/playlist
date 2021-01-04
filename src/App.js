import React, { Component } from 'react';

import Header from './components/header'
import Footer from './components/footer'
import './App.scss';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContentPage from "./components/contentPage";
import CounterPage from "./components/counterPage";
import DetailPage from './components/detailPage';

class App extends Component {
  render() {
    return (
      <div className="root">
        <Router basename="/playlist-test">
          <Header></Header>
          <Switch>
            <Route exact
              path="/"
              component={ContentPage}>
            </Route>
            <Route
              path={'/contenidos/detalles/:id'}
              component={DetailPage}
            ></Route>
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
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
