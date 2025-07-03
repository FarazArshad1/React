import React from "react";
import "../App";

function HelloFunction() {
  alert("Hello Function");
}

export default function ClickFunction() {
  return (
    <div className="App">
      <input type="button" value="click" id="" onClick={HelloFunction} />
    </div>
  );
}
