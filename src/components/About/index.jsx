import "./index.scss";
import { useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from "@fortawesome/free-brands-svg-icons";

export default function About() {
  const [animationClass, setAnimationClass] = useState("initial-animation");
  setTimeout(() => setAnimationClass("hover-animation"), 2000);
  return (
    <article className="about-page">
      <div className="text-container">
        <h1>
          <AnimatedLetters animationClass={animationClass} strArray={"About Me".split("")} delay={10} />
        </h1>
        <p>
          Hi, I'm a data scientist currently living in NYC. I was born in Beijing, China and moved to the United States when I was three years old. Growing
          up in the US, I've had the privilege of experiencing the best of both worlds, Chinese and American cultures. I obtained my Bachelor's degree in
          Mathematics and Statistics from Purdue University and later pursued a Master's degree in Statistics from Columbia University.
        </p>
        <p>
          My previous job was as a machine learning engineer in Boston, where I focused on deep learning research. I'm passionate about coding and learning
          new things, and I'm always eager to explore new areas in the field of data science. In my current role at Capital One, I leverage my knowledge and
          experience to extract meaningful insights from data, identify patterns and trends, and create predictive models that drive business growth.
        </p>
        <p>
          Outside of work, I have a few hobbies that I love to indulge in. I've been playing the violin since I was a child and continue to find joy in
          classical music. I'm also a big fan of anime and love to immerse myself in the rich and imaginative worlds that anime creators bring to life. When
          I'm not watching anime or playing the violin, you can usually find me doing hip hop dance or playing video games. My current go-to games are
          League of Legends (where I rank in the top 0.5%) and Genshin Impact. I find that playing video games helps me unwind after a long day at work and
          keeps my mind sharp.
        </p>
        <p>- Placeholder Written by ChatGPT</p>
      </div>
      <div className="cube-container">
        <div className="cube">
          <div className="front-face">
            <FontAwesomeIcon icon={faPython} />
          </div>
          <div className="back-face">
            <FontAwesomeIcon icon={faReact} />
          </div>
          <div className="left-face">
            <FontAwesomeIcon icon={faGitAlt} />
          </div>
          <div className="right-face">
            <FontAwesomeIcon icon={faHtml5} />
          </div>
          <div className="top-face">
            <FontAwesomeIcon icon={faCss3} />
          </div>
          <div className="bottom-face">
            <FontAwesomeIcon icon={faJsSquare} />
          </div>
        </div>
      </div>
    </article>
  );
}

/*
CHATGPT Prompt:
Given some descriptors of me below, write me a first-person "About Me" section of exactly 3 paragraphs long. The order I listed is arbitrary, feel free to reorder however you want such that it's fluid:
- born in beijing, china; flew to america when I was 3
- current living in NYC working as data scientist at capital one 
- previous job, machine learning engineer at Boston; deep learning research
- bachelor's degree: math and statistics at purdue university, 
- master's degree: Statistics at columbia university
- hobbies:
  a. violin
  b. anime
  c. hip hop dance
  d. video games current games:
    a. league of legends (ranked 0.5%)
    b. genshin impact
- like coding, learn new things
*/
