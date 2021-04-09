import React from "react";
import logo from "./logo.svg";

const Header = () => {
  return (
    <div className="header">
      <a href="./" style={{ cursor: "pointer" }}>
        <img
          src={logo}
          alt="Skip Wiese Logo"
          style={{ width: 200, marginLeft: 20, marginTop: 15 }}
        />
      </a>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginRight: 50,
          color: "black",
        }}
      >
        <a href="./about" style={{ color: "black" }}>
          {" "}
          About{" "}
        </a>
        <a href="./gallery" style={{ marginLeft: 30, color: "black" }}>
          Gallery
        </a>
        <a href="./contact" style={{ marginLeft: 30, color: "black" }}>
          Contact
        </a>
      </div>
    </div>
  );
};
export default Header;
