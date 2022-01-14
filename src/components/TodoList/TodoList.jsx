import React, { useContext } from "react";
import { TodosContext } from "../../store";
import { Table } from "react-bootstrap";

function TodoList() {
  // receive state and dispatch from index.js
  const { state, dispatch } = useContext(TodosContext);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>To Do</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {state.todos.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.text}</td>
            <td
              onClick={() => {
                setTodoText(todo.text);
                setEditMode(true);
                setEditTodo(todo);
              }}
            >
              Edit
            </td>
            <td onClick={() => dispatch({ type: "delete", payload: todo })}>
              Delete
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export { TodoList };
