import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../../actions";
import typeList from "./typeList";
import M from "materialize-css";

const SubmitButton = ({ handleSubmit }) => {
  console.log(handleSubmit);
  return (
    <div class="modal-footer">
      <a
        href=""
        class="waves-effect waves-green btn-flat"
        onClick={handleSubmit}
        style={{ background: "green", color: "white", borderRadius: 5 }}
      >
        SUBMIT
      </a>
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

  handleSelectedFile = (event) => {
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
        <label for="title">Title</label>
      </div>
    );
  }

  renderTypeOptions() {
    return _.map(typeList, ({ value, label }) => {
      return (
        <option value={`${value}|${label}`}>
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
      <div>
        <label className="textInput-label">Add Image</label>
        <div style={{ paddingTop: 10 }}>
          <input
            type="file"
            accept="image/*"
            onChange={this.handleSelectedFile}
            style={{ marginLeft: 10 }}
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
          value={this.state.description}
          onChange={this.handleDescriptionChange}
        />
        <label for="description">Description</label>
      </div>
    );
  }

  render() {
    const { imageFile, selectedImage } = this.state;
    const { type } = this.props;
    return (
      <div id={`modal-${type}`} class="modal" style={{ padding: 100 }}>
        {this.imageInput()}
        {this.titleInput()}
        {this.typePicker()}
        {this.heightInput()}
        {this.widthInput()}
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
