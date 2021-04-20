import _ from "lodash";
import React, { Component } from "react";
import M from "materialize-css";

class Carousel extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".carousel");
      M.Carousel.init(elems, {
        padding: 100,
        shift: 200,
        numVisible: 3,
      });
    });
  }

  renderImages() {
    return _.map(this.props.imageList, ({ image, type }) => {
      return (
        <a
          key={type}
          className="carousel-item"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                border: "10px solid rgb(32,12,38)",
                boxShadow: "5px 7px 3px rgba(50,50,50,.5)",
              }}
            >
              <img
                className="materialboxed carousel-image"
                src={image}
                alt={type}
              />
            </div>
          </div>
        </a>
      );
    });
  }
  render() {
    return (
      <div className="carousel" style={{ height: 700 }}>
        {this.renderImages()}
      </div>
    );
  }
}

export default Carousel;
