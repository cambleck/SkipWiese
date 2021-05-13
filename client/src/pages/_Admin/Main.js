import React from "react";

class Main extends React.Component {
  render() {
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
            className="admin-main-button"
            href="./api/logout"
            style={{
              width: 200,
              background: "white",
              marginTop: 50,
            }}
          >
            Sign Out
          </a>
        </div>
      </div>
    );
  }
}

export default Main;
