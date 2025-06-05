import "./App.css";
import Hero from "./Hero.jsx";
import Editor from "./Editor.jsx";
import NavLinks from "./NavLinks.jsx";
import { useState } from "react";

function App() {
  const [navOpen, toggleNav] = useState(false);

  // const handleNav = () => {
  //   toggleNav(!navOpen);
  // }

  return (
    <div className="app">
      {navOpen && <NavLinks />}
      <Hero navOpen={navOpen} toggleNav={toggleNav} />
      <Editor />
    </div>
  );
}

export default App;
