import { useState, useEffect } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import M from "materialize-css";
import Lightbox from "../../common/Lightbox";
import Loading from "../../common/Loading";
import { clearList, fetchArtworkList } from "../../redux/actions";

function renderList(list) {
  return _.map(list, ({ imageUrl, title }) => {
    return (
      <>
        <img
          src={"https://skipwiese.s3.us-east-2.amazonaws.com/" + imageUrl}
          className="home-image"
          alt={title}
          key={imageUrl}
        />
      </>
    );
  });
}

function ImageGrid({ clearList, fetchArtworkList, artworkList }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArtworkList("featured").then(() => setLoading(false));
  });

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid">{renderList(artworkList)}</div>
      )}
    </>
  );
}

function mapStateToProps({ artworkList }) {
  return { artworkList };
}

export default connect(mapStateToProps, {
  fetchArtworkList,
  clearList,
})(ImageGrid);
