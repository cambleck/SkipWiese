import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "./Login";
import Main from "./Main";
import * as actions from "../../actions";

class Admin extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <Login />;
      default:
        return <Main />;
    }
  }

  render() {
    return <>{this.renderContent()}</>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(Admin);
