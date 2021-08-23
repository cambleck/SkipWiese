import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer white">
      <div className="container black-text" style={{ height: 40 }}>
        © 2021 The Estate of Skip Wiese
        {/*| Site By{" "}
        <a
          href="https://ridgeshore.com"
          target="_blank"
          style={{ fontWeight: "bold", cursor: "pointer", color: "black" }}
        >
          Ridgeshore
        </a>
        */}
        <a
          className="black-text text-lighten-4 right"
          href="mailto:info@skipwiese.com"
        ></a>
      </div>
    </footer>
  );
};

export default Footer;
