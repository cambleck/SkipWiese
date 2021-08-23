import React, { Component } from "react";
import map from "lodash/map";
import { connect } from "react-redux";
import Pagination from "react-js-pagination";
import { fetchArtworkList, clearList } from "../../actions";

import Lightbox from "../../common/Lightbox";

import ArtCard from "./ArtCard";

class ArtworkList extends Component {
  state = {
    activePage: this.props.match.params.pageNumber,
    loading: true,
  };
  componentDidMount() {
    this.props.clearList();
    this.props
      .fetchArtworkList(this.props.match.params.type, this.state.activePage)
      .then(() => this.setState({ loading: false }));
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
      return <ArtCard artwork={artwork} key={artwork._id} />;
    });
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
            className="grid"
            style={{ flexDirection: "column", marginTop: -50 }}
          >
            <Lightbox>{this.renderArtwork()}</Lightbox>
            <br></br>

            {this.props.artworks.totalPages > 1 && (
              <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={2}
                totalItemsCount={this.props.artworks.totalPages * 2}
                pageRangeDisplayed={5}
                onChange={this.handlePageChange.bind(this)}
                activeLinkClass="active-pag"
                innerClass="pag"
                itemClass="item-pag"
              />
            )}
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
  ArtworkList
);
