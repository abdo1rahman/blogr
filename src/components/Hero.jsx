import Navbar from "./Navbar.jsx";

export default function Hero({
  navOpen,
  toggleNav,
  activeMenu,
  setActiveMenu,
  windowWidth,
}) {
  return (
    <div className="hero">
      <Navbar
        navOpen={navOpen}
        toggleNav={toggleNav}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        windowWidth={windowWidth}
      />
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
      {windowWidth >= 875 ? (
        <img src="/images/bg-pattern-intro-desktop.svg" className="hero__bg" />
      ) : (
        <img src="/images/bg-pattern-intro-mobile.svg" className="hero__bg" />
      )}
    </div>
  );
}
