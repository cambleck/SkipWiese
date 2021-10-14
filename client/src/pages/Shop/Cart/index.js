import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { removeFromCart } from "../../../redux/actions";
import M from "materialize-css";
import CartItem from "./CartItem";
import PaymentModal from "../Stripe";

const CartList = ({ list, removeFromCart }) => {
  return _.map(
    list,
    ({ title, price, imageUrl, typeLabel, height, width, _id }) => {
      return (
        <CartItem
          title={title}
          image={imageUrl}
          price={price}
          size={`${height} x ${width}`}
          typeLabel={typeLabel}
          id={_id}
          onRemoveItemClick={removeFromCart}
        />
      );
    }
  );
};

class CartModal extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }

  removeFromCart = (id) => {
    this.props.removeFromCart(id);
  };

  cartTotal = () => {
    const { cart } = this.props;
    var total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price;
    }
    return total;
  };

  render() {
    return (
      <div id="cart-modal" class="modal bottom-sheet">
        <button
          className="clear-icon-btn modal-close"
          style={{ position: "absolute", top: 10, right: 20 }}
        >
          <i className="material-icons ">cancel</i>
        </button>
        <div class="modal-content flex-center column">
          <div
            className="flex-center"
            style={{ position: "relative", width: "100%", maxWidth: 600 }}
          >
            <h5>SHOPPING CART</h5>
          </div>
          <div
            style={{
              border: "1px solid rgba(100,100,100,.2)",
              borderRadius: 10,
              padding: 15,
              marginBottom: 20,
              marginTop: 0,
              width: "100%",
              maxWidth: 600,
              textAlign: "center",
            }}
            className="flex-center"
          >
            <div>
              All artwork is currently being sold for pickup only in{" "}
              <b style={{ width: "100%" }}>Waukegan, IL.</b> Exact location and
              pickup time will be arranged when order is confirmed. Please{" "}
              <a
                style={{ textDecoration: "underline", color: "black" }}
                href="mailto:cbleck@comcast.net"
              >
                email
              </a>{" "}
              if you have any questions. (Delivery can be arranged)
            </div>
          </div>
          <div className="flex-center column" style={{ width: "100%" }}>
            {this.props.cart.length > 0 ? (
              <div
                className="flex-center column"
                style={{ width: "100%", maxWidth: 600 }}
              >
                <CartList
                  list={this.props.cart}
                  removeFromCart={this.removeFromCart}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    width: "100%",
                    marginRight: 20,
                    marginTop: 5,
                  }}
                >
                  Subtotal ({this.props.cart.length} item
                  {this.props.cart.length > 1 && "s"}): ${this.cartTotal()}
                </div>
              </div>
            ) : (
              <div style={{ margin: 10 }}>NO ARTWORK IN CART</div>
            )}
          </div>
          <button
            class={`yellow-action-btn modal-trigger${
              this.props.cart.length === 0 ? "disabled" : ""
            }`}
            disabled={this.props.cart.length === 0 && true}
            style={{ marginTop: 30 }}
            href="#stripe"
          >
            Continue →
          </button>
          <PaymentModal total={this.cartTotal()} />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ cart }) {
  return { cart };
}

export default connect(mapStateToProps, {
  removeFromCart,
})(CartModal);
