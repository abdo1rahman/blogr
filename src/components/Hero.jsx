import Navbar from "./Navbar.jsx";

export default function Hero({ navOpen, toggleNav }) {
  return (
    <div className="hero">
      <Navbar navOpen={navOpen} toggleNav={toggleNav} />
      <div className="hero__title">
        <p className="hook">A modern publishing platform</p>
        <p className="subtitle">
          Grow your audience and build your online brand
        </p>
        <div className="hero__buttons">
          <button className="btn for-free hero__btn">Start for Free</button>
          <button className="btn learn-more hero__btn">Learn More</button>
        </div>
      </div>

      <img src="/images/bg-pattern-intro-desktop.svg" className="hero__bg" />
    </div>
  );
}
