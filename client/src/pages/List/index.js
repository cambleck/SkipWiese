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
      <a href={`gallery/a/${_id}`} className=" list-item black-text" key={_id}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "90%",

              textOverflow: "ellipsis",

              overflow: "hidden",
            }}
          >
            <img
              src={"https://skipwiese.s3.us-east-2.amazonaws.com/" + imageUrl}
              alt=""
              className="list-image"
            />
            <div className="list-title">
              <div
                style={{
                  fontWeight: "bold",

                  fontSize: 13,

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
              justifyContent: "center",
              width: "10%",
              margin: 0,
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
          </div>
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
            <div className="flex-center column">
              <div className="list-panel">
                <Search
                  onSearchChange={this.onSearchChange}
                  searchValue={this.state.searchValue}
                />
                <div
                  style={{
                    width: 1,
                    height: 20,
                    background: "black",
                    margin: 5,
                  }}
                ></div>
                <select class="browser-default">
                  <option value="1">A-Z</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
              </div>
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
