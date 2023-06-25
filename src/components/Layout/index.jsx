import "./index.scss";
import { Outlet, useLocation } from "react-router-dom";
import HamsterLoader from "../Loader";
import Navbar from "../Navbar";
import MusicPlayer from "../MusicPlayer";
import shelterMP3 from "../../assets/sounds/shelter (piano).mp3";
import sameSquadMP3 from "../../assets/sounds/same squad.mp3";
import upMP3 from "../../assets/sounds/up.mp3";

export default function Layout() {
  const location = useLocation();
  const songs = [
    {
      src: shelterMP3,
      artist: "Porter Robinson",
      title: "Shelter"
    },
    {
      src: sameSquadMP3,
      artist: "P-Lo",
      title: "Same Squad"
    },
    {
      src: upMP3,
      artist: "Cardi-B",
      title: "Up"
    }
  ];
  return (
    <div className="App">
      <Navbar />
      <HamsterLoader key={location.key} />
      <MusicPlayer songs={songs} />
      <div className="page" key={location.key + 1}>
        <header className="horizontal-bar">
          <div className="tags">
            &lt;html&gt;
            <br />
            &nbsp;&nbsp;&lt;body&gt;
          </div>
        </header>
        <Outlet />
        <footer className="horizontal-bar">
          <div className="tags">
            &nbsp;&nbsp;&lt;/body&gt;
            <br />
            &lt;/html&gt;
          </div>
        </footer>
      </div>
    </div>
  );
}
