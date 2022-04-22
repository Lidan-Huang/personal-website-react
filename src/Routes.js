import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import Homepage from "./Homepage";

/** Site-wide routes.
 * Props: none
 * Visiting a non-existent route redirects to the homepage.
 */

// const BASE_URL = "/lidanhuang.com/";

function Routes() {

  return (
    <div className="Routes">
      <Switch>
        
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/projects">
          <Projects />
        </Route>

        <Route exact path="/resume">
          <Resume />
        </Route>

        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default Routes;
