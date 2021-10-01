import React from "react";
import M from "materialize-css";

class AddToCartModal extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    const { item } = this.props;
    return (
      <div id="addToCart" class="addToCart-modal modal">
        <div class="modal-content addToCartModal-content flex-center column">
          <img
            src={
              "https://skipwiese.s3.us-east-2.amazonaws.com/" + item.imageUrl
            }
            className="addToCart-image"
          />
          <h5>{item.title}</h5>
          <div style={{ marginTop: -10 }}>
            {item.typeLabel} ({item.height} x {item.width})
          </div>
          <b style={{ fontSize: 18, margin: 10 }}>${item.price}</b>
          <a href="#!" class="modal-close addToCart-btn">
            + ADD TO CART
          </a>
        </div>
      </div>
    );
  }
}

export default AddToCartModal;
