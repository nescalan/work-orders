import React from "react";
import { UserContext } from "./index";

function App() {
  return (
    <div>
      <UserContext.Consumer>
        {(value) => <div>Recived, {value} </div>}
      </UserContext.Consumer>
    </div>
  );
}

export { App };
