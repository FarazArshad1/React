import React from "react";
import "./App.css";
import StyleSheet1 from "./First/StyleComponents/StyleSheet1";
import StyleSheet2 from "./First/StyleComponents/StyleSheet2";

class App extends React.Component {
  render() {
    return (
      <div>
        <StyleSheet1/>
        <StyleSheet2/>
      </div>
    )

  }
}

export default App;
