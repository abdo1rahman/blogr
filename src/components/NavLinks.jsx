import { useRef, useEffect } from "react";

export default function NavLinks({ activeMenu, setActiveMenu }) {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveMenu("");
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [setActiveMenu]);

  return (
    <div className="mobile-nav overlay">
      <div className="mobile-links" ref={dropdownRef}>
        <a
          href="#"
          className="mobile__menu"
          onClick={() =>
            setActiveMenu(activeMenu === "product" ? "" : "product")
          }
        >
          <span className="mobile__item">Product</span>
          <img src="/images/icon-arrow-dark.svg" className="drk-arw" />
        </a>
        {activeMenu === "product" && (
          <div className="dropdown__menu">
            <p className="menu__item">Overview</p>
            <p className="menu__item">Pricing</p>
            <p className="menu__item">Marketplace</p>
            <p className="menu__item">Features</p>
            <p className="menu__item">Integrations</p>
          </div>
        )}

        <a
          href="#"
          className="mobile__menu"
          onClick={() =>
            setActiveMenu(activeMenu === "company" ? "" : "company")
          }
        >
          <span className="mobile__item">Company</span>
          <img src="/images/icon-arrow-dark.svg" className="drk-arw" />
        </a>
        {activeMenu === "company" && (
          <div className="dropdown__menu">
            <p className="menu__item">About</p>
            <p className="menu__item">Team</p>
            <p className="menu__item">Blog</p>
            <p className="menu__item">Career</p>
          </div>
        )}

        <a
          href="#"
          className="mobile__menu"
          onClick={() =>
            setActiveMenu(activeMenu === "connect" ? "" : "connect")
          }
        >
          <span className="mobile__item">Connect</span>
          <img src="/images/icon-arrow-dark.svg" className="drk-arw" />
        </a>
        {activeMenu === "connect" && (
          <div className="dropdown__menu">
            <p className="menu__item">Contact</p>
            <p className="menu__item">Newsletter</p>
            <p className="menu__item">LinkedIn</p>
          </div>
        )}
      </div>
    </div>
  );
}
