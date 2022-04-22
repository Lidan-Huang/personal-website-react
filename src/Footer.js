import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

function Footer() {
  return (
    <nav className="Footer fixed-bottom" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6 mt-2">
            <h5 className="Footer-email">huangld0314@gmail.com</h5>
          </div>
          <div className="col-lg-1 col-sm-2 mb-3">

            <NavLink className="nav-link rounded" to={{ pathname: "https://linkedin.com/in/lidanhuang" }} target="_blank">
              <FontAwesomeIcon icon={faLinkedin} size="2x" color="black" />
            </NavLink>
          </div>

          <div className="col-lg-1 col-sm-2 mb-3">
            <NavLink className="nav-link rounded" to={{ pathname: "https://github.com/lidan-huang" }} target="_blank">
              <FontAwesomeIcon icon={faGithub} size="2x" color="black" />
            </NavLink>
          </div>

        </div>
      </div>


    </nav>
  );
}

export default Footer;