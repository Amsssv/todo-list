import React, { FC } from "react";
import { useTodos } from "../store";
import { Status } from "../store/types";
import Button from "./button";
import Kebab from "./kebab-menu";

interface Props {
  id: number;
  title: string;
  description: string;
  status: Status;
}

const TodoItem: FC<Props> = ({
  id,
  title,
  description,
  status = Status.PENDING,
}) => {
  const { setTodoStatus } = useTodos();

  let color;
  let handle = () => {
    setTodoStatus(id, title, description, Status.WORKING);
  };
  let name = "Start";

  switch (status) {
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
        <Kebab id={id} status={status} />
      </div>
      <p className="todo-list__copy">{description}</p>
      <div className="todo-list__actions">
        <Button color={"blue"} onClick={handle}>
          {name}
        </Button>
      </div>
    </div>
  );
};

export default TodoItem;
