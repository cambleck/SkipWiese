import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchListView, fetchUser, deleteArtwork } from "../../actions";
import ListItem from "./ListItem";
import ListPanel from "./ListPanel";
import ArtworkModal from "../_Admin/ArtworkModal/";
import { Helmet } from "react-helmet";

const CreateNewArtworkButton = () => {
  return (
    <>
      <a
        className="waves-effect waves-light btn modal-trigger yellow black-text flex-center"
        href="#artworkModal"
        style={{ position: "fixed", bottom: 20, right: 20 }}
      >
        NEW +
      </a>
      <ArtworkModal id="" />
    </>
  );
};

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
        <Helmet>
          <meta charSet="utf-8" />
          <title>List | Skip Wiese</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className="list-container">
          <div className="flex-center column">
            <ListPanel
              onSearchChange={this.onSearchChange}
              searchValue={this.state.searchValue}
            />
          </div>
          {this.props.auth && <CreateNewArtworkButton />}
          {this.state.loading ? (
            <div class="loader-container">
              <div class="loader"></div>
            </div>
          ) : (
            <ul className="collection">
              {renderList(
                this.filterList(this.props.artworkList),
                this.props.auth,
                (imageUrl, id) => this.onDeleteClick(imageUrl, id)
              )}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ artworkList, auth }, ownProps) {
  return { artworkList, auth };
}

export default connect(mapStateToProps, {
  fetchListView,
  fetchUser,
  deleteArtwork,
})(ListView);
