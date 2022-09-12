import React, { FC, useState } from "react";
import Button from "./button";
import { useTodos } from "../store";
import EditIcon from "./edit-icon";
import GarbageIcon from "./garbage-icon";
import { Status } from "../store/types";

interface Props {
  id: number;
  status: Status;
}

const Kebab: FC<Props> = ({ id, status }) => {
  const {
    state: { editingId },
    editTodoItem,
    removeTodoItem,
  } = useTodos();

  const [active, setActive] = useState("");
  const classes = `kebab kebab--${active}`;
  const menuHandler = () => {
    !active ? setActive("active") : setActive("");
  };

  return (
    <div className="menu" onClick={menuHandler}>
      <div className={classes}>
        <ul className="popup">
          <li className="popup__item">
            <button
              className={"popup__button"}
              onClick={() => editTodoItem(id)}
              disabled={status === Status.FINISHED}
            >
              {<EditIcon />}
              Edit
            </button>
          </li>
          <li className="popup__item">
            <button
              className={"popup__button"}
              onClick={() => removeTodoItem(id)}
              disabled={editingId === id}
            >
              <GarbageIcon />
              Delete
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Kebab;
