import React, { useState } from "react";

function UseStateComponentWithArray() {
    let num = [1, 2, 3, 4, 5];
    let [numbers, setNumbers]=useState(num);
  return <div>
        <ul>
            {numbers.map((number, index) => (
                <li key={index}>{number}</li>
            ))}
        </ul>
  </div>;
}

export default UseStateComponentWithArray;
