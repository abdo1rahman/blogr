// This will deal with the links of the navbar on mobile sizes
import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  }, []);
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
          {activeMenu === "product" && (
            <motion.div
              className="dropdown__menu"
              animate={{ x: 100 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <p className="menu__item">Overview</p>
              <p className="menu__item">Pricing</p>
              <p className="menu__item">MarketPlace</p>
              <p className="menu__item">Features</p>
              <p className="menu__item">Integrations</p>
            </motion.div>
          )}
        </a>
        <a
          href="#"
          className="mobile__menu"
          onClick={() =>
            setActiveMenu(activeMenu === "company" ? "" : "company")
          }
        >
          <span className="mobile__item">Company</span>
          <img src="/images/icon-arrow-dark.svg" className="drk-arw" />
          {activeMenu === "company" && (
            <motion.div
              className="dropdown__menu"
              animate={{ x: 100 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <p className="menu__item">About</p>
              <p className="menu__item">Team</p>
              <p className="menu__item">Blog</p>
              <p className="menu__item">Career</p>
            </motion.div>
          )}
        </a>
        <a
          href="#"
          className="mobile__menu"
          onClick={() =>
            setActiveMenu(activeMenu === "connect" ? "" : "connect")
          }
        >
          <span className="mobile__item">Connect</span>
          <img src="/images/icon-arrow-dark.svg" className="drk-arw" />
          {activeMenu === "connect" && (
            <motion.div
              className="dropdown__menu"
              animate={{ x: 100 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <p className="menu__item">Contact</p>
              <p className="menu__item">Newsletter</p>
              <p className="menu__item">LinkedIn</p>
            </motion.div>
          )}
        </a>
      </div>
    </div>
  );
}
