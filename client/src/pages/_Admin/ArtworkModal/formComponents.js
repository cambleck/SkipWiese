import React from "react";
import _ from "lodash";
import typeList from "./typeList";

const TextInput = ({ value, onChange, label, editMode, inactive }) => {
  return (
    <div className=" input-field col s6" style={{ marginTop: 20 }}>
      <input id={label} type="text" value={value} onChange={onChange} />
      <label className={editMode && !inactive && "active"} for={label}>
        {label}
      </label>
    </div>
  );
};

export const SubmitButton = ({ handleSubmit, editMode }) => {
  return (
    <div className="flex-center" style={{ justifyContent: "flex-end" }}>
      <button onClick={handleSubmit} className="modal-close btn" style={{}}>
        {editMode ? "UPDATE" : "SUBMIT"}
      </button>
    </div>
  );
};
export const DeleteButton = ({ handleDelete }) => {
  return (
    <div className="flex-center" style={{ justifyContent: "flex-end" }}>
      <button
        onClick={handleDelete}
        className="modal-close btn"
        style={{ background: "rgba(255,0,0,.5)" }}
      >
        DELETE
      </button>
    </div>
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

function renderTypeOptions(selectedValue) {
  return _.map(typeList, ({ value, label }) => {
    return (
      <option
        selected={selectedValue === `${value}${label}`}
        value={`${value}|${label}`}
        key={label}
      >
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
    >
      <option value="no-type">no type</option>
      {renderTypeOptions(selectedValue)}
    </select>
  );
};

export const ImageInput = ({ onChange, imageUrl, editMode }) => {
  return (
    <div
      className="flex-center"
      style={{ paddingTop: 10, justifyContent: "flex-start" }}
    >
      {editMode && (
        <img
          src={"https://skipwiese.s3.us-east-2.amazonaws.com/" + imageUrl}
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
        <input type="checkbox" value={value} onChange={onChange} />
        <span>Homepage Display</span>
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
