import React from "react";

const Loading = () => {
  return (
    <div className="flex-center column" style={{ width: "100%", height: 400 }}>
      <div class="progress white" style={{ width: "50%" }}>
        <div class="indeterminate yellow"></div>
      </div>
      <div
        class="progress white"
        style={{ width: "60%", marginTop: 20, marginBottom: 20 }}
      >
        <div class="indeterminate yellow"></div>
      </div>
      <div class="progress white" style={{ width: "50%" }}>
        <div class="indeterminate yellow"></div>
      </div>
    </div>
  );
};

export default Loading;
