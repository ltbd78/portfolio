import "./index.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import pngLogo from "../../assets/images/logo-l.png";

export default function Home() {
  const [initialClass, setInitialClass] = useState("initial-animation");
  const [hoverClass, setHoverClass] = useState("");
  setTimeout(() => setInitialClass(""), 5100);
  setTimeout(() => setHoverClass("hover-animation"), 5100);
  return (
    <>
      <article className="home-page">
        <h1>
          <AnimatedLetters string={"Hi,"} initialClass={initialClass} delay={10} hoverClass={hoverClass} />
          <br />
          <AnimatedLetters string={"I'm"} initialClass={initialClass} delay={13} hoverClass={hoverClass} />
          <img src={pngLogo} alt="logo" />
          <AnimatedLetters string={"insu Han"} initialClass={initialClass} delay={16} hoverClass={hoverClass} />
          <br />
          <AnimatedLetters string={"Applied Scientist"} initialClass={initialClass} delay={24} hoverClass={hoverClass} />
        </h1>
        <h2>Machine Learning Engineer / Statistician</h2>
        <Link to="/contact" className="contact-button">
          CONTACT ME
        </Link>
      </article>
    </>
  );
}
