import { useEffect } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions";
import M from "materialize-css";

function AddToCartModal({ addToCart, cart, item }) {
  useEffect(() => {
    M.AutoInit();
  }, []);

  function itemAlreadyInCart(id) {
    var list;

    list = cart.filter((item) => item._id === id);
    if (list.length > 0) {
      return true;
    }
    return false;
  }

  function onAddToCart() {
    addToCart(item);
    M.toast({ html: "Added to Cart", classes: "toast" });
  }

  return (
    <div id="addToCart" class="addToCart-modal modal">
      <button
        className="clear-icon-btn modal-close"
        style={{ position: "absolute", top: 5, right: 5 }}
      >
        <i className="material-icons ">cancel</i>
      </button>
      <div class="modal-content addToCartModal-content">
        <img
          src={"https://skipwiese.s3.us-east-2.amazonaws.com/" + item.imageUrl}
          className="addToCart-image"
        />

        <a href={`/${item._id}`} style={{ color: "black" }}>
          <h5 style={{ fontWeight: "bold", marginBottom: 5 }}>{item.title}</h5>
        </a>
        <div>
          {item.typeLabel} ({item.height}" x {item.width}")
        </div>
        <div style={{ marginTop: -3 }}>{item.saleDescription}</div>
        <div style={{ fontSize: 20, marginBottom: 30 }}>${item.price}</div>
        {itemAlreadyInCart(item._id) ? (
          <button class="modal-close yellow-action-btn" disabled>
            IN CART
          </button>
        ) : (
          <button
            class="modal-close yellow-action-btn"
            onClick={() => onAddToCart()}
          >
            + ADD TO CART
          </button>
        )}
      </div>
    </div>
  );
}

function mapStateToProps({ cart }) {
  return { cart };
}

export default connect(mapStateToProps, {
  addToCart,
})(AddToCartModal);
