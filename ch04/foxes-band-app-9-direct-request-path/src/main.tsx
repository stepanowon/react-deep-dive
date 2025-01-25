import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";

import "react-csspin/dist/style.css";
import axios from "axios";
import { ReactCsspin } from "react-csspin";

axios.defaults.baseURL = "http://localhost:3000";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<ReactCsspin />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
