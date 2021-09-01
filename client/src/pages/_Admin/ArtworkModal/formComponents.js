import React from "react";
import _ from "lodash";
import typeList from "./typeList";

export const SubmitButton = ({ handleSubmit }) => {
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
        SUBMIT
      </button>
    </div>
  );
};

export const TitleInput = ({ value, onChange }) => {
  return (
    <div className="input-field col s6">
      <input
        id="title"
        type="text"
        className="validate"
        value={value}
        onChange={onChange}
      />
      <label htmlFor="title">Title</label>
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

export const TypePicker = ({ onChange }) => {
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
      onChange={onChange}
    >
      <option value="no-type">no type</option>
      {renderTypeOptions()}
    </select>
  );
};

export const ImageInput = ({ onChange, image, editMode }) => {
  return (
    <div
      className="flex-center"
      style={{ paddingTop: 10, justifyContent: "flex-start" }}
    >
      {editMode && (
        <img
          src={image}
          style={{ width: 50, height: 50, objectFit: "cover", marginRight: 10 }}
        />
      )}
      <div>
        <label className="textInput-label">
          {editMode ? "Edit Image" : "Add Image"}{" "}
        </label>
        <div style={{ paddingTop: 10 }}>
          <input
            type="file"
            accept="image/*"
            onChange={onChange}
            style={{ marginLeft: 10 }}
          />
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

const WidthInput = ({ value, onChange }) => {
  return (
    <div className="input-field col s2" style={{ marginRight: 5 }}>
      <input id="width" type="text" value={value} onChange={onChange} />
      <label htmlFor="width">Width</label>
    </div>
  );
};

const HeightInput = ({ value, onChange }) => {
  return (
    <div className="input-field col s6">
      <input id="height" type="text" value={value} onChange={onChange} />
      <label htmlFor="height">Height</label>
    </div>
  );
};
export const SizeInput = ({
  widthValue,
  widthOnChange,
  heightValue,
  heightOnChange,
}) => {
  return (
    <div className="flex-center" style={{ justifyContent: "flex-start" }}>
      <WidthInput value={widthValue} onChange={widthOnChange} />
      <HeightInput value={heightValue} onChange={heightOnChange} />
    </div>
  );
};

export const DescriptionInput = ({ value, onChange }) => {
  return (
    <div className="input-field col s6">
      <input id="description" type="text" value={value} onChange={onChange} />
      <label htmlFor="description">Description</label>
    </div>
  );
};

const TextInput = ({ value, onChange, label }) => {
  return (
    <div className=" col s6" style={{ margin: 10 }}>
      <input id={label} type="text" value={value} onChange={() => onChange()} />
      <label for={label}>{label}</label>
    </div>
  );
};
export default TextInput;
