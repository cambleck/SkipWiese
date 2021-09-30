import React from "react";
import M from "materialize-css";

class ShopArtworkInfoModal extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div id="shop-artwork-info-modal" class="shop-artwork-info-modal modal">
        <div class="modal-content">
          <h4>Cosmos</h4>
          <p>A bunch of text</p>
        </div>
        <div style={{ margin: 10 }}>
          All artwork is unframed, unmatted, and available for pickup only.
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-close waves-effect waves-green btn-flat">
            ADD TO CART
          </a>
        </div>
      </div>
    );
  }
}

export default ShopArtworkInfoModal;
