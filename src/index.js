import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const UserContext = React.createContext();
const userName = "greg";

ReactDOM.render(
  <UserContext.Provider value={userName}>
    <App />
  </UserContext.Provider>,
  document.getElementById("root")
);
