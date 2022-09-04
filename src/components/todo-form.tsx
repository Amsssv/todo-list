import React from "react";
import { useTodos } from "../store";
import AddTodoForm from "./add-todo-form";
import EditTodoForm from "./edit-todo-form";

const TodoFormContainer = () => {
  const {
    state: { editingId },
  } = useTodos();

  return editingId ? <EditTodoForm id={editingId} /> : <AddTodoForm />;
};

export default TodoFormContainer;
