import "./index.scss";
import { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";

export default function About() {
  const [animationClass, setAnimationClass] = useState("initial-animation");
  setTimeout(() => setAnimationClass("hover-animation"), 2000);
  return (
    <article className="about-page">
      <h1>
        <AnimatedLetters animationClass={animationClass} strArray={"About Me".split("")} delay={10} />
      </h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
      <p>Paragraph 3</p>
    </article>
  );
}
