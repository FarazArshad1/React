import React from "react";
import "./App.css";
import Component1 from "./First/ConditionalRendering/Component1";
import Component2 from "./First/ConditionalRendering/Component2";

class App extends React.Component {
  render() {
    const name = "Hassan";
    if (name == "Faraz") {
      return <Component1 />;
    } else {
      return <Component2 />;
    }
  }
}

export default App;

export { App };
