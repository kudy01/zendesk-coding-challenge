import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./styles.css";
import { Quit, Menu } from "..";

const Home = () => {
  return (
    <Router>
      <Switch>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/quit">
          <Quit />
        </Route>
        <Route path="/">
          <div id="main">
            <div>
              <h1 className="f1 tc logo"> Zendesk </h1>
              <div id="button-container">
                <Link
                  to="/menu"
                  className="b maxwidth no-underline ph5 mb2 pv2 input-reset ba b--white-025 white grow pointer f3 dib bg-menu br-pill buttonFont"
                >
                  Menu
                </Link>
                <Link
                  to="/quit"
                  className="b maxwidth no-underline ph5 mb2 pv2 input-reset ba b--white-025 white grow pointer f3 dib bg-quit br-pill buttonFont"
                >
                  Quit
                </Link>
              </div>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default Home;
