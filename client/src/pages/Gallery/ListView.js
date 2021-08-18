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
        className="collection-list-item black-text"
        key={_id}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <img
            src={"https://skipwiese.s3.us-east-2.amazonaws.com/" + imageUrl}
            alt=""
            className="list-image"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",

              maxWidth: "70%",
            }}
          >
            <div
              style={{
                fontWeight: "bold",

                fontSize: 14,
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",

                overflow: "hidden",
                textAlign: "left",
              }}
            >
              {title && title}
            </div>
            <div style={{ fontSize: 12, color: "rgb(60, 64, 66)" }}>
              {typeLabel ? typeLabel : ""} {height && `(${size})`}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <i
            className="material-icons black-text"
            style={{
              textShadow: "0px 0px 1px white",
            }}
          >
            chevron_right
          </i>
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
        </div>
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
      <div className="flex-center column">
        {this.state.loading ? (
          <div class="loader-container">
            <div class="loader"></div>
          </div>
        ) : (
          <div className="list-container">
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
