import "./index.scss";
import { Outlet, useLocation } from "react-router-dom";
import HamsterLoader from "../Loader";
import Sidebar from "../Sidebar";

export default function Layout() {
  const location = useLocation();
  return (
    <div className="App">
      <Sidebar />
      <HamsterLoader key={location.key} />
      <div className="page">
        <header className="horizontal-bar">
          <div className="tags">
            &lt;html&gt;
            <br />
            &nbsp;&nbsp;&lt;body&gt;
          </div>
        </header>
        <Outlet key={location.key} />
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
