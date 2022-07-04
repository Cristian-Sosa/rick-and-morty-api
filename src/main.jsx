import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";

import CardList from "./components/CardList";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CardList />
  </React.StrictMode>
);
