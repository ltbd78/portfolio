import "./index.scss";
import { useState } from "react";

export default function AnimatedLetters({ strArray, initialClass, delay, hoverClass }) {
  const [wasHovered, setWasHovered] = useState(Array(strArray.length).fill(false));
  function animateLetter(char, i) {
    const initialClass_ = initialClass === "" ? "" : ` ${initialClass} delay${i + delay}`;
    const hoverClass_ = wasHovered[i] ? ` ${hoverClass}` : "";
    return (
      <span
        key={char + i}
        onMouseEnter={() => {
          const newArray = [...wasHovered];
          newArray[i] = true;
          setWasHovered(newArray);
        }}
        onAnimationEnd={() => {
          const newArray = [...wasHovered];
          newArray[i] = false;
          setWasHovered(newArray);
        }}
        className={"letter" + initialClass_ + hoverClass_}
      >
        {char}
      </span>
    );
  }
  return <div className="letters">{strArray.map(animateLetter)}</div>;
}
