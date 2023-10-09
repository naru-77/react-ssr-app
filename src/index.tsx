import React from "react";
import { createRoot } from "react-dom/client";
import App from "./client/App";

const root = document.getElementById("root");
if (root) {
  const rootContainer = createRoot(root);
  rootContainer.render(<App />);
} else {
  console.error("Root element not found");
}
