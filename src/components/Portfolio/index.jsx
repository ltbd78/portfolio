import "./index.scss";
import { useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import CircularLetters from "../CircularLetters";
import caePNG from "../../assets/portfolio/cae.png";
import celebaGIF from "../../assets/portfolio/celeba.gif";
import portfolioGIF from "../../assets/portfolio/portfolio.gif";
import RLGIF from "../../assets/portfolio/rl.gif";
import siteGIF from "../../assets/portfolio/site.gif";

function Work({ href, src, title, description, width, height, transform }) {
  // target="_blank" opens link in new tab
  const imgStyle = {
    width: width,
    height: height,
    transform: transform
  };
  return (
    <a className="work" href={href} target="_blank">
      <img src={src} alt=" " style={imgStyle} />
      <div className="text-box">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </a>
  );
}

export default function Portfolio() {
  // TODO: add a see more button
  const [initialClass, setInitialClass] = useState("initial-animation");
  const [hoverClass, setHoverClass] = useState("");
  setTimeout(() => setInitialClass(""), 2000);
  setTimeout(() => setHoverClass("hover-animation"), 2000);
  return (
    <article className="portfolio-page">
      <div className="heading">
        <h1>
          <AnimatedLetters string={"Portfolio"} initialClass={initialClass} delay={10} hoverClass={hoverClass} />
        </h1>
        <a href="https://docs.google.com/document/d/1Mft3IcrTTX2CjVCt529c-wBKWzdGWZmbLnhS_c5sf1A/edit?usp=sharing" target="_blank">
          <div className="container-1">
            <CircularLetters string={"CLICK FOR RESUME!"} length={"11rem"} />
            <div className="container-2">
              <img className="portfolio-GIF" src={portfolioGIF} alt="portfolio-GIF" />
            </div>
          </div>
        </a>
      </div>
      <div className="works">
        <Work
          href={"https://github.com/ltbd78/RL"}
          src={RLGIF}
          title={"Flexible Reinforcement Learning Framework"}
          description={"A flexible reinforcement learning framework that allows easy mix and matching of different agents and environments."}
          width={"100%"}
          height={"100%"}
        />
        <Work
          href={"https://github.com/ltbd78/facial-feature-detection"}
          src={celebaGIF}
          title={"Facial Feature Detection"}
          description={"Flask hosted, real-time face detection & feature classification; ResNet model trained on CelebA dataset."}
          width={"200%"}
          height={"150%"}
          transform={"translateY(-13%) translateX(-5%)"}
        />
        <Work
          href={"https://github.com/ltbd78/cae"}
          src={caePNG}
          title={"Convolutional Autoencoder"}
          description={"Convolutional autoencoder used for image reconstruction and anomaly detection."}
          width={"100%"}
          height={"100%"}
        />
        <Work
          href={"https://github.com/ltbd78/portfolio"}
          src={siteGIF}
          title={"Personal Portfolio Website"}
          description={"You're looking at the website right now! Click to see source code."}
          width={"100%"}
          height={"130%"}
          transform={"translateY(10%)"}
        />
      </div>
    </article>
  );
}
