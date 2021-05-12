import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../../actions";
import typeList from "../../typeList";

class ArtworkForm extends Component {
  state = {
    imageFile: "",
    title: "",
    type: "",
    typeLabel: "",
    height: "",
    width: "",
    description: "",
  };

  handleSubmit = () => {
    const formValues = {
      title: this.state.title,
      type: this.state.type,
      width: this.state.width,
      description: this.state.description,
    };

    this.props.submitArtwork(
      formValues,
      this.state.imageFile,
      this.props.history
    );
    this.setState({
      imageFile: "",
      title: "",
      type: "",
      width: "",
      description: "",
    });
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
    var res = event.target.value.split(".");
    this.setState({ type: res[0], typeLabel: res[1] });
  };
  handleWidthChange = (event) => {
    this.setState({ width: event.target.value });
  };
  handleHeightChange = (event) => {
    this.setState({ height: event.target.value });
  };
  handleDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
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
          className="validate"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <label for="title">Title</label>
      </div>
    );
  }

  renderTypeOptions() {
    return _.map(typeList, ({ value, label }) => {
      return (
        <option value={`${value}|${label}`}>
          {value} - {label}
        </option>
      );
    });
  }

  typePicker() {
    return (
      <select
        className="browser-default"
        style={{
          background: "transparent",
          border: "none",
          bottomBorder: "1px solid black",
          outline: "none",
        }}
        onChange={this.handleTypeChange}
      >
        <option value="no-type">no type</option>
        {this.renderTypeOptions()}
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

  widthInput() {
    return (
      <div className="input-field col s6">
        <input
          id="width"
          type="text"
          className="validate"
          value={this.state.width}
          onChange={this.handleWidthChange}
        />
        <label for="width">Width</label>
      </div>
    );
  }
  heightInput() {
    return (
      <div className="input-field col s6">
        <input
          id="height"
          type="text"
          className="validate"
          value={this.state.height}
          onChange={this.handleHeightChange}
        />
        <label for="height">Height</label>
      </div>
    );
  }

  descriptionInput() {
    return (
      <div className="input-field col s6">
        <input
          id="description"
          type="text"
          className="validate"
          value={this.state.description}
          onChange={this.handleDescriptionChange}
        />
        <label for="description">Description</label>
      </div>
    );
  }

  submitButton() {
    return <button onClick={() => this.handleSubmit()}> Submit</button>;
  }

  render() {
    const { imageFile, selectedImage } = this.state;
    return (
      <div className="col s12" style={{ maxWidth: 500, marginBottom: 200 }}>
        {this.displayImage()}
        {this.imageInput()}
        {this.titleInput()}
        {this.typePicker()}
        {this.heightInput()}
        {this.widthInput()}
        {this.descriptionInput()}
        {this.submitButton()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, actions)(withRouter(ArtworkForm));
