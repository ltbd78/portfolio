import "./index.scss";
import { faEnvelope, faHome, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import LogoL from "../../assets/images/logo-l.png";
import { useState } from "react";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="nav-bar">
      <img src={LogoL} className="logo" alt="logo" />
      <div className="nav-links">
        <div className="logo-placeholder"></div>
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
        <nav>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/linsuhan/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.github.com/ltbd78/">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/ltbd78/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@linsuhan/">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </nav>
      </div>
      <FontAwesomeIcon onClick={() => setShowNav(true)} icon={faBars} className="hamburger-icon" />
    </div>
  );
}
