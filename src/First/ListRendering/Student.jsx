import React from 'react'

export default function Student({std}) {
  return (
    <div>
      <h1>I am {std.name} and I am {std.age} years old.</h1>
    </div>
  )
}
