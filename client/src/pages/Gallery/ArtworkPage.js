import React, { Component } from "react";
import map from "lodash/map";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchArtwork } from "../../actions";
import M from "materialize-css";

class ArtworkPage extends Component {
  componentDidMount() {
    M.AutoInit();
    window.scrollTo(0, 0);
    this.props.fetchArtwork(this.props.match.params.id);
  }

  renderImage() {
    if (this.props.artwork.imageUrl) {
      return (
        <img
          className="materialboxed artwork-image"
          src={
            "https://skipwiese.s3.us-east-2.amazonaws.com/" +
            this.props.artwork.imageUrl
          }
        />
      );
    }
  }

  render() {
    if (!this.props.artwork) {
      return "";
    }
    const { artwork } = this.props;

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            margin: 40,
            marginBottom: 100,
            marginTop: 80,

            maxWidth: "800px",
          }}
        >
          <div
            style={{
              border: "12px solid rgb(32,12,38)",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "5px 7px 3px rgba(50,50,50,.5)",
            }}
          >
            {this.renderImage()}
          </div>
          <div className="art-content-container">
            <div className="card-action"></div>
            <div className="art-content">
              <span className="card-title">{artwork.title}</span>
              <span className="subContent">{artwork.type}</span>
              <span className="subContent">{artwork.size}</span>
              <span className="subContent">${artwork.price}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ artworks }, ownProps) {
  console.log(artworks);
  return { artwork: artworks[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchArtwork })(ArtworkPage);
