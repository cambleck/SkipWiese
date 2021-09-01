import React, { Component } from "react";
import map from "lodash/map";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchArtwork, fetchUser } from "../../actions";
import ArtCard from "./ArtCard";
import ArtworkModal from "../_Admin/ArtworkModal/";
import MetaInfo from "../../common/MetaInfo";
const EditButton = () => {
  return (
    <>
      <a
        className="waves-effect waves-light btn modal-trigger yellow black-text flex-center"
        href="#modal-new"
        style={{ marginBottom: 20, position: "fixed", bottom: 20, right: 20 }}
      >
        Edit
        <i class="material-icons" style={{ margin: 5 }}>
          edit
        </i>
      </a>
      <ArtworkModal />
    </>
  );
};

class ArtworkPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchArtwork(this.props.match.params.id);
    this.props.fetchUser();
  }

  render() {
    if (!this.props.artwork) {
      return "";
    }
    return (
      <div className="flex-center column">
        <MetaInfo title={`${this.props.artwork.title} | Skip Wiese`} />

        {this.props.auth && <EditButton />}
        <ArtCard artwork={this.props.artwork} noLink="true" />
      </div>
    );
  }
}

function mapStateToProps({ artworkList, auth }, ownProps) {
  return { artwork: artworkList[ownProps.match.params.id], auth };
}

export default connect(mapStateToProps, { fetchArtwork, fetchUser })(
  ArtworkPage
);
