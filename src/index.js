import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./style/style.css";
import { generateId } from "./script/methods.js";

let data = [
  {id: generateId(), text: "哈哈哈！", complete: false},
  {id: generateId(), text: "嗯嗯嗯？", complete: false},
  {id: generateId(), text: "呼呼呼。", complete: true},
];

ReactDOM.render(
  <App data = {data} />,
  document.getElementById('app')
)
