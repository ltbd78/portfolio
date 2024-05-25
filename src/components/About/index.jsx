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
          Born in Beijing, China, I moved to the United States at the age of three and have lived here ever since. I completed my undergraduate studies at Purdue University, where I initially pursued a prepharmacy track but eventually discovered my passion for mathematics and statistics, earning a bachelor's degree in these fields. My academic journey continued at Columbia University, where I obtained a master's degree in Statistics. Currently, I reside in the vibrant city of New York.
        </p>
        <p>
          My professional career has spanned various roles and industries, all centered around machine learning and data science. I began as a Deep Learning Researcher at a startup in Boston, focusing on reinforcement learning and computer vision. I then moved to Capital One as a Senior Data Scientist, where I worked on developing recommendation systems. My journey continued at Walmart, where I served as a Senior Machine Learning Engineer, delving into the realm of generative AI. Currently, I am a Senior Machine Learning Engineer at JPMorgan Chase, specializing in large language models (LLMs) and retrieval-augmented generation (RAG).
        </p>
        <p>
          Outside of my professional life, I am an avid learner, always eager to explore new subjects and ideas. I have a deep appreciation for music and play the violin. My eclectic tastes extend to anime and a love for good music, particularly hip hop and break dancing. Additionally, I am a competitive League of Legends player, ranking in the top 0.1%, which reflects my dedication and strategic thinking both in and out of the game. [Written by ChatGPT]
        </p>
      </article>
    </>
  );
}

/*
Background
- born in beijing, china; flew to america when I was 3
- prepharmacy but switched and graduated w/ bachelor's degree: math and statistics at Purdue university
- master's degree: Statistics at Columbia University
- current living and working in NYC

Career:
- Deep Learning Researcher at a startup in Boston; reinforcement learning, computer vision
- Data Scientist at Capital One; recommendation systems
- Machine Learning Engineer at Walmart; generative ai
- Machine Learning Engineer at JPMorgan Chase; LLMs and RAG

Hobbies:
- learning new things
- violin
- anime
- good music
- hip hop and break dance
- competitive League of Legends (top 0.1%)
*/
