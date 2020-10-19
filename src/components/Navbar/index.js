import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import "./style.css";
import resume from "../../assets/documents/Petersen_Cade_Resume.pdf";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item


export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.setState({ menu: !this.state.menu });
  }


=======

  render() {
    const show = this.state.menu ? "show" : "";
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand text-white" to="/">
          Cade Petersen
        </Link>
        <button
          className="navbar-toggler ml-auto"
          type="button"
          onClick={this.toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={"collapse navbar-collapse " + show}>
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link
                to="/"
                className={
                  window.location.pathname === "/" ||
                  window.location.pathname === "/about"
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
                className={
                  window.location.pathname === "/portfolio"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <a
                className={
                  window.location.pathname === "/resume"
                    ? "nav-link active"
                    : "nav-link"
                }
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume

              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  window.location.pathname === "/contact"
                    ? "nav-link active"
                    : "nav-link"
                }
                href="https://github.com/mr-cade"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
=======

              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  window.location.pathname === "/contact"
                    ? "nav-link active"
                    : "nav-link"
                }


                href="https://github.com/mr-cade"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  window.location.pathname === "/contact"
                    ? "nav-link active"
                    : "nav-link"
                }

                href="https://www.linkedin.com/in/cadelpetersen/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

}

}

