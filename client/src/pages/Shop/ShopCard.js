import React from "react";

const ShoppingCard = ({ title, image, price }) => {
  return (
    <a class="shop-card modal-trigger" href="#info-modal">
      <img
        src={"https://skipwiese.s3.us-east-2.amazonaws.com/" + image}
        className="shop-card-image"
      />
      <div style={{ padding: 3 }}>
        <b>{title}</b>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: 12 }}>${price}.00</div>
        </div>
      </div>
    </a>
  );
};

export default ShoppingCard;
