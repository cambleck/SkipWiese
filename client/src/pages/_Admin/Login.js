import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form
          action="/api/login"
          method="post"
          style={{
            width: 400,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            border: "1px solid rgb(220,220,220)",
            borderRadius: "10px",
            padding: 50,
            margin: 50,
            background: "white",
          }}
        >
          <div>
            <label style={{ letterSpacing: 3 }}>Username:</label>
            <input type="text" name="username" />
          </div>
          <div style={{ marginTop: 20 }}>
            <label style={{ letterSpacing: 3 }}>Password:</label>
            <input type="password" name="password" />
          </div>
          <div style={{ margin: 50, border: "none" }}>
            <input type="submit" value="LOG IN" className="yellow-button" />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
