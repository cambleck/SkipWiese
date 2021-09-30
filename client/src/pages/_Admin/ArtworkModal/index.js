import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../../redux/actions";

import {
  SubmitButton,
  DeleteButton,
  TitleInput,
  UrlString,
  ImageInput,
  SizeInput,
  TypePicker,
  DescriptionInput,
  FeaturedCheckbox,
} from "./formComponents";
import M from "materialize-css";

const INITIAL_STATE = {
  imageFile: "",
  thumbnailFile: "",
  title: "",
  urlString: "",
  type: "",
  typeLabel: "",
  height: "",
  width: "",
  description: "",
  isFeatured: false,
};

class CreateNewModal extends Component {
  state = {
    imageFile: this.props.editMode ? this.props.artwork.imageUrl : "",

    title: this.props.editMode ? this.props.artwork.title : "",
    urlString: this.props.editMode ? this.props.artwork.urlString : "",
    type: this.props.editMode ? this.props.artwork.type : "",
    typeLabel: this.props.editMode ? this.props.artwork.typeLabel : "",
    height: this.props.editMode ? this.props.artwork.height : "",
    width: this.props.editMode ? this.props.artwork.width : "",
    description: this.props.editMode ? this.props.artwork.description : "",
    isFeatured: this.props.editMode ? this.props.artwork.isFeatured : false,
  };

  componentDidMount() {
    M.AutoInit();
  }

  handleDelete = (imageUrl, id) => {
    this.props.deleteArtwork(imageUrl, id);
  };

  handleSubmit = () => {
    const {
      title,
      type,
      typeLabel,
      height,
      width,
      description,
      imageFile,
      isFeatured,
      urlString,
    } = this.state;
    const formValues = {
      title: title,
      urlString: urlString,
      type: type,
      typeLabel: typeLabel,
      height: height,
      width: width,
      description: description,
      isFeatured: isFeatured,
    };

    this.props.submitArtwork(
      formValues,
      imageFile,
      this.props.history,
      this.props.editMode
    );
    this.setState(INITIAL_STATE);
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
  handleUrlStringChange = (event) => {
    this.setState({ urlString: event.target.value });
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
      urlString,
      type,
      typeLabel,
      width,
      height,
      description,
      isFeatured,
    } = this.state;
    const { editMode, artwork, handleDelete } = this.props;

    return (
      <div id="artworkModal" className="admin-modal modal">
        <div className="flex-center" style={{ marginBottom: 20 }}>
          <h5>{editMode ? "EDIT ARTWORK" : "NEW ARTWORK"}</h5>
        </div>
        <ImageInput
          onChange={this.handleSelectedImageFile}
          editMode={editMode}
          imageUrl={editMode && this.props.artwork.imageUrl}
        />

        <TitleInput
          value={title}
          onChange={this.handleTitleChange}
          editMode={editMode}
        />

        <TypePicker
          selectedValue={editMode && `${type}|${typeLabel}`}
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
        <UrlString
          value={urlString}
          onChange={this.handleUrlStringChange}
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
            onClick={() => this.handleSubmit()}
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
