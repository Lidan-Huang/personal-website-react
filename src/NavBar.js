import React from "react";
import { Link, NavLink } from "react-router-dom";
import Pdf from './static/resume.pdf';
import "./NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
// import { Navbar, Container, Nav } from "react-bootstrap";


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
    <nav className="Navigation navbar-expand-lg navbar-light bg-light fixed-top" id="header">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <h1 className="logo me-auto me-lg-0">
          <Link className="navbar-brand fs-3" to="/">
            Lidan
          </Link>
        </h1>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbar" className="navbar order-last order-lg-0 collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink className="nav-link active" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/About">About</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/Projects">Projects</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to={`${Pdf}`} onClick={onResumeClick}>Resume</NavLink></li>
          </ul>
          {/* <i className="bi bi-list mobile-nav-toggle"></i> */}
        </div>

        <div className="header-social-links">
          <NavLink className="a nav-link rounded" to={{ pathname: "https://linkedin.com/in/lidanhuang" }} target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="1x" color="grey" />
          </NavLink>
          <NavLink className="a nav-link rounded" to={{ pathname: "https://github.com/lidan-huang" }} target="_blank">
            <FontAwesomeIcon icon={faGithub} size="1x" color="grey" />
          </NavLink>
        </div>
      </div>
    </nav >
  );
}

export default NavBar;