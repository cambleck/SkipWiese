import _ from "lodash";
import React, { Component } from "react";
import M from "materialize-css";

const options = {
  padding: 100,
  shift: 200,
  numVisible: 3,
  duration: 400,
};

class Carousel extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".carousel");
      var instances = M.Carousel.init(elems, options);
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
            marginTop: 20,
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
