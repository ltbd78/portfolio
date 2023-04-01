import "./index.scss";

export default function AnimatedLetters({ animationClass, strArray, delay }) {
  function animateLetter(char, i) {
    return (
      <span key={char + i} className={`letter ${animationClass} delay${i + delay}`}>
        {char}
      </span>
    );
  }
  return <span>{strArray.map(animateLetter)}</span>;
}
