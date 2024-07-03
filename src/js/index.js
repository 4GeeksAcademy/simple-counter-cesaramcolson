import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import { App } from "./component/SimpleCounter.jsx";
const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(
    <App />
)