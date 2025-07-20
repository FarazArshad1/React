import React, { useState } from "react";

function UseStateComponentWithObject() {
  const obj = {
    name: "Faraz",
    age: 25,
    city: "Karachi",
    height: "5.6",
    isYoung: true,
  };
  const [person, setPerson] = useState(obj);

  let changePerson = () =>{
    setPerson({
      ...person,
      name: "Ali",
      age: 30,
      city: "Lahore",
      height: "5.8",
      isYoung: false
    })
  }
  return <div>
    <h1>{person.name}</h1>
    <h1>{person.age}</h1>
    <h1>{person.city}</h1>
    <h1>{person.height}</h1>
    <h1>{person.isYoung.toString()}</h1>
    <br />
    <br />
    <button onClick={changePerson}>Change Person</button>
  </div>;
}

export default UseStateComponentWithObject;
