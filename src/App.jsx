import "./App.scss";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import HamsterLoader from "./components/Loader";
import Home from "./components/Home";
import Layout from "./components/Layout";

function withLoading(Component, key) {
  return (
    <>
      <HamsterLoader key={key} />
      <Component />
    </>
  );
}

export default function App() {
  const key = Math.random(); // generate a random key

  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={withLoading(Home, key)} />
          <Route path="about" element={withLoading(About, key)} />
          <Route path="contact" element={withLoading(Contact, key)} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}
