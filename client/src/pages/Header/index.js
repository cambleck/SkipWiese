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
            <Link class="col s3 nav-tab " to="./">
              <a class="active" target="_self" href="./">
                Home
              </a>
            </Link>

            <Link class="col s3 nav-tab" to="./about">
              <a class="active" target="_self" href="./about">
                About
              </a>
            </Link>
            <Link class="col s3 nav-tab" to="./gallery">
              <a class="active" target="_self" href="./gallery">
                Gallery
              </a>
            </Link>
            <Link class="col s3 nav-tab" to="./lists">
              <a class="active" target="_self" href="./list">
                All
              </a>
            </Link>
          </ul>
        </div>
      </header>
    );
  }
}
export default Header;
