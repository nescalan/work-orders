import React, { useReducer } from "react";
import { Button } from "react-bootstrap";

const InitialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return InitialState;
    default:
      return InitialState;
  }
}

function App() {
  const [state, setState] = useReducer(reducer, InitialState);

  return (
    <>
      <h1>Count: {state.count} </h1>
      <Button onClick={() => setState({ type: "increment" })}>Increment</Button>
      <Button
        variant="secondary"
        onClick={() => setState({ type: "decrement" })}
      >
        Decrement
      </Button>
      <Button variant="success" onClick={() => setState({ type: "reset" })}>
        Reset
      </Button>
    </>
  );
}

export { App };
