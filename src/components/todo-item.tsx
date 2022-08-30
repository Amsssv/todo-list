import React, { FC } from "react";
import { useTodos } from "../store";
import { Status } from "../store/types";
import Button from "./button";

interface Props {
  id: number;
  title: string;
  description: string;
  status: string;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: FC<Props> = ({
  id,
  title,
  description,
  status = Status.PENDING,
  onEdit,
  onDelete,
}) => {
  const {
    state: { editingId },
    setTodoStatus,
  } = useTodos();

  const handleStart = () => {
    setTodoStatus(id, title, description, Status.WORKING);
  };

  const handleFinish = () => {
    setTodoStatus(id, title, description, Status.FINISHED);
  };
  const color =
    status === Status.WORKING
      ? "blue"
      : status === Status.FINISHED
      ? "green"
      : null;
  const todoItemClass = `todo__item todo__item--${color}`;
  return (
    <div className={todoItemClass}>
      <div className="todo-header">
        <h2 className="todo-title">{title}</h2>
      </div>
      <p className="todo-copy">{description}</p>
      <div className="todo-actions">
        {status === Status.PENDING ? (
          <>
            <Button color={"blue"} submit={false} onClick={handleStart}>
              To work
            </Button>
            <Button color={"yellow"} submit={false} onClick={() => onEdit(id)}>
              Edit
            </Button>
          </>
        ) : status === Status.WORKING ? (
          <Button color={"green"} submit={false} onClick={handleFinish}>
            Finish
          </Button>
        ) : null}
        <button
          className="button button--red"
          onClick={() => onDelete(id)}
          {...(editingId == id && { disabled: true })}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
