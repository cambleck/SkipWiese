import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../../actions";

import {
  SubmitButton,
  DeleteButton,
  TitleInput,
  ImageInput,
  SizeInput,
  TypePicker,
  DescriptionInput,
  FeaturedCheckbox,
} from "./formComponents";
import M from "materialize-css";

class CreateNewModal extends Component {
  state = {
    imageFile: this.props.editMode ? this.props.artwork.imageUrl : "",

    title: this.props.editMode ? this.props.artwork.title : "",
    type: this.props.editMode ? this.props.artwork.type : "",
    typeLabel: this.props.editMode ? this.props.artwork.typeLabel : "",
    height: this.props.editMode ? this.props.artwork.height : "",
    width: this.props.editMode ? this.props.artwork.width : "",
    description: this.props.editMode ? this.props.artwork.description : "",
    isFeatured: this.props.isFeatured ? this.props.artwork.isFeatured : false,
  };

  componentDidMount() {
    M.AutoInit();
  }

  handleDelete = (imageUrl, id) => {
    this.props.deleteArtwork(imageUrl, id);
  };

  handleSubmit = () => {
    console.log(this.state);

    const {
      title,
      type,
      typeLabel,
      height,
      width,
      description,
      imageFile,
    } = this.state;
    const formValues = {
      title: title,
      type: type,
      typeLabel: typeLabel,
      height: height,
      width: width,
      description: description,
    };

    this.props.submitArtwork(formValues, imageFile, this.props.history);
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

  handleFeatureChange = () => {
    this.setState({ isFeatured: !this.state.isFeatured });
  };

  render() {
    const {
      imageFile,
      selectedImage,
      title,
      type,
      typeLabel,
      width,
      height,
      description,
      isFeatured,
    } = this.state;
    const { editMode, artwork, handleDelete } = this.props;
    console.log(isFeatured);
    return (
      <div id="artworkModal" className="modal">
        <div className="flex-center" style={{ marginBottom: 20 }}>
          <h5>{editMode ? "EDIT ARTWORK" : "NEW ARTWORK"}</h5>
        </div>
        <ImageInput
          onChange={this.handleSelectedImageFile}
          editMode={editMode}
          imageUrl={this.props.artwork.imageUrl}
        />

        <TitleInput
          value={title}
          onChange={this.handleTitleChange}
          editMode={editMode}
        />
        <TypePicker
          selectedValue={editMode && `${type}${typeLabel}`}
          onChange={this.handleTypeChange}
        />
        <SizeInput
          widthValue={width}
          widthOnChange={this.handleWidthChange}
          heightValue={height}
          heightOnChange={this.handleHeightChange}
          editMode={editMode}
        />
        <DescriptionInput
          value={description}
          onChange={this.handleDescriptionChange}
          editMode={editMode}
        />
        <FeaturedCheckbox
          value={isFeatured}
          onChange={this.handleFeatureChange}
        />
        <div
          className="flex-center"
          style={{ justifyContent: "space-between" }}
        >
          {editMode ? (
            <DeleteButton
              handleDelete={() =>
                this.handleDelete(
                  this.props.artwork.imageUrl,
                  this.props.artwork._id
                )
              }
            />
          ) : (
            <div></div>
          )}
          <SubmitButton
            handleSubmit={() => this.handleSubmit()}
            editMode={editMode}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, actions)(withRouter(CreateNewModal));
