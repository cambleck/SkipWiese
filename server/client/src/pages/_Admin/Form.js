import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import ArtworkField from "./ArtworkField";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

class ArtworkForm extends Component {
  state = {
    imageFile: "",
    title: "",
    type: "",
    size: "",
    price: "",
  };

  handleSubmit = () => {
    const formValues = {
      title: this.state.title,
      type: this.state.type,
      size: this.state.size,
      price: this.state.price,
    };

    this.props.submitArtwork(formValues, this.state.imageFile);
  };

  handleSelectedFile = (event) => {
    this.setState({
      imageFile: event.target.files[0],
    });
  };

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };
  handleTypeChange = (event) => {
    this.setState({ type: event.target.value });
  };
  handleSizeChange = (event) => {
    this.setState({ size: event.target.value });
  };
  handlePriceChange = (event) => {
    this.setState({ price: event.target.value });
  };

  displayImage() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <img
          className="add-image"
          src={this.state.imageFile}
          alt="add an image"
        />
        4:3
      </div>
    );
  }

  titleInput() {
    return (
      <div className="input-field col s6">
        <input
          id="title"
          type="text"
          class="validate"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <label for="title">Title</label>
      </div>
    );
  }

  typePicker() {
    return (
      <select
        class="browser-default"
        style={{
          background: "transparent",
          border: "none",
          bottomBorder: "1px solid black",
          outline: "none",
        }}
        onChange={this.handleTypeChange}
      >
        <option value="">Type</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
    );
  }

  imageInput() {
    return (
      <div className="adminInput">
        <label className="textInput-label">Add Image</label>
        <div style={{ paddingTop: 10 }}>
          <input
            type="file"
            accept="image/*"
            onChange={this.handleSelectedFile}
            style={{ marginLeft: 10, fontFamily: "monospace" }}
          />
        </div>
      </div>
    );
  }

  sizeInput() {
    return (
      <div className="input-field col s6">
        <input
          id="size"
          type="text"
          class="validate"
          value={this.state.size}
          onChange={this.handleSizeChange}
        />
        <label for="size">Size</label>
      </div>
    );
  }

  priceInput() {
    return (
      <div className="input-field col s6">
        <input
          id="price"
          type="text"
          class="validate"
          value={this.state.price}
          onChange={this.handlePriceChange}
        />
        <label for="price">Price</label>
      </div>
    );
  }

  submitButton() {
    return <button onClick={() => this.handleSubmit()}> Submit</button>;
  }

  render() {
    const { imageFile, selectedImage } = this.state;
    return (
      <div class="col s12" style={{ maxWidth: 500, marginBottom: 200 }}>
        {this.displayImage()}
        {this.imageInput()}
        {this.titleInput()}
        {this.typePicker()}
        {this.sizeInput()}
        {this.priceInput()}
        {this.submitButton()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, actions)(withRouter(ArtworkForm));
