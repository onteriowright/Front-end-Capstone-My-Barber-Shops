import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import BarberShopApp from "./components/BarberShopApp";
import "./index.css";

ReactDOM.render(
  <Router>
    <BarberShopApp />
  </Router>,
  document.getElementById("root")
);
