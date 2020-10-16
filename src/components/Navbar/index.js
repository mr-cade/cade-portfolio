import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand text-white" to="/">
        Cade Petersen
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item ">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/resume"
              className={window.location.pathname === "/resume" ? "nav-link active" : "nav-link"}
            >
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <a
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
              href="https://github.com/mr-cade"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub/>
            </a>
          </li>
          <li className="nav-item">
            <a
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
              href="https://www.linkedin.com/in/cadelpetersen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin/>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
