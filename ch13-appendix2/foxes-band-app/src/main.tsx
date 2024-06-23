import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import axios from "axios";
import { ReactCsspin } from "react-csspin";
import "react-csspin/dist/style.css";

axios.defaults.baseURL = "http://localhost:3000";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<ReactCsspin />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
