import "./index.scss";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";

export default function Layout() {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
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
