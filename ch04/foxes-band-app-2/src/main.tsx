import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import "./index.css";
import { BandProvider } from "./BandProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BandProvider>
      <App />
    </BandProvider>
  </React.StrictMode>
);
