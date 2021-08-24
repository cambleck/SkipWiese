import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchListView, fetchUser, deleteArtwork } from "../../actions";
import Search from "./Search";
import ListItem from "./ListItem";
import CreateModal from "../_Admin/CreateModal/";

const renderList = (list, auth, onDeleteClick) => {
  return _.map(list, ({ title, imageUrl, height, width, typeLabel, _id }) => {
    var size;
    if (height) {
      size = `${height} x ${width}`;
    } else {
      size = null;
    }
    return (
      <ListItem
        title={title}
        image={imageUrl}
        size={size}
        typeLabel={typeLabel}
        _id={_id}
      />
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
