import { useState, useRef, useEffect } from "react";
import "./index.scss";

export default function MusicPlayer({ songs }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  // runs function whenever currentSongIndex updates
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
      audio.removeEventListener("ended", playNext); // runs whenever currentSongIndex updates
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
