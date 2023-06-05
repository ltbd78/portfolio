import "./index.scss";
import { useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import portfolioGIF from "../../assets/portfolio/portfolio.gif";
import RLGIF from "../../assets/portfolio/rl.gif";

function Work({ href, src, title, description }) {
  // if src is none use alternative text
  return (
    <a className="work" href={href} target="_blank">
      <img src={src} alt="portfolio-work" />
      <div className="text-box">
        <div className="blank"></div>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </a>
  );
}

export default function Portfolio() {
  const [initialClass, setInitialClass] = useState("initial-animation");
  const [hoverClass, setHoverClass] = useState("");
  setTimeout(() => setInitialClass(""), 2000);
  setTimeout(() => setHoverClass("hover-animation"), 2000);
  return (
    <article className="portfolio-page">
      <div className="heading">
        <h1>
          <AnimatedLetters strArray={"Portfolio".split("")} initialClass={initialClass} delay={10} hoverClass={hoverClass} />
        </h1>
        <div className="image-container">
          <img className="portfolio-GIF" src={portfolioGIF} alt="portfolio-GIF"/>
        </div>
      </div>
      <div className="works">
        <Work
          href={"https://github.com/ltbd78/RL"}
          src={RLGIF}
          title={"Flexible Reinforcement Learning Framework"}
          description={"A flexible reinforcement learning framework that allows easy mix and matching of different agents and environments."}
        />
        <Work />
        <Work />
        <Work />
        <Work />
        <Work />
        <Work />
        <Work />
      </div>
    </article>
  );
}
