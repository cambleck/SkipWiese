import _ from "lodash";
import React, { Component } from "react";
import M from "materialize-css";

const options = {
  duration: 400,
  indicators: true,
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
            <img className=" carousel-image" src={image} alt={type} />
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
