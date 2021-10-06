import React from "react";

const ListItem = ({ title, image, size, typeLabel, _id }) => {
  return (
    <a href={`/${_id}`} className=" list-item black-text" key={_id}>
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
            <div style={{ fontSize: 12 }}>
              {typeLabel ? typeLabel : ""} {size && `(${size})`}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "10%",
            margin: 0,
          }}
        >
          <i
            className="material-icons black-text"
            style={{
              textShadow: "0px 0px 1px white",
            }}
          >
            chevron_right
          </i>
        </div>
      </div>
    </a>
  );
};

export default ListItem;
