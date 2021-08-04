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
        <div className="nav-content">
          <ul class="flex-center row" style={{ width: 400 }}>
            <Link class="col s3 nav-tab " to="/">
              Home
            </Link>
            <Link class="col s3 nav-tab " to="/about">
              About
            </Link>
            <Link class="col s3 nav-tab" to="/gallery">
              Gallery
            </Link>
            <Link class="col s3 nav-tab" to="/list">
              All
            </Link>
          </ul>
        </div>
      </header>
    );
  }
}
export default Header;
