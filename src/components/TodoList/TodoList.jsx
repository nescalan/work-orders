import React, { useContext, useState } from "react";
import { TodosContext } from "../../store";
import { Table, Form, Button } from "react-bootstrap";

function TodoList() {
  const { state, dispatch } = useContext(TodosContext);
  const [todoText, setTodoText] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editTodo, setEditTodo] = useState(null);
  const buttonTitle = editMode ? "Edit" : "Add";

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editMode) {
      dispatch({ type: "edit", payload: { ...editTodo, text: todoText } });
      setEditMode(false);
      setEditTodo(null);
    } else {
      dispatch({ type: "add", payload: todoText });
    }
    setTodoText("");
  };

  return (
    <div>
      <div className="container mb-5">
        <div className="d-flex justify-content-center align-items-center p-2 bd-highligh">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-list-task"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"
            />
            <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
            <path
              fill-rule="evenodd"
              d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"
            />
          </svg>
          <h1 className="inline-block ms-2">
            Welcome to your personal Task App
          </h1>
        </div>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter yout new task"
            onChange={(event) => setTodoText(event.target.value)}
            value={todoText}
          />
        </Form.Group>
        <Button className="mt-2" variant="primary" type="submit">
          {buttonTitle}
        </Button>
      </Form>

      <div className="container p-5">
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
      </div>
    </div>
  );
}

export { TodoList };
