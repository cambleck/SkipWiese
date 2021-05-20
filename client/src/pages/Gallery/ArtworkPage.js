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
    const {
      imageUrl,
      title,
      height,
      width,
      description,
      type,
      typeLabel,
      _id,
    } = artwork;
    const size = `${height} x ${width}`;
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

            maxWidth: "700px",
          }}
        >
          {this.renderImage()}

          <div className="art-content-container">
            {description ? (
              <div>
                <div className="art-description">{description}</div>
              </div>
            ) : (
              <div className=""></div>
            )}

            {!height && !title && !typeLabel ? (
              <></>
            ) : (
              <div>
                <div className="art-content">
                  <span className="card-title">{title}</span>
                  <span className="subContent">
                    {typeLabel ? typeLabel : ""}
                  </span>
                  <span className="subContent">{height && size}</span>
                </div>
              </div>
            )}
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
