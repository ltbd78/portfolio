import "./index.scss";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";

export default function Layout() {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <div className="tags top-tags">
          &lt;html&gt;
          <br />
          &nbsp;&nbsp;&lt;body&gt;
        </div>
        <Outlet />
        <div className="tags bottom-tags">
          &nbsp;&nbsp;&lt;/body&gt;
          <br />
          &lt;/html&gt;
        </div>
      </div>
    </div>
  );
}
