import "./index.scss";
import { useState } from "react";

export default function AnimatedLetters({ string, initialClass, delay, hoverClass }) {
  const strArray = string.split("");
  const [wasHovered, setWasHovered] = useState(Array(strArray.length).fill(false));
  function animateLetter(char, i) {
    const initialClass_ = initialClass === "" ? "" : ` ${initialClass} delay${i + delay}`;
    const hoverClass_ = wasHovered[i] ? ` ${hoverClass}` : "";
    return (
      <span
        key={char + i}
        onMouseEnter={() => {
          if (hoverClass !== "") {
            const newArray = [...wasHovered];
            newArray[i] = true;
            setWasHovered(newArray);
          }
        }}
        onAnimationEnd={() => {
          if (hoverClass !== "") {
            const newArray = [...wasHovered];
            newArray[i] = false;
            setWasHovered(newArray);
          }
        }}
        className={"animated-letter" + initialClass_ + hoverClass_}
      >
        {char}
      </span>
    );
  }
  return <div className="animated-letters">{strArray.map(animateLetter)}</div>;
}
