import React from "react";
import { Link } from "react-router-dom";

/** Homepage of site.
 *
 * Routed at "lidanhuang.com/"
 *
 * Routes -> Homepage
 */

function Homepage() {

  return (
    <section className="Homepage d-flex align-items-center" id="hero">
      <div className="container d-flex flex-column align-items-center" data-aos="zoom-in" data-aos-delay="100">     
          <h1>Lidan Huang</h1>
          <h2>I'm a full-stack software engineer.</h2>
          <Link to="/about" className="btn-about">About Me</Link>     
        </div>
    </section>
  );
}

export default Homepage;
