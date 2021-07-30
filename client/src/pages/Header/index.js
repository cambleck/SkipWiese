import React from "react";
import logo from "../../logo.webp";
import M from "materialize-css";
import { Link } from "react-router-dom";

class Header extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <header>
        <div className="header-stripe"></div>
        <nav className="nav white">
          <div className="stripe"></div>
          <div className="nav-wrapper">
            <img src={logo} alt="Skip Wiese Logo" className="logo" />
          </div>
          <div className="stripe"></div>
        </nav>
        <div class="nav-content">
          <ul class="tabs flex-center">
            <li class="tab">
              <Link to="/">Home</Link>
            </li>
            <Link to="/about" class="tab">
              <Link to="/about">About</Link>
            </Link>
            <li class="tab">
              <a href="#gallery">Gallery</a>
            </li>
            <li class="tab">
              <a href="#all">All</a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
export default Header;
