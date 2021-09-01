import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../../actions";

import {
  SubmitButton,
  TitleInput,
  ImageInput,
  SizeInput,
  TypePicker,
  DescriptionInput,
} from "./formComponents";
import M from "materialize-css";

class CreateNewModal extends Component {
  state = {
    imageFile: "",
    thumbnailFile: "",
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
      thumbnailFile: "",
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
  handleSelectedThumbnailFile = (event) => {
    this.setState({
      thumbnailFile: event.target.files[0],
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

  render() {
    const {
      imageFile,
      selectedImage,
      title,
      width,
      height,
      description,
    } = this.state;
    const { editMode } = this.props;
    return (
      <div id="artworkModal" className="modal">
        <div className="flex-center" style={{ marginBottom: 20 }}>
          <h5>{editMode ? "EDIT ARTWORK" : "NEW ARTWORK"}</h5>
        </div>
        <ImageInput
          onChange={this.handleSelectedImageFile}
          editMode={editMode}
        />

        <TitleInput value={title} onChange={this.handleTitleChange} />
        <TypePicker onChange={this.handleTypeChange} />
        <SizeInput
          widthValue={width}
          widthOnChange={this.handleWidthChange}
          heightValue={height}
          heightOnChange={this.handleHeightChange}
        />
        <DescriptionInput
          value={description}
          onChange={this.handleDescriptionChange}
        />
        <SubmitButton handleSubmit={() => this.onHandleSubmit()} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, actions)(withRouter(CreateNewModal));
