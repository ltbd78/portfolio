import "./App.scss";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import HamsterLoader from "./components/Loader";
import Home from "./components/Home";
import Layout from "./components/Layout";

function withLoader(Component) { // Function that returns a React Component definition (notice case)
  return function WithLoader(props) { // React component definition that can accept props (notice case)
    return (
      <>
        <HamsterLoader />
        <Component {...props} />
      </>
    )
  };
}

const HomeWithLoader = withLoader(Home); // Calling <HomeWithLoader foo="bar" /> initializes it and passes in a prop
const ContactWithLoader = withLoader(Contact);
const AboutWithLoader = withLoader(About);

export default function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeWithLoader />} />
          <Route path="about" element={<ContactWithLoader />} />
          <Route path="contact" element={<AboutWithLoader />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}