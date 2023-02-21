import "./index.scss";

export default function AnimatedLetters({ letterClass, strArray, delay }) {
  function renderChar(char, i) {
    return (
      <span key={char + i} className={`${letterClass} delay${i + delay}`}>
        {char}
      </span>
    );
  }
  return <span>{strArray.map(renderChar)}</span>;
}
