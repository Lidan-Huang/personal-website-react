import React from "react";
import { Link, NavLink } from "react-router-dom";
import Pdf from './static/resume.pdf';
import "./NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

/** Navigation bar for site. Shows up on every page.
 *
 * Rendered by App.
 */

// const BASE_URL = "/lidanhuang.com/";

function NavBar() {

  function onResumeClick() {
    window.open(Pdf);
  }
  return (
    <nav className="Navigation fixed-top" id="header">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <h1 className="logo me-auto me-lg-0">
          <Link className="navbar-brand fs-3" to="/">
            Lidan
          </Link>
        </h1>

        <div id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li><NavLink className="active" to="/">Home</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/Projects">Projects</NavLink></li>
            <li><NavLink to={`${Pdf}`} onClick={onResumeClick}>Resume</NavLink></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </div>

        <div class="header-social-links">
          <NavLink className="nav-link rounded" to={{ pathname: "https://linkedin.com/in/lidanhuang" }} target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="1x" color="grey" />
          </NavLink>
          <NavLink className="nav-link rounded" to={{ pathname: "https://github.com/lidan-huang" }} target="_blank">
            <FontAwesomeIcon icon={faGithub} size="1x" color="grey" />
          </NavLink>
        </div>
      </div>
    </nav >
  );
}

export default NavBar;