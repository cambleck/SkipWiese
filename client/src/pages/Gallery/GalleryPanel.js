import React from "react";

const GalleryPanel = () => {
  return (
    <div className="flex-center" style={{ width: "100%", marginTop: 30 }}>
      <select class="browser-default" style={{ maxWidth: 200, margin: 5 }}>
        <option value="1">Mixed Media</option>
        <option value="2">Z-A</option>
        <option value="3">Random</option>
      </select>
      <select class="browser-default" style={{ margin: 5 }}>
        <option value="1">A-Z</option>
        <option value="2">Z-A</option>
        <option value="3">Random</option>
      </select>
    </div>
  );
};

export default GalleryPanel;
