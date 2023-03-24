import "./App.scss";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Layout from "./components/Layout";

// https://github.com/bobangajicsm/react-portfolio-website
// https://create-react-app.dev/docs/deployment/#github-pages
// https://sombriks.com/blog/0044-cra-builds-for-non-root-urls
// https://stackoverflow.com/a/36623117/6535624 // basename={process.env.REACT_APP_BASENAME}
export default function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}
