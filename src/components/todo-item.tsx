import React, { FC } from "react";
import { useTodos } from "../store";
import { TodoStatus } from "../store/types";

interface Props {
  id: number;
  title: string;
  description: string;
  status: string;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onChange: (id: number, status: TodoStatus) => void;
}

const themes = {
  pending: "none",
  working: "rgba(133, 164, 255, 0.5)",
  finished: "rgba(133, 255, 153, 0.5)",
};

const getNewStatus = (status?: TodoStatus): TodoStatus => {
  switch (status) {
    case "pending":
      return "working";
    case "working":
      return "finished";
    case "finished":
      return "finished";
    default:
      return "pending";
  }
};

const changeButtonsTexts = {
  pending: "To work",
  working: "To Finish",
};

const TodoItem: FC<Props> = ({
  id,
  title,
  description,
  status = themes.pending,
  onEdit,
  onDelete,
  onChange,
}) => {
  const { setTodoStatus } = useTodos();

  const handleStart = () => {
    setTodoStatus(id, title, description, themes.working);
  };

  const handleFinish = () => {
    setTodoStatus(id, title, description, themes.finished);
  };

  let statusButton;
  let editButton;
  let cardStatus;
  if (status === themes.pending) {
    statusButton = (
      <button className="button start-button" onClick={handleStart}>
        Start
      </button>
    );
    editButton = (
      <button className="button edit-button" onClick={() => onEdit(id)}>
        Edit
      </button>
    );
    cardStatus = (
      <span
        className="todo-subtitle"
        style={{ backgroundColor: "rgb(203 213 225)" }}
      >
        Not Started
      </span>
    );
  } else if (status === themes.working) {
    statusButton = (
      <button className="button save-button" onClick={handleFinish}>
        Finish
      </button>
    );
    cardStatus = (
      <span className="todo-subtitle" style={{ backgroundColor: status }}>
        In progress
      </span>
    );
  } else {
    statusButton = null;
    editButton = null;
    cardStatus = (
      <span className="todo-subtitle" style={{ backgroundColor: status }}>
        Closed
      </span>
    );
  }

  return (
    <div
      className="todo-item"
      style={{ borderColor: status, boxShadow: `6px 6px 10px 1px ${status}` }}
    >
      <div className="todo-header">
        <h2 className="todo-title">{title}</h2>
        {cardStatus}
      </div>
      <p className="todo-copy">{description}</p>
      <div className="todo-actions">
        {statusButton}
        {editButton}
        <button className="button delete-button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
