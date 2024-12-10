import { useEffect } from "react";
import "./App.css";
import Contact from "./Components/Contact";
import Experince from "./Components/Experince";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import Skills from "./Components/Skills";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <Experince />
        <Skills />
        <Project />
        <Contact />
      </div>
      <div className="container"></div>
      <div className="container"></div>
    </>
  );
}

export default App;
