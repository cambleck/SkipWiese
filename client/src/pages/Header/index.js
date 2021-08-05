import React from "react";
import _ from "lodash";
import logo from "../../logo.webp";
import M from "materialize-css";
import { Link, useHistory } from "react-router-dom";

const list = [
  { href: "", label: "Home" },
  { href: "about", label: "About" },
  { href: "gallery", label: "Gallery" },
  { href: "list", label: "List" },
];

const Header = () => {
  const history = useHistory();
  const onClick = (href) => {
    history.push(`/${href}`);
  };
  const displayTabs = () => {
    return _.map(list, ({ href, label }) => {
      return (
        <div className="flex-center column">
          <button
            onClick={() => onClick(href)}
            class="nav-tab column"
            to={`/${href}`}
          >
            {label}
          </button>
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
