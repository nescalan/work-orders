import React, { useReducer } from "react";
import { TodoList } from "..";
import { TodosContext } from "../../store";
import { v4 as uuidv4 } from "uuid";

const TodosInitialState = {
  todos: [{ id: 1, text: "Welcome to this app" }],
};

function todosReducer(state, action) {
  switch (action.type) {
    case "add":
      const newToDo = { id: uuidv4(), text: action.payload };
      const addedToDos = [...state.todos, newToDo];
      return { ...state, todos: addedToDos };
    case "delete":
      const filteredTodoState = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      return { ...state, todos: filteredTodoState };
    case "edit":
      const updatedToDo = { ...action.payload };
      const updatedToDoIndex = state.todos.findIndex(
        (t) => t.id === action.payload.id
      );
      const updatedToDos = [
        ...state.todos.slice(0, updatedToDoIndex),
        updatedToDo,
        ...state.todos.slice(updatedToDoIndex + 1),
      ];
      return { ...state, todos: updatedToDos };
    default:
      return todosInitialState;
  }
}

function App() {
  const [state, dispatch] = useReducer(todosReducer, TodosInitialState);

  return (
    <div className="container mt-5">
      <TodosContext.Provider value={{ state, dispatch }}>
        <TodoList />
      </TodosContext.Provider>
    </div>
  );
}

export { App };
