import React from "react";
import _ from "lodash";
import logo from "../../logo.webp";
import M from "materialize-css";
import { Link } from "react-router-dom";

const list = [
  { href: "", label: "Home" },
  { href: "about", label: "About" },
  { href: "gallery", label: "Gallery" },
  { href: "list", label: "All" },
];

class Header extends React.Component {
  componentDidMount() {
    M.AutoInit();
    console.log(this.state.page);
  }

  state = {
    page: window.location.pathname,
  };

  onClick = (href) => {
    this.setState({ page: href });
  };
  displayTabs = () => {
    return _.map(list, ({ href, label }) => {
      return (
        <div className="flex-center column col s3">
          <button
            onClick={() => this.onClick(href)}
            class="nav-tab column"
            to={`/${href}`}
          >
            {label}
          </button>
          {href === "" && (
            <div
              style={{ width: "100%", height: 5, backgroundColor: "yellow" }}
            ></div>
          )}
        </div>
      );
    });
  };
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
          <ul class="flex-center row nav-width">{this.displayTabs()}</ul>
        </div>
      </header>
    );
  }
}
export default Header;
