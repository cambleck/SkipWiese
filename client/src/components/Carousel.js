import _ from "lodash";
import React, { Component } from "react";
import M from "materialize-css";

// custom options for Carousel
const options = {
  padding: 100,
  shift: 200,
  numVisible: 3,
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
        <a key={type} className="carousel-item">
          <div className="flex-center">
            <img className=" carousel-image" src={image} alt={type} />
          </div>
        </a>
      );
    });
  }
  render() {
    return <div className="carousel">{this.renderImages()}</div>;
  }
}

export default Carousel;
