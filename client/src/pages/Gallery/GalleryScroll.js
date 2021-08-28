import React, { Component } from "react";
import _ from "lodash";
import map from "lodash/map";
import { connect } from "react-redux";
import Pagination from "react-js-pagination";
import { fetchArtworkList, clearList } from "../../actions";
import Lightbox from "../../common/Lightbox";

import ArtCard from "./ArtCard";
import GalleryPanel from "./GalleryPanel";

class GalleryScroll extends Component {
  state = {
    activePage: this.props.match.params.pageNumber,
    loading: true,
    customCaptions: [],
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.clearList();
    this.props
      .fetchArtworkList(this.props.match.params.type, this.state.activePage)
      .then(() => this.setState({ loading: false }))
      .then(() => this.captionList());
  }

  handlePageChange(pageNumber) {
    window.scrollTo(0, 0);
    this.setState({ activePage: pageNumber });
    this.props.clearList();
    this.props.history.push(
      `/gallery/s/${this.props.match.params.type}/${pageNumber}`
    );
    this.props.fetchArtworkList(this.props.match.params.type, pageNumber);
  }

  renderArtwork() {
    return map(this.props.artworks.artwork, (artwork) => {
      return <ArtCard artwork={artwork} />;
    });
  }

  captionList() {
    var captionList = [];
    if (this.props.artwork != null) {
      for (let i = 0; i < this.props.artwork.length; i++) {
        captionList.append({
          id: this.props.artwork[i]._id,
          caption: (
            <div className="SRLCustomCaption">
              {this.props.artwork[i].title}
            </div>
          ),
        });
      }

      this.setState({ customCaptions: captionList });
    }
  }

  render() {
    console.log(this.state.customCaptions);
    return (
      <>
        {this.state.loading ? (
          <div class="loader-container">
            <div class="loader"></div>
          </div>
        ) : (
          <div className="grid column">
            <GalleryPanel />
            <Lightbox customCaptions={this.state.customCaptions}>
              {this.renderArtwork()}
            </Lightbox>
          </div>
        )}
      </>
    );
  }
}

function mapStateToProps({ artworks }, ownProps) {
  return { artworks };
}

export default connect(mapStateToProps, { fetchArtworkList, clearList })(
  GalleryScroll
);
