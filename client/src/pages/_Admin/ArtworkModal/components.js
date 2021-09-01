import React from "react";

const TextInput = ({ value, onChange, label }) => {
  return (
    <div className=" col s6" style={{ margin: 10 }}>
      <input id={label} type="text" value={value} onChange={() => onChange()} />
      <label for={label}>{label}</label>
    </div>
  );
};
export default TextInput;
