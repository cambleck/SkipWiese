import React from "react";
import _ from "lodash";
import logo from "../../logo.png";
import NavBar from "./NavBar";
import M from "materialize-css";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./index.css";

const list = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/list", label: "List" },
  { href: "/gallery", label: "Gallery" },
  { href: "/shop", label: "Shop" },
];

function Indicator() {
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
}

export default function Header({ display, updateDisplay }) {
  const history = useHistory();
  const page = useLocation().pathname.split("/")[1];

  const displayTabs = () => {
    return _.map(list, ({ href, label }) => {
      return (
        <div className="flex-center column" key={label}>
          <button className="nav-tab column" to={`/${href}`}>
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
      <div className="nav white">
        <div className="header-stripe mid"></div>
        <div className="nav-wrapper">
          <img src={logo} alt="Skip Wiese Logo" className="logo" />
        </div>
        <div className="header-stripe mid"></div>
      </div>
      <NavBar page={page} />
    </header>
  );
}
