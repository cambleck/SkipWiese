import React from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import typeList from "./typeList";
import Lightbox from "../../../common/Lightbox";

const TextInput = ({ value, onChange, label, editMode, inactive }) => {
  return (
    <div
      className=" input-field col s6"
      style={{
        marginTop: 25,
        fontFamily: "Gill Sans",
        paddingLeft: 5,
      }}
    >
      <input id={label} type="text" value={value} onChange={onChange} />
      <label
        className={editMode && !inactive ? "active" : undefined}
        htmlFor={label}
      >
        {label}
      </label>
    </div>
  );
};

export const SubmitButton = ({ onClick, editMode }) => {
  return (
    <div className="flex-center" style={{ justifyContent: "flex-end" }}>
      <button onClick={onClick} className="modal-close btn" style={{}}>
        {editMode ? "UPDATE" : "SUBMIT"}
      </button>
    </div>
  );
};
export const DeleteButton = ({ handleDelete }) => {
  return (
    <Link
      to="/list"
      className="flex-center"
      style={{ justifyContent: "flex-end" }}
    >
      <button
        onClick={handleDelete}
        className="modal-close btn"
        style={{ background: "rgba(255,0,0,.5)" }}
      >
        DELETE
      </button>
    </Link>
  );
};

export const TitleInput = ({ value, onChange, editMode }) => {
  return (
    <TextInput
      value={value}
      onChange={onChange}
      label="Title"
      editMode={editMode}
      inactive={value === ""}
    />
  );
};
export const UrlString = ({ value, onChange, editMode }) => {
  return (
    <div
      className="flex-center"
      style={{ fontSize: 18, justifyContent: "flex-start" }}
    >
      <div style={{ marginBottom: 7, color: "grey" }}>
        {" "}
        https://skipwiese.com/
      </div>
      <TextInput
        value={value}
        onChange={onChange}
        label="Url String"
        editMode={editMode}
        inactive={value === ""}
      />
    </div>
  );
};

function renderTypeOptions() {
  return _.map(typeList, ({ value, label }) => {
    return (
      <option value={`${value}|${label}`} key={label}>
        ({value}) - {label}
      </option>
    );
  });
}

export const TypePicker = ({ selectedValue, onChange }) => {
  return (
    <select
      className="browser-default"
      style={{
        background: "transparent",
        border: "none",
        bottomBorder: "1px solid black",
        outline: "none",
        maxWidth: 335,
      }}
      onChange={onChange}
      defaultValue={selectedValue}
    >
      <option value="no-type">no type</option>
      {renderTypeOptions()}
    </select>
  );
};

export const ImageInput = ({ onChange, imageUrl, editMode }) => {
  return (
    <div
      className="flex-center column"
      style={{ paddingTop: 10, justifyContent: "flex-start" }}
    >
      {editMode && <Lightbox single></Lightbox>}
      <div style={{ width: "100%" }} className="flex-center">
        <div
          class="file-field input-field"
          style={{ justifyContent: "flex-start" }}
        >
          <div class="clear-icon-btn" style={{ transform: "none" }}>
            <img
              src={"https://skipwiese.s3.us-east-2.amazonaws.com/" + imageUrl}
              style={{
                width: 200,
                height: 200,
                objectFit: "cover",
                marginRight: 10,
              }}
            />
            <input type="file" accept="image/*" onChange={onChange} />
          </div>
        </div>
      </div>
    </div>
  );
};
/*
thumbnailInput() {
  return (
    <div style={{ paddingTop: 10 }}>
      <label className="textInput-label">Add Thumbnail</label>
      <div style={{ paddingTop: 10 }}>
        <input
          type="file"
          accept="image/*"
          onChange={this.handleSelectedThumbnailFile}
          style={{ marginLeft: 10 }}
        />
      </div>
    </div>
  );
}
*/

const WidthInput = ({ value, onChange, editMode }) => {
  return (
    <TextInput
      value={value}
      onChange={onChange}
      label="Width"
      editMode={editMode}
      inactive={value === ""}
    />
  );
};

const HeightInput = ({ value, onChange, editMode }) => {
  return (
    <TextInput
      value={value}
      onChange={onChange}
      label="Height"
      editMode={editMode}
      inactive={value === ""}
    />
  );
};
export const SizeInput = ({
  widthValue,
  widthOnChange,
  heightValue,
  heightOnChange,
  editMode,
}) => {
  return (
    <div className="flex-center" style={{ justifyContent: "flex-start" }}>
      <WidthInput
        value={widthValue}
        onChange={widthOnChange}
        editMode={editMode}
      />
      |
      <HeightInput
        value={heightValue}
        onChange={heightOnChange}
        editMode={editMode}
      />
    </div>
  );
};

export const FeaturedCheckbox = ({ value, onChange }) => {
  return (
    <p>
      <label>
        <input type="checkbox" checked={value} onChange={onChange} />
        <span>Featured on Home Page</span>
      </label>
    </p>
  );
};

export const DescriptionInput = ({ value, onChange, editMode }) => {
  return (
    <TextInput
      value={value}
      onChange={onChange}
      label="Description"
      editMode={editMode}
      inactive={value === ""}
    />
  );
};
export const PriceInput = ({ value, onChange, editMode }) => {
  return (
    <TextInput
      value={value}
      onChange={onChange}
      label="Price"
      editMode={editMode}
      inactive={value === ""}
    />
  );
};
