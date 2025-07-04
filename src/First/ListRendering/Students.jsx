import React from "react";
import Student from "./Student";

export default function Students() {
  const students = [
    {
      name: "Hassan",
      age: 20,
    },
    {
      name: "Hussnain",
      age: 23,
    },
    { name: "Ali", age: 19 },
  ];
  return (
    <div>
      {students.map(std => <Student std={std}/>)}
    </div>
  );
}
