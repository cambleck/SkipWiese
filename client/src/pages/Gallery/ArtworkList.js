import React, { Component } from "react";
import map from "lodash/map";
import { connect } from "react-redux";
import Pagination from "react-js-pagination";
import { fetchArtworkList, clearList } from "../../actions";

import ArtCard from "./ArtCard";

class ArtworkList extends Component {
  state = {
    activePage: 1,
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.clearList();
    this.props.fetchArtworkList(
      this.props.match.params.type,
      this.state.activePage
    );
  }

  handlePageChange(pageNumber) {
    window.scrollTo(0, 0);
    console.log(pageNumber, "PagenUmber");
    this.setState({ activePage: pageNumber });
    this.props.clearList();
    this.props.fetchArtworkList(this.props.match.params.type, pageNumber);
  }

  renderArtwork() {
    return map(this.props.artworks.artwork, (artwork) => {
      return <ArtCard artwork={artwork} />;
    });
  }

  render() {
    return (
      <div class="grid" style={{ flexDirection: "column", marginTop: -50 }}>
        {this.renderArtwork()}
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
            hideFirstLastPages="true"
          />
        )}
      </div>
    );
  }
}

function mapStateToProps({ artworks }, ownProps) {
  return { artworks };
}

export default connect(mapStateToProps, { fetchArtworkList, clearList })(
  ArtworkList
);
