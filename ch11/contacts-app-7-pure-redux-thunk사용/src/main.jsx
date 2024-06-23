import React from "react";
import ReactDOM from "react-dom/client";
import { AppContainer } from "./App.jsx";
import "./index.css";
import ContactStore from "./redux/ContactStore.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={ContactStore}>
      <AppContainer />
    </Provider>
  </React.StrictMode>
);
