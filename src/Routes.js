import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import Homepage from "./Homepage";

/** Site-wide routes.
 *
 * Visiting a non-existent route redirects to the homepage.
 */

const BASE_URL = "lidanhuang.com/";

function Routes() {

  return (
    // <div className="pt-5">
      <Switch>

        <Route exact path={BASE_URL}>
          <Homepage />
        </Route>

        <Route exact path={`${BASE_URL}about`}>
          <About />
        </Route>

        <Route exact path={`${BASE_URL}projects`}>
          <Projects />
        </Route>

        <Route exact path={`${BASE_URL}resume`}>
          <Resume />
        </Route>

        <Redirect to={BASE_URL} />
      </Switch>
    // </div>
  );
}

export default Routes;
