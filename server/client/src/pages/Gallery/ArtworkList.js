import React, { Component } from "react";
import map from "lodash/map";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchArtworkList } from "../../actions";

class ArtworkList extends Component {
  componentDidMount() {
    this.props.fetchArtwork();
  }

  renderArtwork() {
    return map(this.props.artwork, (artwork) => {
      return (
        <div className="card darken-1 horizontal" key={artwork._id}>
          <div className="card-stacked">
            <div className="card-content">
              <span className="card-title">{artwork.title}</span>
              <span className="card-title">{artwork.type}</span>
              <span className="card-title">{artwork.size}</span>
              <span className="card-title">{artwork.price}</span>
            </div>
            <div className="card-action">
              <Link to={`/artworks/${artwork._id}`}>View</Link>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderArtwork()}</div>;
  }
}

function mapStateToProps({ artworks }) {
  return { artworks };
}

export default connect(mapStateToProps, { fetchArtworkList })(ArtworkList);
