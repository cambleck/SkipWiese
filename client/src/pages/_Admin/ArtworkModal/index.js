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
  ArtDescriptionInput,
  SaleDescriptionInput,
  FeaturedCheckbox,
  PriceInput,
} from "./formComponents";
import M from "materialize-css";

const INITIAL_STATE = {
  newImageFile: "",
  thumbnailFile: "",
  title: "",
  urlString: "",
  type: "",
  typeLabel: "",
  height: "",
  width: "",
  description: "",
  price: "",
  isFeatured: false,
};

class CreateNewModal extends Component {
  state = {
    newImageFile: this.props.editMode ? this.props.artwork.imageUrl : "",
    displayImage: this.props.editMode
      ? `https://skipwiese.s3.us-east-2.amazonaws.com/${this.props.artwork.imageUrl}`
      : "+",
    title: this.props.editMode ? this.props.artwork.title : "",
    urlString: this.props.editMode ? this.props.artwork.urlString : "",
    type: this.props.editMode ? this.props.artwork.type : "",
    typeLabel: this.props.editMode ? this.props.artwork.typeLabel : "",
    height: this.props.editMode ? this.props.artwork.height : "",
    width: this.props.editMode ? this.props.artwork.width : "",
    description: this.props.editMode ? this.props.artwork.description : "",
    price: this.props.editMode ? this.props.artwork.price : "",
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
      newImageFile,
      isFeatured,
      urlString,
      price,
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
      price: parseInt(price),
    };

    this.props.submitArtwork(
      formValues,
      newImageFile,
      this.props.history,
      this.props.editMode
    );
    this.setState(INITIAL_STATE);
  };

  handleSelectedImageFile = (event) => {
    this.setState({
      displayImage: URL.createObjectURL(event.target.files[0]),
      newImageFile: event.target.files[0],
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
  handlePriceChange = (event) => {
    this.setState({ price: event.target.value });
  };

  handleFeatureChange = () => {
    this.setState({ isFeatured: !this.state.isFeatured });
  };

  render() {
    const {
      newImageFile,
      selectedImage,
      title,
      urlString,
      type,
      typeLabel,
      width,
      height,
      description,
      isFeatured,
      price,
    } = this.state;
    const { editMode, artwork, handleDelete } = this.props;

    return (
      <div id="artworkModal" className="admin-modal modal">
        <div
          className="flex-center"
          style={{ marginBottom: 20, textDecoration: "underline" }}
        >
          <h5>{editMode ? "EDIT ARTWORK" : "NEW ARTWORK"}</h5>
        </div>
        <ImageInput
          onChange={this.handleSelectedImageFile}
          editMode={editMode}
          image={this.state.displayImage}
          imageUrl={editMode && this.props.artwork.imageUrl}
        />
        <FeaturedCheckbox
          value={isFeatured}
          onChange={this.handleFeatureChange}
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
        <ArtDescriptionInput
          value={description}
          onChange={this.handleDescriptionChange}
          editMode={editMode}
        />
        <UrlString
          value={urlString}
          onChange={this.handleUrlStringChange}
          editMode={editMode}
        />
        <div
          style={{
            border: "1px solid rgb(0,0,0,.1)",
            borderRadius: 10,
            padding: 20,
            margin: 10,
            boxShadow: "0px 0px 15px rgba(0,0,0,.1)",
            marginTop: 40,
          }}
        >
          <div
            style={{
              marginBottom: 10,
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            FOR SALE
          </div>
          <PriceInput
            value={price}
            onChange={this.handlePriceChange}
            editMode={editMode}
          />
          <SaleDescriptionInput
            value={description}
            onChange={this.handleDescriptionChange}
            editMode={editMode}
          />
        </div>

        <div className="flex-center" style={{ marginTop: 40 }}>
          {editMode && (
            <DeleteButton
              handleDelete={() =>
                this.handleDelete(
                  this.props.artwork.imageUrl,
                  this.props.artwork._id
                )
              }
            />
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
