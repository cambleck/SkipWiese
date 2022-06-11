import React from "react";

export default function Loading() {
  return (
    <div className="flex-center column" style={{ width: "100%", height: 400 }}>
      <div className="progress white" style={{ width: "50%" }}>
        <div className="indeterminate yellow"></div>
      </div>
      <div
        className="progress white"
        style={{ width: "60%", marginTop: 20, marginBottom: 20 }}
      >
        <div className="indeterminate yellow"></div>
      </div>
      <div className="progress white" style={{ width: "50%" }}>
        <div className="indeterminate yellow"></div>
      </div>
    </div>
  );
}
