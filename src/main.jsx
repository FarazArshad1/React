import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Students from "./First/ListRendering/Students";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="App">
      <Students/>
    </div>
  </StrictMode>
);
