import React from "react";
import { useState } from "react";

function UseStateComponent() {
  const [name, setName] = useState("Faraz");
  let changeState = (newName) => {
    setName(newName);
  };
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => changeState("Hassan Khan")}>Update</button>
      <button onClick={() => changeState("Faraz")}>Reset</button>
    </div>
  );
}

export default UseStateComponent;
