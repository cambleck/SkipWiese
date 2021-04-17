import React, { Component } from "react";
import map from "lodash/map";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchArtworkList } from "../../actions";
import M from "materialize-css";

class ArtworkList extends Component {
  componentDidMount() {
    M.AutoInit();
    this.props.fetchArtworkList();
  }

  renderArtwork() {
    return map(this.props.artworks, (artwork) => {
      return (
        <div className="col s12 m6 l4 card-container" style={{ margin: 40 }}>
          <div
            style={{
              border: "10px solid rgb(32,12,38)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "5px 7px 3px rgba(50,50,50,.5)",
            }}
          >
            <img
              className="materialboxed carousel-image"
              src={
                "https://skipwiese.s3.us-east-2.amazonaws.com/" +
                artwork.imageUrl
              }
              alt={"image"}
            />
          </div>
          <div className="content-container">
            <div className="card-action" style={{ fontWeight: "bold" }}></div>
            <Link to={`/gallery/${artwork._id}`} className="card-content">
              <span className="card-title">{artwork.title}</span>
              <span className="subContent">{artwork.type}</span>
              <span className="subContent">{artwork.size}</span>
              <span className="subContent">${artwork.price}</span>
            </Link>
          </div>
        </div>
      );
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
