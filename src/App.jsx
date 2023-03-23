import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Layout from "./components/Layout";

// https://github.com/bobangajicsm/react-portfolio-website
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="portfolio" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
