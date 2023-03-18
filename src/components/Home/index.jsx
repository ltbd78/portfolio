import "./index.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import LogoTitle from "../../assets/images/logo-l.png";

export default function Home() {
  const [animationClass, setAnimationClass] = useState("initial-animation");
  const str_hi = "Hi,".split("");
  const str_im = "I'm".split("");
  const str_insuhan = "insu Han".split("");
  const str_datascientist = "Data Scientist".split("");

  setTimeout(() => setAnimationClass("hover-animation"), 4000);

  return (
    <article className="home-page">
      <h1>
        <AnimatedLetters animationClass={animationClass} strArray={str_hi} delay={10} />
        <br />
        <AnimatedLetters animationClass={animationClass} strArray={str_im} delay={13} />
        <img src={LogoTitle} alt="logo" />
        <AnimatedLetters animationClass={animationClass} strArray={str_insuhan} delay={16} />
        <br />
        <AnimatedLetters animationClass={animationClass} strArray={str_datascientist} delay={24} />
      </h1>
      <h2>Machine Learning Engineer / Statistician / TikToker</h2>
      <Link to="/contact" className="contact-button">
        CONTACT ME
      </Link>
    </article>
  );
}
