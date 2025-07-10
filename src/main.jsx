import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Students from "./First/ListRendering/Students";
import InlineCSSStyleComponent from "./First/StyleComponents/InlineCSS.StyleComponents"
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="App">
      <InlineCSSStyleComponent/>
    </div>
  </StrictMode>
);
