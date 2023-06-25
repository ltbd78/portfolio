import { useState, useRef, useEffect } from "react";
import "./index.scss";

export default function Music({ songs }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  // runs function whenever items in list change
  useEffect(() => {
    const audio = audioRef.current;
    audio.pause();
    audio.src = songs[currentSongIndex]["src"];
    if (isPlaying) {
      audio.play();
    }
  }, [currentSongIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener("ended", playNext);
    return () => {
      audio.removeEventListener("ended", playNext);
    };
  }, [currentSongIndex]);

  function togglePlay() {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  }

  function playPrevious() {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
    }
  }

  function playNext() {
    if (currentSongIndex < songs.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
    }
  }

  return (
    <div className="music">
      {songs[currentSongIndex]["artist"]} - {songs[currentSongIndex]["title"]}
      <audio ref={audioRef} src={songs[currentSongIndex]["src"]} />
      <div className="controls">
        <button onClick={playPrevious}>{"\u23EA"}</button>
        <button onClick={togglePlay}>{isPlaying ? "\u23F8" : "\u23F5"}</button>
        <button onClick={playNext}>{"\u23E9"}</button>
      </div>
    </div>
  );
}
