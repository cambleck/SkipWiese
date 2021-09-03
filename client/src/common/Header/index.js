import React from "react";
import _ from "lodash";
import logo from "../../logo.png";
import M from "materialize-css";
import { Link, useHistory } from "react-router-dom";

const list = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/list", label: "List" },
  { href: "/gallery", label: "Gallery" },
  { href: "/shop", label: "Shop" },
];

const Indicator = () => {
  return (
    <div
      style={{
        width: "100%",
        height: 5,
        background: "rgb(240,240,0)",
        borderRadius: 10,
        marginTop: -3,
      }}
    ></div>
  );
};

const Header = ({ display, updateDisplay }) => {
  const history = useHistory();
  const onClick = (href) => {
    history.push(`${href}`);

    updateDisplay(href);
  };
  const displayTabs = () => {
    return _.map(list, ({ href, label }) => {
      console.log(href, "|", display);
      return (
        <div className="flex-center column">
          <button
            onClick={() => onClick(href)}
            class="nav-tab column"
            to={`/${href}`}
          >
            {label}
          </button>
          {display === href && <Indicator />}
        </div>
      );
    });
  };
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
        <ul class="flex-center row nav-width">{displayTabs()}</ul>
      </div>
    </header>
  );
};
export default Header;
