import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import MetaInfo from "../../common/MetaInfo";
import ShoppingCartIcon from "./ShoppingCartIcon";
import Loading from "../../common/Loading";
import { clearList, fetchArtworkList } from "../../actions";
import ShopCard from "./ShopCard";

const renderList = (list) => {
  return _.map(list, ({ imageUrl, title, price }) => {
    return <ShopCard image={imageUrl} title={title} price={price} />;
  });
};

class Shop extends React.Component {
  state = {
    loading: true,
  };
  componentDidMount() {
    this.props.clearList();
    this.props
      .fetchArtworkList("shop")
      .then(() => this.setState({ loading: false }));
  }
  render() {
    return (
      <div className="flex-center ">
        <ShoppingCartIcon />
        <MetaInfo title="Shop | Skip Wiese" />
        {this.state.loading ? (
          <Loading />
        ) : (
          <div className="grid" style={{ marginTop: 10 }}>
            {renderList(this.props.artworkList)}
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ artworkList }) {
  return { artworkList };
}

export default connect(mapStateToProps, {
  fetchArtworkList,
  clearList,
})(Shop);
