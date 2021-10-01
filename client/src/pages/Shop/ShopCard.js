import React from "react";

const ShoppingCard = ({ item, onSelected }) => {
  return (
    <a
      class="shop-card modal-trigger black-text"
      href="#addToCart"
      onClick={() => onSelected(item)}
    >
      <img
        src={"https://skipwiese.s3.us-east-2.amazonaws.com/" + item.imageUrl}
        className="shop-card-image"
      />
      <div style={{ padding: 3 }}>
        <b>{item.title}</b>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: 12 }}>${item.price}</div>
        </div>
      </div>
    </a>
  );
};

export default ShoppingCard;
