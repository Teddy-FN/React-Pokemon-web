import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoadingGif from "components/UI/Organism/Loading";
const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={<LoadingGif />}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById("root"),
);
