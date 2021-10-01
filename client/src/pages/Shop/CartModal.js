import React from "react";
import M from "materialize-css";

class CartModal extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div id="cart-modal" class="modal bottom-sheet">
        <div class="modal-content flex-center column">
          <h5>CART</h5>

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
          <a href="#!" class="modal-close addToCart-btn">
            CHECKOUT
          </a>
        </div>
      </div>
    );
  }
}

export default CartModal;
