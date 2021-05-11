import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchListView } from "../../actions";

const renderList = (list) => {
  return _.map(list, ({ title, imageUrl, size, type, _id }) => {
    console.log(_id);
    return (
      <li class="collection-item avatar">
        <img
          src={"https://skipwiese.s3.us-east-2.amazonaws.com/" + imageUrl}
          alt=""
          class="circle"
        />
        <span class="title" style={{ fontWeight: "bold" }}>
          {title}
        </span>
        <p style={{ textTransform: "capitalize" }}>
          {type ? type.toLowerCase() : ""}
          <br></br>
          {size}
        </p>
        <a href={`gallery/a/${_id}`} class="secondary-content">
          <i
            class="material-icons black-text"
            style={{ textShadow: "0px 0px 1px white" }}
          >
            arrow_forward
          </i>
        </a>
      </li>
    );
  });
};

const renderPanel = () => {
  return <div className="list-panel"> </div>;
};

class ListView extends React.Component {
  componentDidMount() {
    this.props.fetchListView();
    console.log(this.props.artworks);
  }
  render() {
    return (
      <div className="container">
        {renderPanel()}
        <ul class="collection">{renderList(this.props.artworks)}</ul>
      </div>
    );
  }
}

function mapStateToProps({ artworks }, ownProps) {
  return { artworks };
}

export default connect(mapStateToProps, { fetchListView })(ListView);
