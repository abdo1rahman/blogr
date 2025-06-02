import "./App.css";
import Navbar from "./Navbar.jsx";

function App() {
  return (
    <div className="app">
      <div className="hero">
        <Navbar />
        <div className="hero__title">
          <p className="hook">A modern publishing platform</p>
          <p>Grow your audience and build your online brand</p>
          <div className="hero__buttons">
            <button className="btn for-free">Start for Free</button>
            <button className="btn learn-more">Learn More</button>
          </div>
        </div>
        <img src="/images/bg-pattern-intro-desktop.svg" className="hero__bg" />
      </div>
      {/* <div className="editor">
        <h2>Designed for the future</h2>
        <div className="highlight__descreption">
          <div>
            <h3>Introducing an extensible editor</h3>
            <p>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div>
            <h3>Robust content management</h3>
            <p>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </div>
        <div>
          <img src="/images/bg-pattern-circles" className="bg-circles" />
          <img src="illustration-editor-desktop.svg" alt="" />
        </div>
      </div> */}
    </div>
  );
}

export default App;
