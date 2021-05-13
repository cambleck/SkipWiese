import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchListView, fetchUser } from "../../actions";
import Search from "./Search";

import CEDModal from "../_Admin/CEDModal/";

const renderList = (list, auth) => {
  return _.map(list, ({ title, imageUrl, size, type, _id }) => {
    console.log(_id);
    return (
      <li class="collection-item avatar">
        <img
          src={"https://skipwiese.s3.us-east-2.amazonaws.com/" + imageUrl}
          alt=""
          className="circle"
        />
        <span className="title" style={{ fontWeight: "bold" }}>
          {title}
        </span>
        <p style={{ textTransform: "capitalize" }}>
          {type ? type.toLowerCase() : ""}
          <br></br>
          {size}
        </p>
        <a href={`gallery/a/${_id}`} className="secondary-content">
          <i
            className="material-icons black-text"
            style={{ textShadow: "0px 0px 1px white" }}
          >
            arrow_forward
          </i>
        </a>
        {auth && (
          <a href="#modal-edit" className="secondary-content">
            <i
              className="material-icons black-text"
              style={{ textShadow: "0px 0px 1px white", marginRight: 50 }}
            >
              settings
            </i>
          </a>
        )}
      </li>
    );
  });
};

class ListView extends React.Component {
  state = {
    searchValue: "",
  };

  filterList = (list) => {
    const self = this;
    let filter = [];
    if (this.state.searchValue != "") {
      console.log(this.state);
      filter = list.filter(function (item) {
        return (
          item.title
            .toLowerCase()
            .includes(self.state.searchValue.toLowerCase()) ||
          item.type.toLowerCase().includes(self.state.searchValue.toLowerCase())
        );
      });
    } else {
      filter = list;
    }

    return filter;
  };

  onSearchChange = (event) => {
    this.setState({ searchValue: event.target.value });
  };
  componentDidMount() {
    this.props.fetchListView();
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container" style={{ marginBottom: 200 }}>
        <div className="list-panel">
          <Search
            onSearchChange={this.onSearchChange}
            searchValue={this.state.searchValue}
          />
        </div>
        {this.props.auth && (
          <>
            {" "}
            <a
              class="waves-effect waves-light btn modal-trigger"
              href="#modal-new"
              style={{ marginBottom: 20 }}
            >
              New
            </a>
            <CEDModal type="new" />
          </>
        )}
        <ul class="collection">
          {renderList(this.filterList(this.props.artworks), this.props.auth)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ artworks, auth }, ownProps) {
  return { artworks, auth };
}

export default connect(mapStateToProps, { fetchListView, fetchUser })(ListView);
