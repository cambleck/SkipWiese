import React, { useEffect } from "react";
import { connect } from "react-redux";
import Login from "./Login";
import Main from "./Main";
import { fetchUser } from "../../redux/actions/AdminActions";
import "./index.css";

function Admin({ fetchUser, auth }) {
  useEffect(() => {
    fetchUser();
    console.log(auth);
  }, []);

  function Display() {
    switch (auth) {
      case null:
        return null;
      case false:
        return <Login />;
      default:
        return <Main />;
    }
  }

  return <Display />;
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { fetchUser })(Admin);
