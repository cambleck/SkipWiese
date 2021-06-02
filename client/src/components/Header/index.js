import React from "react";
import logo from "../../logo.webp";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header-stripe"></div>
      <nav className="nav white">
        <div className="nav-wrapper">
          <Link to="/" className="pointer">
            <img src={logo} alt="Skip Wiese Logo" className="logo" />
          </Link>

          <ul className="right">
            <li>
              <Link to="/about" className="header-tab">
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="header-tab">
                GALLERY
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
