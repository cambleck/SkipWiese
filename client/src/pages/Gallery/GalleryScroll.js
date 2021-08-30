import React, { Component } from "react";
import _ from "lodash";
import map from "lodash/map";
import { connect } from "react-redux";
import { fetchArtworkList } from "../../actions";
import Lightbox from "../../common/Lightbox";
import { Link } from "react-router-dom";
import ArtCard from "./ArtCard";
import GalleryPanel from "./GalleryPanel";
import MetaInfo from "../../common/MetaInfo";

class GalleryScroll extends Component {
  state = {
    loading: true,
    customCaptions: [],
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props
      .fetchArtworkList(this.props.match.params.type)
      .then(() => this.setState({ loading: false }))
      .then(() => this.captionList());
  }

  renderArtwork() {
    return map(this.props.artworkList, (artwork) => {
      return <ArtCard artwork={artwork} />;
    });
  }

  captionList() {
    var captionList = [];
    if (this.props.artworkList != null) {
      for (let i = 0; i < this.props.artworkList.length; i++) {
        const { title, typeLabel, _id } = this.props.artworkList[i];

        captionList.push({
          id: i,
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

  render() {
    return (
      <>
        <MetaInfo title="Mixed Media | Skip Wiese" />
        <GalleryPanel />
        {this.state.loading ? (
          <div class="loader-container">
            <div class="loader"></div>
          </div>
        ) : (
          <div className="grid column">
            <Lightbox customCaptions={this.state.customCaptions}>
              {this.renderArtwork()}
            </Lightbox>
          </div>
        )}
      </>
    );
  }
}

function mapStateToProps({ artworkList }, ownProps) {
  return { artworkList };
}

export default connect(mapStateToProps, { fetchArtworkList })(GalleryScroll);
