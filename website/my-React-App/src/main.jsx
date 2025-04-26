import './style.css'
import React from "react";
import ReactDOM from "react-dom/client";
import ToDoList from "./ToDoList.jsx"; // Your ToDoList component

// Render ToDoList into the 'root' div
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToDoList />
  </React.StrictMode>
);
