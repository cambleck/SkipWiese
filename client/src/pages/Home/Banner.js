import React from "react";

export default function Banner() {
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
        }}
        href="https://stayhappening.com/e/art-wauk-harbor-gallery-skip-wiese-is-featured-artist-E2ISU9OQX6I"
      >
        Find out more
      </a>
    </div>
  );
}
