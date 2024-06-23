import React from "react";
import ReactDOM from "react-dom/client";

//useInfiniteQuery!!
//import App from "./App1.tsx";

//useQuqery를 이용한 페이징
import App from "./App2.tsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "./index.css";
import "react-csspin/dist/style.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
