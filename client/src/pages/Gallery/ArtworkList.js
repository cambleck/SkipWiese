import React, { Component } from "react";
import map from "lodash/map";
import { connect } from "react-redux";

import { fetchArtworkList } from "../../actions";

import ArtCard from "./ArtCard";

class ArtworkList extends Component {
  componentDidMount() {
    this.props.fetchArtworkList();
  }

  renderArtwork() {
    return map(this.props.artworks, (artwork) => {
      return <ArtCard artwork={artwork} />;
    });
  }

  render() {
    return (
      <div class="grid" style={{ display: "flex" }}>
        {this.renderArtwork()}
      </div>
    );
  }
}

function mapStateToProps({ artworks }) {
  return { artworks };
}

export default connect(mapStateToProps, { fetchArtworkList })(ArtworkList);
