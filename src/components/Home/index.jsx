import LogoTitle from "../../assets/images/logo-l.png";
import { Link } from "react-router-dom";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useState, useEffect } from "react";

export default function Home() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [effectFinished, setEffectFinished] = useState(false);
  const str_hi = "Hi,".split("");
  const str_im = "I'm".split("");
  const str_insuhan = "insu Han".split("");
  const str_datascientist = "Data Scientist".split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container home-page">
      <div className="text-zone">
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
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  );
}
