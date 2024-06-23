import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import AppStore from "./redux/AppStore";
import { Provider } from "react-redux";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={AppStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
