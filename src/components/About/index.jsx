import "./cube.scss";
import "./index.scss";
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import AnimatedLetters from "../AnimatedLetters";

function Cube() {
  return (
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
  );
}

export default function About() {
  const [initialClass, setInitialClass] = useState("initial-animation");
  const [hoverClass, setHoverClass] = useState("");
  setTimeout(() => setInitialClass(""), 2000);
  setTimeout(() => setHoverClass("hover-animation"), 2000);
  return (
    <>
      <article className="about-page">
        <div className="heading">
          <h1>
            <AnimatedLetters string={"About Me"} initialClass={initialClass} delay={10} hoverClass={hoverClass} />
          </h1>
          <Cube />
        </div>
        <p>
          Hello, I'm a data scientist currently living in NYC. I was born in Beijing, China, but flew to America when I was just three years old. My passion
          for numbers and patterns led me to study math and statistics for my bachelor's degree at Purdue University. After that, I pursued my master's
          degree in statistics at Columbia University, which paved the way for my career in data science.
        </p>
        <p>
          Before joining Capital One, I worked as a machine learning engineer in Boston, where I conducted research on deep learning. The experience helped
          me develop a strong foundation in machine learning algorithms, which I now use to derive insights and make data-driven decisions at my current
          job. I enjoy coding and learning new things, which has enabled me to stay on top of the latest developments in my field.
        </p>
        <p>
          When I'm not working, I enjoy exploring my creative side through various hobbies. I've been playing the violin since I was young, and it remains a
          passion of mine to this day. I also enjoy watching anime and discovering new series to immerse myself in. Additionally, I have a love for hip hop
          dance, which not only helps me stay in shape but also allows me to express myself creatively. Lastly, I am an avid gamer, both competitively and
          for fun. I enjoy games like League of Legends, where I've achieved a ranking in the top 0.1%, as well as RPGs such as Genshin Impact, Lost Ark,
          and Guild Wars 2. These hobbies allow me to exercise my brain in different ways and provide a much-needed break from my day-to-day work.
        </p>
      </article>
    </>
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
- like coding, learning new things
- hobbies:
  a. violin
  b. anime
  c. hip hop dance
  d. video games:
    1. competitve (i.e. league of legends (peaked top 0.1%))
    2. rpgs (i.e. genshin impact, lost ark, guild wars 2)
*/
