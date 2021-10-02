import React from "react";

const CartItem = ({ title, image, size, typeLabel, _id, price }) => {
  return (
    <a
      className="list-item black-text"
      key={_id}
      style={{
        width: "100%",
        border: "1px solid rgba(0,0,0,.1)",
        borderRadius: 2,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "90%",

            textOverflow: "ellipsis",

            overflow: "hidden",
          }}
        >
          <img
            src={"https://skipwiese.s3.us-east-2.amazonaws.com/" + image}
            alt=""
            className="list-image"
          />
          <div className="list-title">
            <div
              style={{
                fontWeight: "bold",

                fontSize: 13,

                textAlign: "left",
              }}
            >
              {title && title}
            </div>
            <div style={{ fontSize: 12, color: "rgb(60, 64, 66)" }}>
              {typeLabel ? typeLabel : ""} {size && `(${size})`}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "15%",
            margin: 0,
          }}
        >
          ${price}
        </div>
      </div>
    </a>
  );
};

export default CartItem;
