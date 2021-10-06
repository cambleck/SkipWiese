import React from "react";
import _ from "lodash";

const renderOptions = (list) => {
  return _.map(list, ({ value, label }) => {
    return <option value={value}>{label}</option>;
  });
};

export const SortDropdownSelect = ({ onChange }) => {
  const options = [
    { value: "default", label: "A-Z" },
    { value: "reverse", label: "Z-A" },
    { value: "shuffle", label: "Shuffle" },
  ];

  return (
    <DropdownSelect
      onChange={onChange}
      options={options}
      defaultValue="default"
      className="sort"
    />
  );
};

export const TypeDropdownSelect = ({ onChange, defaultValue }) => {
  const options = [
    { value: "PASTEL", label: "Pastel" },
    { value: "MIXED MEDIA", label: "Mixed Media" },
    { value: "COMMERCIAL", label: "Commercial" },
    { value: "PRINT", label: "Print" },
    { value: "ETCHING", label: "Etching" },
    { value: "MONOTYPE", label: "Monotype" },
    { value: "WATERCOLOR", label: "Watercolor" },
    { value: "OIL", label: "Oil" },
    { value: "ACRYLIC", label: "Acrylic" },
    { value: "GRAPHITE", label: "Graphite" },
    { value: "SKETCH", label: "Sketch" },
    { value: "ALL", label: "All" },
  ];

  return (
    <DropdownSelect
      onChange={onChange}
      options={options}
      defaultValue={defaultValue}
      className="type"
    />
  );
};

export const DropdownSelect = ({
  options,
  onChange,
  defaultValue,
  className,
}) => {
  return (
    <>
      <select
        className={`browser-default ${className}`}
        onChange={onChange}
        defaultValue={defaultValue}
        style={{ zIndex: 1 }}
      >
        {renderOptions(options)}
      </select>
      {className != "admin" && (
        <i
          className="material-icons black-text"
          style={{ marginLeft: -25, zIndex: 0 }}
        >
          arrow_drop_down
        </i>
      )}
    </>
  );
};
