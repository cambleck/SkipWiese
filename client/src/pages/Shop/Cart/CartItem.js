import React from "react";

const CartItem = ({
  title,
  image,
  size,
  typeLabel,
  id,
  price,
  onRemoveItemClick,
}) => {
  return (
    <a
      className="list-item black-text"
      key={id}
      style={{
        width: "100%",
        border: "1px solid rgba(0,0,0,.1)",
        borderRadius: 2,
        postion: "relative",
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
            width: "85%",

            textOverflow: "ellipsis",

            overflow: "hidden",
          }}
        >
          <div className="flex-center column">
            <img
              src={"https://skipwiese.s3.us-east-2.amazonaws.com/" + image}
              alt=""
              className="list-image"
            />
            <button
              className="clear-icon-btn flex-center"
              style={{
                padding: 0,
                marginTop: -5,
                marginBottom: 5,
                fontSize: 12,
              }}
              onClick={() => onRemoveItemClick(id)}
            >
              Remove
            </button>
          </div>
          <div className="list-title">
            <a
              style={{
                fontWeight: "bold",
                fontSize: 13,
                textOverflow: "ellipsis",
                textAlign: "left",
              }}
              className="hyperlink black-text"
              href={`./${id}`}
            >
              {title && title}
            </a>
            <div
              style={{
                fontSize: 12,
                color: "rgb(60, 64, 66)",
                display: "flex",
                alignItems: "center",
                marginTop: -3,
                color: "rgba(60,60,60,.9)",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              <div>
                {typeLabel ? typeLabel : ""} {size && `(${size})`}
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginRight: 10 }}>${price}</div>
      </div>
    </a>
  );
};

export default CartItem;
