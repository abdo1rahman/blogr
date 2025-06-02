import "./Navbar.css";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState("");
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
    <nav>
      <div className="nav-start">
        <img src="/images/logo.svg" alt="Blogr logo" className="logo" />
        <div className="links" ref={dropdownRef}>
          <a
            className="btn-link"
            onClick={() =>
              setActiveMenu(activeMenu === "product" ? "" : "product")
            }
          >
            <span className="nav__item">Product</span>
            <img
              src="/images/icon-arrow-light.svg"
              className={activeMenu === "product" ? "arrow--clicked" : "arrow"}
            />
            <AnimatePresence>
              {activeMenu === "product" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="dropdown dropdown__product"
                >
                  <p>Overview</p>
                  <p>Pricing</p>
                  <p>Marketplace</p>
                  <p>Features</p>
                  <p>Integrations</p>
                </motion.div>
              )}
            </AnimatePresence>
          </a>

          <a
            className=" btn-link"
            onClick={() =>
              setActiveMenu(activeMenu === "company" ? "" : "company")
            }
          >
            <span className="nav__item">Company</span>
            <img
              src="/images/icon-arrow-light.svg"
              className={activeMenu === "company" ? "arrow--clicked" : "arrow"}
            />
            <AnimatePresence>
              {activeMenu === "company" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="dropdown dropdown__company"
                >
                  <p>About</p>
                  <p>Team</p>
                  <p>Blog</p>
                  <p>Careers</p>
                </motion.div>
              )}
            </AnimatePresence>
          </a>

          <a
            className=" btn-link"
            onClick={() =>
              setActiveMenu(activeMenu === "connect" ? "" : "connect")
            }
          >
            <span className="nav__item">Connect</span>
            <img
              src="/images/icon-arrow-light.svg"
              className={activeMenu === "connect" ? "arrow--clicked" : "arrow"}
            />
            <AnimatePresence>
              {activeMenu === "connect" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="dropdown dropdown__connect"
                >
                  <p>Contact</p>
                  <p>Newsletter</p>
                  <p>LinkedIn</p>
                </motion.div>
              )}
            </AnimatePresence>
          </a>
        </div>
      </div>

      <div id="sign">
        <button className="login">Login</button>
        <button className="signup">Sign Up</button>
      </div>
    </nav>
  );
}
