import React, { FC } from "react";
import TodoItem from "../todo-item/todo-item";
import "./todo-list-styles.css";

const TodoList: FC = () => {
  return (
    <div className="todo-list">
      <TodoItem />
      <TodoItem />
    </div>
  );
};

export default TodoList;
