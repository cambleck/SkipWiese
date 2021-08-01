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
            <li class="tab ">
              <a class="active" target="_self" href="./">
                Home
              </a>
            </li>

            <li class="tab">
              <a class="active" target="_self" href="./about">
                About
              </a>
            </li>
            <li class="tab">
              <a class="active" target="_self" href="./gallery">
                Gallery
              </a>
            </li>
            <li class="tab">
              <a class="active" target="_self" href="./list">
                All
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
export default Header;
