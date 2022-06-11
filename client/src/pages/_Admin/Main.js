import React from "react";

export default function Main() {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: 100,
        marginTop: 200,
        alignItems: "center",
      }}
    >
      <div>
        <a
          className="action-btn"
          href="./api/logout"
          style={{
            width: 200,

            marginTop: 50,
          }}
        >
          Sign Out
        </a>
      </div>
    </div>
  );
}
