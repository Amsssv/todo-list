import React, { FC } from "react";
import TodoItem from "../todo-item/todo-item";
import "./todo-list-styles.css";

const TodoList: FC<{ todos: Array<any> }> = ({ todos }) => {
  return (
    <div className="todo-list">
      {todos.map((elem) => {
        return (
          <TodoItem
            key={elem.id}
            todo={elem}
            id={elem.id}
            title={elem.title}
            description={elem.description}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
