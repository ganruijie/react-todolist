import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./style/style.css";

let data = [
  {id: 0, text: "哈哈哈！", complete: false},
  {id: 1, text: "嗯嗯嗯？", complete: false},
  {id: 2, text: "呼呼呼。", complete: true},
];

ReactDOM.render(
  <App data = {data} />,
  document.getElementById('app')
)
