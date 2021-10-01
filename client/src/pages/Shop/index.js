import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import MetaInfo from "../../common/MetaInfo";
import ShoppingCartIcon from "./ShoppingCartIcon";
import Loading from "../../common/Loading";
import { clearList, fetchArtworkList } from "../../redux/actions";
import ShopCard from "./ShopCard";
import AddToCartModal from "./AddToCartModal";
import CartModal from "./CartModal";

const ShopList = ({ list, onSelectedItem }) => {
  return _.map(list, (item) => {
    return <ShopCard item={item} onSelected={onSelectedItem} />;
  });
};

class Shop extends React.Component {
  state = {
    loading: true,
    selectedItem: "",
  };

  componentDidMount() {
    this.props.clearList();
    this.props
      .fetchArtworkList("shop")
      .then(() => this.setState({ loading: false }));
  }

  onSelectedItem = (item) => {
    this.setState({ selectedItem: item });
  };

  render() {
    const { selectedItem } = this.state;
    return (
      <div className="flex-center ">
        <ShoppingCartIcon />
        <MetaInfo title="Shop | Skip Wiese" />
        {this.state.loading ? (
          <Loading />
        ) : (
          <div className="grid" style={{ marginTop: 10 }}>
            <ShopList
              list={this.props.artworkList}
              onSelectedItem={this.onSelectedItem}
            />
            <AddToCartModal item={selectedItem} />
            <CartModal />
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
