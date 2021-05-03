import React from "react";
import Form from "./Form";

const Admin = () => {
  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column", marginBottom: 100 }}
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
        style={{ width: 200, background: "white" }}
      >
        Sign Out
      </a>
    </div>
  );
};

export default Admin;
