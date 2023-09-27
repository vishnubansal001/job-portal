import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ContextProviders from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <BrowserRouter>
      <ContextProviders>
        <App />
      </ContextProviders>
    </BrowserRouter>
  </React.Fragment>
);
