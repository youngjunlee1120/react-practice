import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UseEffect from "./UseEffect";
import Button from "./Button";
import CleanUp from "./CleanUp";
import ToDoList from "./ToDoList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App />
    {/* <ToDoList /> */}
    {/* <CleanUp />
    <Button text="Click" /> */}
  </div>

  // <React.StrictMode>

  //   {/* <UseEffect /> */}
  // </React.StrictMode>
);
