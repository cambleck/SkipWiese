import React from "react";

const ShoppingCard = ({ title, image, price }) => {
  return (
    <div className="shop-card">
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
          <div>${price}.00</div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
