import "./index.scss";

export default function CircularLetter({ string, length }) {
  const strArray = string.split("");
  const divStyle = {
    height: length,
    width: length
  };
  const spanStyle = {
    height: length
  };
  function circularLetter(char, i) {
    return (
      <span className={`circular-letter rotate${i}`} key={char + i} style={spanStyle}>
        {char}
      </span>
    );
  }
  return (
    <div className="circular-letters" style={divStyle}>
      {strArray.map(circularLetter)}
    </div>
  );
}
