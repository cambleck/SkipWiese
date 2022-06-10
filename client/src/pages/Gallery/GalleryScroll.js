import React, { Component } from "react";
import _ from "lodash";
import map from "lodash/map";
import { connect } from "react-redux";
import { fetchArtworkList } from "../../redux/actions";

import { Link, withRouter } from "react-router-dom";
import ArtworkCard from "./ArtworkCard";
import GalleryPanel from "./GalleryPanel";
import MetaInfo from "../../common/MetaInfo";
import Loading from "../../common/Loading";
import {
  shuffleList,
  reverseObjectList,
  sortObjectList,
} from "../../common/sortingFunctions";

const renderList = (list) => {
  return map(list, (artwork) => {
    return <ArtworkCard artwork={artwork} key={artwork._id} />;
  });
};

class GalleryScroll extends Component {
  state = {
    loading: true,
    customCaptions: [],
    sort: "default",
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props
      .fetchArtworkList(this.props.match.params.type)
      .then(() => this.setState({ loading: false }))
      .then(() => this.captionList());
  }

  captionList() {
    var captionList = [];
    if (this.props.artworkList != null) {
      for (let i = 0; i < this.props.artworkList.length; i++) {
        const { title, typeLabel, _id } = this.props.artworkList[i];

        captionList.push({
          id: _id,
          caption: (
            <>
              {!title ? (
                <div className="artwork-info-container">
                  <div
                    className="card-action"
                    style={{ fontWeight: "bold" }}
                  ></div>
                  <a
                    href={`/${_id}`}
                    className=""
                    style={{
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    →
                  </a>
                </div>
              ) : (
                <div
                  className="artwork-info-container"
                  style={{
                    marginBottom: 50,
                    width: "100%",
                  }}
                >
                  <a
                    href={`/${_id}`}
                    className="artwork-info-card"
                    style={{ maxWidth: "none" }}
                  >
                    <div className="art-content">
                      <span className="artwork-info-title">{title}</span>
                      <span className="artwork-info-subContent">
                        {typeLabel ? typeLabel : ""}
                      </span>
                    </div>
                  </a>
                </div>
              )}
            </>
          ),
        });
      }

      this.setState({ customCaptions: captionList });
    }
  }

  filterList = (list) => {
    if (this.state.sort === "reverse") {
      reverseObjectList(list);
    }
    if (this.state.sort === "shuffle") {
      shuffleList(list);
    }
    if (this.state.sort === "default") {
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
    return list;
  };

  handleSortChange = (event) => {
    this.setState({ sort: event.target.value });
  };

  handleShuffleClick = () => {
    this.setState({ list: shuffleList(this.props.artworkList) });
  };
  render() {
    return (
      <>
        <MetaInfo title="Mixed Media | Skip Wiese" />
        <GalleryPanel
          onSortChange={this.handleSortChange}
          sort={this.state.sort}
          onShuffleClick={this.handleShuffleClick}
          type={this.props.match.params.type}
        />
        {this.state.loading ? (
          <Loading />
        ) : (
          <div className="grid column">
            {renderList(this.filterList(this.props.artworkList))}
          </div>
        )}
      </>
    );
  }
}

function mapStateToProps({ artworkList }, ownProps) {
  return { artworkList };
}

export default connect(mapStateToProps, { fetchArtworkList })(
  withRouter(GalleryScroll)
);
