import React, { Component } from "react";
import map from "lodash/map";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchArtwork } from "../../actions";
import ArtCard from "./ArtCard";

class ArtworkPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchArtwork(this.props.match.params.id);
  }

  render() {
    if (!this.props.artwork) {
      return "";
    }
    return (
      <div className="flex-center column">
        <ArtCard artwork={this.props.artwork} />
      </div>
    );
  }
}

function mapStateToProps({ artworkList }, ownProps) {
  return { artwork: artworkList[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchArtwork })(ArtworkPage);
