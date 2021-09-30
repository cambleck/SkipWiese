import React from "react";

const ShoppingCartIcon = () => {
  return (
    <a
      className="shopping-cart-button modal-trigger black-text"
      href="#cart-modal"
    >
      Cart
      <i className="material-icons" style={{ fontSize: 26, marginLeft: 5 }}>
        shopping_cart
      </i>
    </a>
  );
};

export default ShoppingCartIcon;
