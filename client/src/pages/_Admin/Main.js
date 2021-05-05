import React from "react";

const Main = () => {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: 100,
        marginTop: 100,
        alignItems: "center",
      }}
    >
      <a className="admin-main-button" href="./_admin/new">
        CREATE NEW
      </a>
      <a className="admin-main-button" href="./_admin/View">
        VIEW DATABASE
      </a>
      <a className="admin-main-button" href="./_admin/Orders">
        Orders
      </a>
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
  );
};

export default Main;
