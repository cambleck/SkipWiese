import React from "react";
import logo from "../../logo.webp";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header-stripe"></div>
      <nav className="nav white">
        <div className="nav-wrapper">
          <img src={logo} alt="Skip Wiese Logo" className="logo" />
        </div>
      </nav>
      <div class="nav-content">
        <ul class="tabs flex-center">
          <li class="tab  black-text">
            <a href="#test1">Home</a>
          </li>
          <li class="tab">
            <a class="active" href="#test2">
              About
            </a>
          </li>
          <li class="tab">
            <a href="#test3">Gallery</a>
          </li>
          <li class="tab">
            <a href="#test4">All</a>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
