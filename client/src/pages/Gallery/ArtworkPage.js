import React, { Component } from "react";
import map from "lodash/map";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchArtwork } from "../../actions";
import M from "materialize-css";

const MImage = ({ url }) => {
  const imageRef = React.useRef();

  React.useEffect(() => {
    M.Materialbox.init(imageRef.current);
  }, [imageRef]);
  return (
    <img
      className="materialboxed artwork-image"
      src={"https://skipwiese.s3.us-east-2.amazonaws.com/" + url}
      alt=""
      ref={imageRef}
    />
  );
};

class ArtworkPage extends Component {
  componentDidMount() {
    M.AutoInit();
    window.scrollTo(0, 0);
    this.props.fetchArtwork(this.props.match.params.id);
  }

  renderImage() {
    if (this.props.artwork.imageUrl) {
      return <MImage url={this.props.artwork.imageUrl} />;
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
              minHeight: 300,
              minWidth: 400,
            }}
          >
            {this.renderImage()}
          </div>
          <div className="art-content-container">
            {artwork.description ? (
              <div className="art-description">{artwork.description}</div>
            ) : (
              <div className=""></div>
            )}

            <div className="art-content">
              <span className="card-title">{artwork.title}</span>
              <span
                className="subContent"
                style={{ textTransform: "capitalize" }}
              >
                {artwork.type.toLowerCase()}
              </span>
              <span className="subContent">{artwork.size}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ artworks }, ownProps) {
  return { artwork: artworks[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchArtwork })(ArtworkPage);
