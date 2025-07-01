import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import useActiveSection from "../hooks/useActiveSection";
import { useTheme } from "../components/themeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const active = useActiveSection(["about", "projects", "contact"]);
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          Chandrakant
        </Link>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className={active === "about" ? "active" : ""}
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className={active === "projects" ? "active" : ""}
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className={active === "contact" ? "active" : ""}
          >
            Contact
          </a>
          <a
            href="/resume.pdf"
            download
            onClick={() => setIsOpen(false)}
            className=""
          >
            Resume
          </a>

          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="theme-toggle"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
        </div>

        <button
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
