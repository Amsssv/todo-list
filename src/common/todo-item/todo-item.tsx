import React, { FC, useContext } from "react";
import "./todo-item-styles.css";
import Context from "../../app";

interface Props {
  id: string;
  title: string;
  description: string;
}

const TodoItem: FC<Props> = ({ title, description, id }) => {
  const { removeTodo } = useContext(Context);
  return (
    <div className="todo-item">
      <h2 className="todo-title">{title}</h2>
      <p className="todo-copy">{description}</p>
      <div className="todo-actions">
        <button className="button edit-button">Edit</button>
        <button className="button delete-button" onClick={() => removeTodo(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
