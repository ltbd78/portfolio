import './index.scss'

function AnimatedLetters({ letterClass, strArray, idx }) {
  function renderChar(char, i) {
    return (
      <span key={char + i} className={`${letterClass} _${i + idx}`}>
        {char}
      </span>
    )
  }

  return (
    <span>
      {strArray.map(renderChar)}
    </span>
  )
}

export default AnimatedLetters