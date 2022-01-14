import React, { Component } from "react";
import logo from "../../assets/index";
import "./App.css";
import { UserContext } from "../..";

function App() {
  return (
    <div className="App">
      <UserContext.Consumer>
        {" "}
        {(value) => <div>Recived, {value} </div>}{" "}
      </UserContext.Consumer>

      {/* <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p> */}
    </div>
  );
}

export { App };
