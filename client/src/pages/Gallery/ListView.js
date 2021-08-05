import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchListView, fetchUser, deleteArtwork } from "../../actions";
import Search from "./Search";

import CreateModal from "../_Admin/CreateModal/";

const renderList = (list, auth, onDeleteClick) => {
  return _.map(list, ({ title, imageUrl, height, width, typeLabel, _id }) => {
    const size = `${height} x ${width}`;
    return (
      <a
        href={`gallery/a/${_id}`}
        className="collection-item avatar black-text"
        key={_id}
      >
        <img
          src={"https://skipwiese.s3.us-east-2.amazonaws.com/" + imageUrl}
          alt=""
          className="list-image circle"
        />
        <div
          className="title"
          style={{ fontWeight: "bold", maxWidth: "80%", fontSize: 14 }}
        >
          {title && title}
        </div>
        <p style={{ fontSize: 12 }}>
          {typeLabel ? typeLabel : ""}
          <br></br>
          {height && size}
        </p>
        <div className="secondary-content">
          <i
            className="material-icons black-text"
            style={{ textShadow: "0px 0px 1px white" }}
          >
            arrow_forward
          </i>
        </div>
        {auth && (
          <>
            <a
              className="modal-trigger secondary-content"
              onClick={() => onDeleteClick(imageUrl, _id)}
              style={{
                marginBottom: 20,
                marginRight: 50,
                cursor: "pointer",
                zIndex: 1,
              }}
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
      </a>
    );
  });
};

class ListView extends React.Component {
  state = {
    searchValue: "",
    id: "",
    loading: true,
  };

  filterList = (list) => {
    const self = this;
    let filter = [];
    if (list && this.state.searchValue != "") {
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
    this.props.fetchListView().then(() => this.setState({ loading: false }));
    this.props.fetchUser();
  }
  render() {
    return (
      <>
        {this.state.loading ? (
          <div class="loader-container">
            <div class="loader"></div>
          </div>
        ) : (
          <div
            className="container"
            style={{ marginBottom: 200, marginTop: 50 }}
          >
            <div className="list-panel">
              <Search
                onSearchChange={this.onSearchChange}
                searchValue={this.state.searchValue}
              />
            </div>
            {this.props.auth && (
              <>
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
        )}
      </>
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
