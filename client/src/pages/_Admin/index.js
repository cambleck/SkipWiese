import React, { useEffect } from "react";
import { connect } from "react-redux";
import Login from "./Login";
import Main from "./Main";
import * as actions from "../../redux/actions";
import "./admin.css";

function Admin({ fetchUser }) {
  useEffect(() => {
    fetchUser();
  });

  function Content() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <Login />;
      default:
        return <Main />;
    }
  }

  return <Content />;
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(Admin);
