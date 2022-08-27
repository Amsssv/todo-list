import React, { FC, useContext } from "react";
import "./todo-item-styles.css";
import Context from "../../app";

interface Props {
  id: string;
  title: string;
  description: string;
  todo: object;
}

const TodoItem: FC<Props> = ({ title, description, id, todo }) => {
  const { removeTodoItem, setIsEditing, setCurrentTodo } = useContext(Context);

  return (
    <div className="todo-item">
      <h2 className="todo-title">{title}</h2>
      <p className="todo-copy">{description}</p>
      <div className="todo-actions">
        <button
          className="button edit-button"
          onClick={() => {
            setIsEditing(true);
            setCurrentTodo({ ...todo });
          }}
        >
          Edit
        </button>
        <button
          className="button delete-button"
          onClick={() => removeTodoItem(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
