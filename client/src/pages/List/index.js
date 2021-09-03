import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchListView, fetchUser, deleteArtwork } from "../../actions";
import ListItem from "./ListItem";
import ListPanel from "./ListPanel";
import ArtworkModal from "../_Admin/ArtworkModal/";
import { Helmet } from "react-helmet";
import Loading from "../../common/Loading";
import {
  shuffleList,
  reverseObjectList,
  sortObjectList,
} from "../../common/functions";

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

const renderList = (list) => {
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
    sort: "default",
  };

  componentDidMount() {
    this.props.fetchListView().then(() => this.setState({ loading: false }));
    this.props.fetchUser();
  }

  filterList = (list) => {
    const self = this;
    let filter = [];

    /* sort filter */
    if (this.state.sort === "reverse") {
      reverseObjectList(list);
    } else if (this.state.sort === "shuffle") {
      shuffleList(list);
    } else {
      var noTitleArray = [];
      sortObjectList(list);
      noTitleArray = list.filter((item) => {
        return item.title === "";
      });
      list = list.filter((item) => {
        return item.title != "";
      });
      list.push.apply(list, noTitleArray);
    }

    /* search filter */
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

  handleSearchChange = (event) => {
    this.setState({ searchValue: event.target.value });
  };

  handleSortChange = (event) => {
    this.setState({ sort: event.target.value });
  };

  handleShuffleClick = () => {
    this.setState({ list: shuffleList(this.props.artworkList) });
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
              onSearchChange={this.handleSearchChange}
              searchValue={this.state.searchValue}
              onSortChange={this.handleSortChange}
              sort={this.state.sort}
              onShuffleClick={this.handleShuffleClick}
            />
          </div>
          {this.props.auth && <CreateNewArtworkButton />}
          {this.state.loading ? (
            <Loading />
          ) : (
            <ul className="collection">
              {renderList(
                this.filterList(
                  this.props.artworkList ? this.props.artworkList : []
                )
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
