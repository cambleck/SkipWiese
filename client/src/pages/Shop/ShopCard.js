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
        className="shop-card-image"
      />
      <div style={{ paddingBottom: 15, paddingTop: 5, paddingLeft: 10 }}>
        <div style={{ fontWeight: 700, maxWidth: 170, fontSize: 16 }}>
          {item.title}
        </div>

        <div style={{ fontSize: 14, paddingLeft: 5 }}>${item.price}</div>
      </div>
    </a>
  );
};

export default ShoppingCard;
