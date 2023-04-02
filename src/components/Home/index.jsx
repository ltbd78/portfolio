import "./index.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import LogoTitle from "../../assets/images/logo-l.png";

export default function Home() {
  const [initialClass, setInitialClass] = useState("initial-animation");
  const [hoverClass, setHoverClass] = useState("");
  setTimeout(() => setInitialClass(""), 4000);
  setTimeout(() => setHoverClass("hover-animation"), 4000);
  return (
    <>
      <article className="home-page">
        <h1>
          <AnimatedLetters strArray={"Hi,".split("")} initialClass={initialClass} delay={10} hoverClass={hoverClass} />
          <br />
          <AnimatedLetters strArray={"I'm".split("")} initialClass={initialClass} delay={13} hoverClass={hoverClass} />
          <img src={LogoTitle} alt="logo" />
          <AnimatedLetters strArray={"insu Han".split("")} initialClass={initialClass} delay={16} hoverClass={hoverClass} />
          <br />
          <AnimatedLetters strArray={"Data Scientist".split("")} initialClass={initialClass} delay={24} hoverClass={hoverClass} />
        </h1>
        <h2>Machine Learning Engineer / Statistician</h2>
        <Link to="/contact" className="contact-button">
          CONTACT ME
        </Link>
      </article>
    </>
  );
}
