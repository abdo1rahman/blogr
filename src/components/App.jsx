import "./App.css";
import Navbar from "./Navbar.jsx";
import Editor from "./Editor.jsx";

function App() {
  return (
    <div className="app">
      <div className="hero">
        <Navbar />
        <div className="hero__title">
          <p className="hook">A modern publishing platform</p>
          <p className="subtitle">
            Grow your audience and build your online brand
          </p>
          <div className="hero__buttons">
            <button className="btn for-free">Start for Free</button>
            <button className="btn learn-more">Learn More</button>
          </div>
        </div>
        <img src="/images/bg-pattern-intro-desktop.svg" className="hero__bg" />
      </div>

      <Editor />
    </div>
  );
}

export default App;
