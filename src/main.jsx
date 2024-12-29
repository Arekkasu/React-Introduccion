import React from "react";
import ReactDOM from "react-dom/client";
// import { App } from "./HelloWorldApp";
import { FirstApp } from "./FirstApp";
//IMPLEMENTACION DE CSS
import { CounterApp } from "./counterApp";
import "./style.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  //Trabakar siempre en el modo estricto de React

  <React.StrictMode>
    {/* Enviando props */}
    <CounterApp value={0} />
  </React.StrictMode>,
);
