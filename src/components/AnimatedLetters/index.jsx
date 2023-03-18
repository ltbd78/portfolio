import "./index.scss";

export default function AnimatedLetters({ animationClass, strArray, delay }) {
  // TODO: refactor variable names
  function animateLetter(char, i) {
    return (
      <span key={char + i} className={`letter ${animationClass} delay${i + delay}`}>
        {char}
      </span>
    );
  }
  return <span>{strArray.map(animateLetter)}</span>;
}
