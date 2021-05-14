import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchListView, fetchUser, deleteArtwork } from "../../actions";
import Search from "./Search";

import CreateModal from "../_Admin/CreateModal/";

const renderList = (list, auth, onDeleteClick) => {
  return _.map(list, ({ title, imageUrl, height, width, typeLabel, _id }) => {
    return (
      <li className="collection-item avatar" key={_id}>
        <img
          src={"https://skipwiese.s3.us-east-2.amazonaws.com/" + imageUrl}
          alt=""
          className="circle"
        />
        <span className="title" style={{ fontWeight: "bold" }}>
          {title}
        </span>
        <p>
          {typeLabel ? typeLabel : ""}
          <br></br>
          {height} x {width}
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
          <>
            <a
              className="modal-trigger secondary-content"
              onClick={() => onDeleteClick(imageUrl, _id)}
              style={{ marginBottom: 20, marginRight: 50, cursor: "pointer" }}
            >
              <i
                className="material-icons red-text"
                style={{
                  textShadow: "0px 0px 1px white",
                }}
              >
                delete
              </i>
            </a>
          </>
        )}
      </li>
    );
  });
};

class ListView extends React.Component {
  state = {
    searchValue: "",
    id: "",
  };

  filterList = (list) => {
    const self = this;
    let filter = [];
    if (this.state.searchValue != "") {
      filter = list.filter(function (item) {
        return (
          item.title
            .toLowerCase()
            .includes(self.state.searchValue.toLowerCase()) ||
          item.typeLabel
            .toLowerCase()
            .includes(self.state.searchValue.toLowerCase())
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

  onDeleteClick = (imageUrl, id) => {
    this.props.deleteArtwork(imageUrl, id);
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
              className="waves-effect waves-light btn modal-trigger"
              href="#modal-new"
              style={{ marginBottom: 20 }}
            >
              New
            </a>
            <CreateModal type="new" id="" />
          </>
        )}
        <ul className="collection">
          {renderList(
            this.filterList(this.props.artworks),
            this.props.auth,
            (imageUrl, id) => this.onDeleteClick(imageUrl, id)
          )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ artworks, auth }, ownProps) {
  return { artworks, auth };
}

export default connect(mapStateToProps, {
  fetchListView,
  fetchUser,
  deleteArtwork,
})(ListView);
