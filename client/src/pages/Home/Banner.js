import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      {" "}
      ArtWauk at Waukegan Harbor Gallery || Sat, June 18, 2022 (5pm - 8pm)
      <a
        style={{
          marginLeft: 5,
          cursor: "pointer",
          fontWeight: "bold",
          color: "black",
          textDecoration: "underline",
          zIndex: 99999,
        }}
        href="https://stayhappening.com/e/art-wauk-harbor-gallery-skip-wiese-is-featured-artist-E2ISU9OQX6I"
      >
        Find out more
      </a>
    </div>
  );
};

export default Banner;
