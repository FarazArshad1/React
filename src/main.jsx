import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ParentComponent from "./First/ParentComponent";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="App">
      <ParentComponent/>
    </div>
  </StrictMode>
);
