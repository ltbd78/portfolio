import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useState, useEffect } from "react";

export default function About() {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters letterClass={letterClass} strArray={"About Me".split("")} delay={15} />
        </h1>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
        <p>Paragraph 3</p>
      </div>
    </div>
  );
}
