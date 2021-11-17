import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { KartProvider } from "./store/KartContext";
ReactDOM.render(
  <KartProvider>
    <App />
  </KartProvider>,
  document.getElementById("root")
);
