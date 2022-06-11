import React from "react";
import "./index.css";

export default function Lightbox({ children }) {
  return (
    <div id="myModal" class="modal">
      {console.log(children)}
    </div>
  );
}
