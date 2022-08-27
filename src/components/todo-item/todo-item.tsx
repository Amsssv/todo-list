import React, { FC } from "react";
import "./todo-item-styles.css";

interface Props {
  id: number;
  title: string;
  description: string;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: FC<Props> = ({ id, title, description, onEdit, onDelete }) => {
  return (
    <div className="todo-item">
      <h2 className="todo-title">{title}</h2>
      <p className="todo-copy">{description}</p>
      <div className="todo-actions">
        <button className="button edit-button" onClick={() => onEdit(id)}>
          Edit
        </button>
        <button className="button delete-button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
