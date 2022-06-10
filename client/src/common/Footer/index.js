import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer transparent">
      <div className="container black-text" style={{ height: 40 }}>
        © 2021 The Estate of Skip Wiese | Site By{" "}
        <a
          href="https://ridgeshore.com"
          target="_blank"
          style={{ cursor: "pointer", color: "black" }}
          className="hyperlink"
        >
          Ridgeshore, Inc.
        </a>
        <a
          className="black-text text-lighten-4 right"
          href="mailto:info@skipwiese.com"
        ></a>
      </div>
    </footer>
  );
};

export default Footer;
