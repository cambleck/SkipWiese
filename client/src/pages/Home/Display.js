import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import M from "materialize-css";
import Lightbox from "../../common/Lightbox";
import Loading from "../../common/Loading";
import { clearList, fetchArtworkList } from "../../actions";

const renderList = (list) => {
  return _.map(list, ({ imageUrl, caption, box }) => {
    return (
      <img
        src={"https://skipwiese.s3.us-east-2.amazonaws.com/" + imageUrl}
        className="home-image"
        alt={caption}
      />
    );
  });
};

class Display extends React.Component {
  state = {
    loading: true,
  };
  componentDidMount() {
    this.props.clearList();
    this.props
      .fetchArtworkList("featured")
      .then(() => this.setState({ loading: false }));
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <Loading />
        ) : (
          <Lightbox>
            <div className="grid">{renderList(this.props.artworkList)}</div>
          </Lightbox>
        )}
      </>
    );
  }
}

function mapStateToProps({ artworkList }) {
  return { artworkList };
}

export default connect(mapStateToProps, {
  fetchArtworkList,
  clearList,
})(Display);
