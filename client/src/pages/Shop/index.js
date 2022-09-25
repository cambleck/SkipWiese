import { useState, useEffect } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import MetaInfo from "../../common/MetaInfo";
import CartIcon from "./Cart/CartIcon";
import Loading from "../../common/Loading";
import { clearList, fetchArtworkList } from "../../redux/actions";
import ShopCard from "./ShopCard";
import AddToCartModal from "./AddToCartModal";
import Cart from "./Cart/";
import "./shop.css";

function ShopList({ list, onSelectedItem }) {
  return _.map(list, (item) => {
    return <ShopCard item={item} onSelected={onSelectedItem} />;
  });
}

function Shop({ clearList, fetchArtworkList, cart, artworkList }) {
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    clearList();
    fetchArtworkList("shop").then(() => setLoading(false));
  }, []);

  function onSelectedItem(item) {
    setSelectedItem(item);
  }

  return (
    <div className="flex-center ">
      <CartIcon numberOfItemsInCart={cart.length} />
      <MetaInfo title="Shop | Skip Wiese" />
      {/*{loading ? (
        <Loading />
      ) : (
        <div
          className="grid"
          style={{
            maxWidth: 1000,
            marginTop: 30,
            alignItems: "flex-start",
          }}
        >
          <ShopList list={artworkList} onSelectedItem={onSelectedItem} />

          <AddToCartModal item={selectedItem} />
          <Cart />
        </div>
        )}*/}
      <div style={{ marginTop: 100, fontSize: 50 }}>COMING SOON</div>
    </div>
  );
}

function mapStateToProps({ artworkList, cart }) {
  return { artworkList, cart };
}

export default connect(mapStateToProps, {
  fetchArtworkList,
  clearList,
})(Shop);
