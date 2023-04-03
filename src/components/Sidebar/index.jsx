import "./index.scss";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import LogoL from "../../assets/images/logo-l.png";
import LogoSubtitle from "../../assets/images/logo_sub.png";

export default function Sidebar() {
  return (
    <div className="nav-bar">
      <div className="logo">
        <img src={LogoL} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="sub-logo" />
      </div>
      <nav>
        <NavLink className="home-link" to="/">
          <FontAwesomeIcon icon={faHome} />
          <span className="link-text">HOME</span>
        </NavLink>
        <NavLink className="about-link" to="about">
          <FontAwesomeIcon icon={faUser} />
          <span className="link-text">ABOUT</span>
        </NavLink>
        <NavLink className="contact-link" to="contact">
          <FontAwesomeIcon icon={faEnvelope} />
          <span className="link-text">CONTACT</span>
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/linsuhan/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.github.com/ltbd78/">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/ltbd78/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@linsuhan/">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </li>
      </ul>
    </div>
  );
}
