import "./index.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";
import LogoTitle from "../../assets/images/logo-l.png";

export default function Home() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const str_hi = "Hi,".split("");
  const str_im = "I'm".split("");
  const str_insuhan = "insu Han".split("");
  const str_datascientist = "Data Scientist".split("");

  useEffect(() => {
    /* TODO: how to continue animation after hover */
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <article className="home-page">
      <h1>
        <AnimatedLetters letterClass={letterClass} strArray={str_hi} delay={10} />
        <br />
        <AnimatedLetters letterClass={letterClass} strArray={str_im} delay={13} />
        <img src={LogoTitle} alt="logo" />
        <AnimatedLetters letterClass={letterClass} strArray={str_insuhan} delay={16} />
        <br />
        <AnimatedLetters letterClass={letterClass} strArray={str_datascientist} delay={24} />
      </h1>
      <h2>Machine Learning Engineer / Statistician / TikToker</h2>
      <Link to="/contact" className="contact-button">
        CONTACT ME
      </Link>
    </article>
  );
}
