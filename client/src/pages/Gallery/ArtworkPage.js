import React, { useEffect } from "react";
import map from "lodash/map";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchArtwork, fetchUser, deleteArtwork } from "../../redux/actions";
import ArtworkCard from "./ArtworkCard";
import ArtworkModal from "../_Admin/ArtworkModal/";
import MetaInfo from "../../common/MetaInfo";
import Loading from "../../common/Loading";

const EditArtworkButton = ({ artwork }) => {
  return (
    <>
      <a
        className="waves-effect waves-light btn modal-trigger action-btn flex-center"
        href="#artworkModal"
        style={{ marginBottom: 20, position: "fixed", bottom: 20, right: 20 }}
      >
        Edit
        <i className="material-icons" style={{ margin: 5 }}>
          edit
        </i>
      </a>
      <ArtworkModal editMode="true" artwork={artwork} />
    </>
  );
};

function ArtworkPage({ fetchArtwork, fetchUser, artwork, auth }) {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchArtwork(id);
    fetchUser();
  }, []);

  if (!artwork) {
    return <Loading />;
  }
  return (
    <div className="flex-center column">
      <MetaInfo title={`${artwork.title} | Skip Wiese`} />

      {auth && <EditArtworkButton artwork={artwork} />}

      <ArtworkCard artwork={artwork} noLink="true" />
    </div>
  );
}

function mapStateToProps({ artworkList, auth }, ownProps) {
  return { artwork: artworkList[ownProps.match.params.id], auth };
}

export default connect(mapStateToProps, {
  fetchArtwork,
  fetchUser,
  deleteArtwork,
})(ArtworkPage);
