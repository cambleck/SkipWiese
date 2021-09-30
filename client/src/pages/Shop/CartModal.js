import React from "react";
import M from "materialize-css";

class CartModal extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div id="cart-modal" class="modal bottom-sheet">
        <div class="modal-content">
          <h5>CART</h5>
          <p>A bunch of text</p>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-close waves-effect waves-green btn-flat">
            CHECKOUT
          </a>
        </div>
      </div>
    );
  }
}

export default CartModal;
