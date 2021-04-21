import React, { Component } from "react";
import map from "lodash/map";
import { connect } from "react-redux";

import { fetchArtworkList } from "../../actions";

import ArtCard from "./ArtCard";

class ArtworkList extends Component {
  componentDidMount() {
    this.props.fetchArtworkList(this.props.match.params.type);
  }

  renderArtwork() {
    return map(this.props.artworks, (artwork) => {
      return <ArtCard artwork={artwork} />;
    });
  }

  render() {
    console.log(this.props.artworks);
    return <div class="grid">{this.renderArtwork()}</div>;
  }
}

function mapStateToProps({ artworks }, ownProps) {
  return { artworks };
}

export default connect(mapStateToProps, { fetchArtworkList })(ArtworkList);
