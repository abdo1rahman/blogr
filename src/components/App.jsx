import "./App.css";

import Hero from "./Hero.jsx";
import Editor from "./Editor.jsx";
import NavLinks from "./NavLinks.jsx";
import Infr from "./Infr.jsx";

import { useState, useEffect } from "react";

function App() {
  const [navOpen, toggleNav] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 875) toggleNav(false);
    };

    // Listen for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (navOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [navOpen]);

  return (
    <div className="app">
      {navOpen && (
        <NavLinks activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      )}
      <Hero
        navOpen={navOpen}
        toggleNav={toggleNav}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        windowWidth={windowWidth}
        setWindowWidth={setWindowWidth}
      />
      <Editor windowWidth={windowWidth} />
      <div>
        <Infr />
      </div>
    </div>
  );
}

export default App;
