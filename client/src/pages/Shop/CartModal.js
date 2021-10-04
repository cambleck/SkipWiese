import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/actions";
import M from "materialize-css";
import CartItem from "./CartItem";

const renderCartList = (list) => {
  return _.map(list, ({ title, price, imageUrl, typeLabel, height, width }) => {
    return (
      <CartItem
        title={title}
        image={imageUrl}
        price={price}
        size={`${height} x ${width}`}
        typeLabel={typeLabel}
      />
    );
  });
};

class CartModal extends React.Component {
  state = {
    deleteMode: false,
  };

  componentDidMount() {
    M.AutoInit();
  }

  onDeleteModeClick = () => {
    this.setState({ deleteMode: !this.state.deleteMode });
  };
  render() {
    const { deleteMode } = this.state;
    return (
      <div id="cart-modal" class="modal bottom-sheet">
        <div class="modal-content flex-center column">
          <div
            className="flex-center"
            style={{ position: "relative", width: "100%", maxWidth: 600 }}
          >
            <h5>CART</h5>
            {this.props.cart.length > 0 && (
              <button
                className="clear-icon-btn"
                style={{ position: "absolute", top: 20, right: 20 }}
                onClick={() => this.onDeleteModeClick()}
              >
                {!deleteMode ? (
                  <i className="material-icons">remove_circle_outline</i>
                ) : (
                  <b>Done</b>
                )}
              </button>
            )}
          </div>
          <div
            className="flex-center column"
            style={{ width: "100%", maxWidth: 600 }}
          >
            {this.props.cart.length > 0 ? (
              renderCartList(this.props.cart)
            ) : (
              <div style={{ margin: 10 }}>NO ARTWORK IN CART</div>
            )}
          </div>
          <div
            style={{
              border: "1px solid rgba(100,100,100,.2)",
              borderRadius: 10,
              padding: 15,
              marginTop: 20,
              width: "100%",
              maxWidth: 600,
              textAlign: "center",
            }}
            className="flex-center"
          >
            <div>
              All artwork is currently being sold unframed and for pickup only
              in <b style={{ width: "100%" }}>Waukegan, IL.</b> Exact location
              and pickup time will be arranged when order is confirmed. Please{" "}
              <a
                style={{ textDecoration: "underline", color: "black" }}
                href="mailto:cbleck@comcast.net"
              >
                email
              </a>{" "}
              if you have any questions.
            </div>
          </div>
          <button
            class={`modal-close action-btn ${
              this.props.cart.length === 0 ? "disabled" : ""
            }`}
            disabled={this.props.cart.length === 0 && true}
          >
            CHECKOUT
          </button>
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
