import React, { useReducer } from "react";
import { TodoList } from "..";
import { TodosContext } from "../../store";

const TodosInitialState = {
  todos: [
    { id: 1, text: "finishing, writing hooks chapter" },
    { id: 2, text: "play with kids" },
    { id: 3, text: "read a story for mark" },
  ],
};

function todosReducer(state, action) {
  switch (action.type) {
    default:
      return TodosInitialState;
  }
}

function App() {
  const [state, dispatch] = useReducer(todosReducer, TodosInitialState);

  return (
    <>
      <TodosContext.Provider value={{ state, dispatch }}>
        <TodoList />
      </TodosContext.Provider>
    </>
  );
}

export { App };
