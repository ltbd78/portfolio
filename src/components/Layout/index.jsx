import "./index.scss";
import { Outlet, useLocation } from "react-router-dom";
import HamsterLoader from "../Loader";
import Navbar from "../Navbar";

export default function Layout() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar />
      <HamsterLoader key={location.key} />
      <div className="page" key={location.key}>
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
