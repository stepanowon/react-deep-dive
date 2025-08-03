import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

//페이징 예제
//import App from "./App1.tsx";
import App from "./App2.tsx";
import { SWRConfig } from "swr";
import "react-csspin/dist/style.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SWRConfig value={{ keepPreviousData: true }}>
      <App />
    </SWRConfig>
  </React.StrictMode>
);
