import React from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import typeList from "./typeList";
import Lightbox from "../../../common/Lightbox";
import { DropdownSelect } from "../../../common/DropdownSelect";

const TextInput = ({ value, onChange, label, editMode, inactive }) => {
  return (
    <div
      className=" input-field col s4"
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
    <div className="flex-center" style={{ justifyContent: "center" }}>
      <button onClick={onClick} className="modal-close action-btn" style={{}}>
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
      style={{ justifyContent: "flex-end", width: 100 }}
    >
      <button onClick={handleDelete} className="modal-close action-btn delete">
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
      style={{ fontSize: 14, justifyContent: "flex-start" }}
    >
      <div style={{ marginBottom: -7, color: "grey" }}>
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
  console.log(selectedValue);
  return (
    <div style={{ display: "flex" }}>
      <div className="flex-center" style={{ marginRight: 15, marginLeft: 5 }}>
        Type:
      </div>
      <DropdownSelect
        onChange={onChange}
        defaultValue={selectedValue}
        options={typeList}
        className="admin"
      />
    </div>
  );
};

export const ImageInput = ({
  onChange,
  imageUrl,
  editMode,
  selectedImage,
  image,
}) => {
  return (
    <div
      className="flex-center column"
      style={{ paddingTop: 10, justifyContent: "flex-start" }}
    >
      <div style={{ width: "100%" }} className="flex-center">
        <div
          class="file-field input-field"
          style={{ justifyContent: "flex-start" }}
        >
          <div class="clear-icon-btn" style={{ transform: "none" }}>
            <img
              src={image}
              style={{
                maxWidth: 300,
                minWidth: 150,
                minHeight: 150,
                objectFit: "cover",
                marginRight: 10,
                border: "1px solid rgba(100,100,100,.4)",
                borderRadius: 5,
              }}
            />
            <input type="file" accept="image/*" onChange={onChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

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
      <HeightInput
        value={heightValue}
        onChange={heightOnChange}
        editMode={editMode}
      />
      x
      <WidthInput
        value={widthValue}
        onChange={widthOnChange}
        editMode={editMode}
      />
    </div>
  );
};

export const FeaturedCheckbox = ({ value, onChange }) => {
  return (
    <p style={{ width: "100%", marginTop: -5 }} className="flex-center">
      <label style={{ width: 200 }} className="action-btn">
        <input type="checkbox" checked={value} onChange={onChange} />
        <span>On Homepage</span>
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
    <div style={{ display: "flex" }}>
      <b className="flex-center">$</b>
      <TextInput
        value={value}
        onChange={onChange}
        label="Price"
        editMode={editMode}
        inactive={value === ""}
      />
      <div className="flex-center" style={{ fontSize: 10 }}>
        (Leave Blank if not for sale)
      </div>
    </div>
  );
};
