import React from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          background: "rgba(255, 245, 0, .8)",
          height: 4,
        }}
      ></div>
      <nav className="nav white">
        <div
          class="nav-wrapper"
          style={{
            backgroundColor: "rgba(255,250,100,.02)",
          }}
        >
          <Link to="/" style={{ cursor: "pointer" }}>
            <img
              src={logo}
              alt="Skip Wiese Logo"
              style={{
                width: 150,
                marginLeft: 20,
                marginTop: 12,
              }}
            />
          </Link>

          <ul class="right" style={{ marginRight: 20 }}>
            <li>
              <Link
                to="/about"
                style={{
                  color: "black",
                  fontSize: 12,
                  fontWeight: "600",
                  letterSpacing: "0.056em",
                }}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                style={{
                  color: "black",
                  fontSize: 12,
                  fontWeight: "600",
                  letterSpacing: "0.056em",
                }}
              >
                GALLERY
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                style={{
                  color: "black",
                  fontSize: 12,
                  fontWeight: "600",
                  letterSpacing: "0.056em",
                }}
              >
                SHOP
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Header;
