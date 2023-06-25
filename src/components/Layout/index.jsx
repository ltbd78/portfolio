import "./index.scss";
import { Outlet, useLocation } from "react-router-dom";
import HamsterLoader from "../Loader";
import Navbar from "../Navbar";
import Music from "../Music";
import shelterMP3 from "../../assets/sounds/shelter (piano).mp3";
import sameSquadMP3 from "../../assets/sounds/same squad.mp3";
import upMP3 from "../../assets/sounds/up.mp3";
import sample1 from "../../assets/sounds/sample-3s.mp3";
import sample2 from "../../assets/sounds/sample-6s.mp3";
import sample3 from "../../assets/sounds/sample-9s.mp3";

export default function Layout() {
  const location = useLocation();
  const songs = [
    {
      src: sample1,
      artist: "sample",
      title: "3s"
    },
    {
      src: sample2,
      artist: "sample",
      title: "6s"
    },
    {
      src: sample3,
      artist: "sample",
      title: "9s"
    },
    {
      src: shelterMP3,
      artist: "Porter",
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
      <Music songs={songs} />
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
