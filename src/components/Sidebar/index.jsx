import "./index.scss";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import LogoL from "../../assets/images/logo-l.png";
import LogoSubtitle from "../../assets/images/logo_sub2.png";

export default function Sidebar() {
  return (
    <div className="nav-bar">
      <img src={LogoL} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="linsu" />
      <nav>
        <NavLink exact="true" activeclassname="active" className="home-link" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/linsuhan/">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.github.com/ltbd78/">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  );
}
