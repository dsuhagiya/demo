import React from "react";
import ReactDOM from "react-dom";
import Container from "./Container";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Container />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
