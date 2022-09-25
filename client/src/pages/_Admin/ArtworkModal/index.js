import { useState, useEffect } from "react";
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

function CreateNewModal({ history, editMode, artwork, deleteArtwork }) {
  const [imageFile, setImageFile] = useState("");
  const [displayImage, setDisplayImage] = useState("+");
  const [title, setTitle] = useState("");
  const [urlString, setUrlString] = useState("");
  const [type, setType] = useState("");
  const [typeLabel, setTypeLabel] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [description, setDescription] = useState("");
  const [saleDescription, setSaleDescription] = useState("");
  const [price, setPrice] = useState("");
  const [featured, setFeatured] = useState(false);

  useEffect(() => {
    M.AutoInit();

    if (editMode) {
      setEditMode();
    }
  }, []);

  function setEditMode() {
    setImageFile(artwork.imageUrl);
    setDisplayImage(
      `https://skipwiese.s3.us-east-2.amazonaws.com/${artwork.imageUrl}`
    );
    setTitle(artwork.title);
    setUrlString(artwork.urlString);
    setType(artwork.type);
    setTypeLabel(artwork.typeLabel);
    setHeight(artwork.height);
    setWidth(artwork.width);
    setDescription(artwork.description);
    setSaleDescription(artwork.saleDescription);
    setPrice(artwork.price);
    setFeatured(artwork.featured);
  }

  function clearState() {
    setImageFile("");
    setDisplayImage("+");
    setTitle("");
    setUrlString("");
    setType("");
    setTypeLabel("");
    setHeight("");
    setWidth("");
    setDescription("");
    setSaleDescription("");
    setPrice("");
    setFeatured("");
  }

  function handleSubmit() {
    const formValues = {
      title,
      urlString,
      type,
      typeLabel,
      height,
      width,
      description,
      saleDescription,
      featured,
      price: parseInt(price),
    };
    this.props.submitArtwork(formValues, imageFile, history, editMode);
    clearState();
  }

  return (
    <div id="artworkModal" className="admin-modal modal">
      <div
        className="flex-center"
        style={{ marginBottom: 20, textDecoration: "underline" }}
      >
        <h5>{editMode ? "EDIT ARTWORK" : "NEW ARTWORK"}</h5>
      </div>
      <ImageInput
        onChange={(e) => {
          setDisplayImage(URL.createObjectURL(e.target.files[0]));
          setImageFile(e.target.files[0]);
        }}
        editMode={editMode}
        image={displayImage}
        imageUrl={editMode && artwork.imageUrl}
      />
      <FeaturedCheckbox
        value={featured}
        onChange={() => setFeatured(!featured)}
      />
      <TitleInput
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        editMode={editMode}
      />
      <TypePicker
        selectedValue={editMode && `${type}|${typeLabel}`}
        onChange={(e) => setType(e.target.value)}
      />
      <SizeInput
        widthValue={width}
        widthOnChange={(e) => setWidth(e.target.value)}
        heightValue={height}
        heightOnChange={(e) => setHeight(e.target.value)}
        editMode={editMode}
      />
      <ArtDescriptionInput
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        editMode={editMode}
      />
      <UrlString
        value={urlString}
        onChange={(e) => setUrlString(e.target.value)}
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
          onChange={(e) => setPrice(e.target.value)}
          editMode={editMode}
        />
        <SaleDescriptionInput
          value={saleDescription}
          onChange={(e) => setSaleDescription(e.target.value)}
          editMode={editMode}
        />
      </div>
      <div className="flex-center" style={{ marginTop: 40 }}>
        {editMode && (
          <DeleteButton
            handleDelete={() => deleteArtwork(artwork.imageUrl, artwork._id)}
          />
        )}
        <SubmitButton onClick={() => handleSubmit()} editMode={editMode} />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, actions)(withRouter(CreateNewModal));
