import React from "react";

const ShoppingCard = ({ item, onSelected }) => {
  return (
    <a
      class="type-card modal-trigger black-text"
      href="#addToCart"
      onClick={() => onSelected(item)}
    >
      <img
        src={"https://skipwiese.s3.us-east-2.amazonaws.com/" + item.imageUrl}
        className="type-image"
      />
      <div style={{ paddingBottom: 15, paddingTop: 5, paddingLeft: 10 }}>
        <div className="shop-card-title">{item.title}</div>

        <div style={{ paddingLeft: 5 }}>${item.price}</div>
      </div>
    </a>
  );
};

export default ShoppingCard;
