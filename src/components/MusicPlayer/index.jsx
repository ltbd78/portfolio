import { useState, useRef, useEffect } from "react";
import "./index.scss";

export default function MusicPlayer({ songs }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  // when currentSongIndex changes, updates audio.src, plays audio if isPlaying
  useEffect(() => {
    const audio = audioRef.current;
    // audio.pause();
    audio.src = songs[currentSongIndex]["src"];
    if (isPlaying) {
      audio.play();
    }
  }, [currentSongIndex]);

  // when currentSongIndex changes (and in beginning), listen if audio "ended" and playNext if true
  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener("ended", playNext);
    return () => {
      audio.removeEventListener("ended", playNext);
    };
  }, [currentSongIndex]);

  // With an empty dependency array ([]), the effect runs once after the initial render.
  // Without a dependency array, the effect runs after every render.
  // With a non-empty dependency array, the effect runs after the initial render and whenever the values in the dependency array change between renders.

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
    <div className="music-player">
      <audio ref={audioRef} src={songs[currentSongIndex]["src"]} />
      <div className="song-info">
        <div className="scrolling-text">
          {songs[currentSongIndex]["artist"]} - {songs[currentSongIndex]["title"]}
        </div>
      </div>
      <div className="controls">
        <button onClick={playPrevious} className="previous" />
        <button onClick={togglePlay} className={isPlaying ? "pause" : "play"} />
        <button onClick={playNext} className="next" />
      </div>
    </div>
  );
}
