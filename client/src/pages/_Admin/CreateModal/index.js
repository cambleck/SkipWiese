import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../../actions";
import typeList from "./typeList";
import M from "materialize-css";

const SubmitButton = ({ handleSubmit }) => {
  return (
    <div className="flex-center" style={{ justifyContent: "flex-end" }}>
      <button
        onClick={handleSubmit}
        className="modal-close"
        style={{
          background: "rgb(255,240,100)",
          border: "1px solid black",
          borderRadius: 5,
          width: 150,
          height: 40,
          cursor: "pointer",
          fontWeight: "bold",

          marginTop: 20,
        }}
      >
        SUBMIT{" "}
      </button>
    </div>
  );
};

class CreateNewModal extends Component {
  state = {
    imageFile: "",
    title: "",
    type: "",
    typeLabel: "",
    height: "",
    width: "",
    description: "",
  };

  componentDidMount() {
    M.AutoInit();
  }

  onHandleSubmit = () => {
    console.log(this.state);
    const formValues = {
      title: this.state.title,
      type: this.state.type,
      typeLabel: this.state.typeLabel,
      height: this.state.height,
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
      typeLabel: "",
      height: "",
      width: "",
      description: "",
    });
  };

  handleSelectedImageFile = (event) => {
    this.setState({
      imageFile: event.target.files[0],
    });
  };
  handleSelectedImageFile = (event) => {
    this.setState({
      imageFile: event.target.files[0],
    });
  };

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };
  handleTypeChange = (event) => {
    var res = event.target.value.split("|");

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
        <label htmlFor="title">Title</label>
      </div>
    );
  }

  renderTypeOptions() {
    return _.map(typeList, ({ value, label }) => {
      return (
        <option value={`${value}|${label}`} key={label}>
          ({value}) - {label}
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
          maxWidth: 200,
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
      <div style={{ paddingTop: 10 }}>
        <label className="textInput-label">Add Image</label>
        <div style={{ paddingTop: 10 }}>
          <input
            type="file"
            accept="image/*"
            onChange={this.handleSelectedImageFile}
            style={{ marginLeft: 10 }}
          />
        </div>
      </div>
    );
  }

  widthInput() {
    return (
      <div className="input-field col s2" style={{ marginRight: 5 }}>
        <input
          id="width"
          type="text"
          value={this.state.width}
          onChange={this.handleWidthChange}
        />
        <label htmlFor="width">Width</label>
      </div>
    );
  }
  heightInput() {
    return (
      <div className="input-field col s6">
        <input
          id="height"
          type="text"
          value={this.state.height}
          onChange={this.handleHeightChange}
        />
        <label htmlFor="height">Height</label>
      </div>
    );
  }
  sizeInput() {
    return (
      <div className="flex-center" style={{ justifyContent: "flex-start" }}>
        {this.widthInput()}
        {this.heightInput()}
      </div>
    );
  }

  descriptionInput() {
    return (
      <div className="input-field col s6">
        <input
          id="description"
          type="text"
          value={this.state.description}
          onChange={this.handleDescriptionChange}
        />
        <label htmlFor="description">Description</label>
      </div>
    );
  }

  render() {
    const { imageFile, selectedImage } = this.state;
    const { type } = this.props;
    return (
      <div id={`modal-${type}`} className="modal">
        <div className="flex-center" style={{ marginBottom: 20 }}>
          <h5>NEW ARTWORK</h5>
        </div>
        {this.imageInput()}
        {this.titleInput()}
        {this.typePicker()}
        {this.sizeInput()}
        {this.descriptionInput()}
        <SubmitButton handleSubmit={() => this.onHandleSubmit()} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, actions)(withRouter(CreateNewModal));
