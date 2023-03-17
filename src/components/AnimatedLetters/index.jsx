import "./index.scss";

export default function AnimatedLetters({ letterClass, strArray, delay }) {
  // TODO: refactor variable names
  function renderChar(char, i) {
    return (
      <span key={char + i} className={`${letterClass} delay${i + delay}`}>
        {char}
      </span>
    );
  }
  return <span>{strArray.map(renderChar)}</span>;
}
