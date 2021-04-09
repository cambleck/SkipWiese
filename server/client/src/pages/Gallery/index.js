import React from "react";
import M from "materialize-css";
import Barns from "../../assets/images/pastels/Barns.JPG";
import Wysteria from "../../assets/images/pastels/Wisteria VII.JPG";

class Gallery extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div
        style={{
          marginTop: 15,
          display: "flex",
          background: "rgb(255,253,250)",
        }}
      >
        <div>
          <div
            style={{
              border: "8px solid rgb(32,12,38)",
              width: 400,
              height: 300,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "4px 5px 3px rgba(50,50,50,.5)",
            }}
          >
            <img
              class="materialboxed"
              src={Barns}
              style={{
                width: 316,
                height: 231,
                border: "7px solid rgb(240,240,230)",
              }}
              alt="Barns"
              data-caption="A picture of a way with a group of trees in a park"
            />
          </div>
          <div style={{ marginTop: 20, marginLeft: 10 }}>Barns | Pastel </div>
        </div>
        <div style={{ marginLeft: 40 }}>
          <div
            style={{
              border: "8px solid rgb(32,12,38)",
              width: 400,
              height: 300,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "4px 5px 3px rgba(50,50,50,.5)",
            }}
          >
            <img
              class="materialboxed"
              src={Wysteria}
              style={{
                width: 316,
                height: 231,
                border: "7px solid rgb(240,240,230)",
              }}
              alt="Barns"
              data-caption="A picture of a way with a group of trees in a park"
            />
          </div>
          <div style={{ marginTop: 20, marginLeft: 10 }}>Wysteia | Pastel </div>
        </div>
      </div>
    );
  }
}
export default Gallery;
