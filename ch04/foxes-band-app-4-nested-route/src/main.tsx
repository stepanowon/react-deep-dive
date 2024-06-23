import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { BandProvider } from "./BandProvider";
import { RouterProvider } from "react-router-dom";
import router from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BandProvider>
      <RouterProvider router={router} />
    </BandProvider>
  </React.StrictMode>
);
