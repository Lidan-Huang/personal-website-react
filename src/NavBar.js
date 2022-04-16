import React from "react";
import { Link, NavLink } from "react-router-dom";

/** Navigation bar for site. Shows up on every page.
 *
 * Rendered by App.
 */

const BASE_URL = "/lidanhuang.com/";

function NavBar() {
  return (
    <nav className="Navigation navbar navbar-expand-md">
      <div className="container-fluid">
        <Link className="navbar-brand" to={BASE_URL}>
          Homepage
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-4">
              <NavLink className="nav-link" to={`${BASE_URL}about`}>
                About
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink className="nav-link" to={`${BASE_URL}projects`}>
                Projects
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink className="nav-link" to={`${BASE_URL}resume`}>
                Resume
              </NavLink>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  );
}

export default NavBar;