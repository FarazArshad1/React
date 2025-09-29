import React from "react";

// export default function Customers(props) {
//     const {name, age} = props
//     return (
//     <div>
//       <h1>{name}</h1>
//       <h1>{age}</h1>
//     </div>
//   )
// }

export default class Customers extends React.Component {
  render() {
    const {name, age} = this.props
    return (
      <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
      </div>
    );
  }
}
