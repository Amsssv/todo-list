import React, { FC } from "react";
import { useTodos } from "../store";
import { Status } from "../store/types";
import Button from "./button";

interface Props {
  id: number;
  title: string;
  description: string;
  status: Status;
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

  let color;
  let handle;
  let name;

  switch (status) {
    case Status.PENDING:
      handle = () => {
        setTodoStatus(id, title, description, Status.WORKING);
      };
      name = "To work";
      break;
    case Status.WORKING:
      color = "blue";
      handle = () => {
        setTodoStatus(id, title, description, Status.FINISHED);
      };
      name = "Finish";
      break;
    case Status.FINISHED:
      color = "green";
  }

  const classes = `todo-list__item todo-list__item--${color}`;
  return (
    <div className={classes}>
      <div className="todo-list__header">
        <h2 className="todo-list__title">{title}</h2>
      </div>
      <p className="todo-list__copy">{description}</p>
      <div className="todo-list__actions">
        <Button color={"blue"} onClick={handle}>
          {name}
        </Button>
        <Button color={"yellow"} onClick={() => onEdit(id)}>
          Edit
        </Button>
        <Button
          color={"red"}
          onClick={() => onDelete(id)}
          disabled={editingId === id}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default TodoItem;
