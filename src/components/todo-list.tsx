import React, { FC, useState } from "react";
import TodoItem from "./todo-item";
import { useTodos } from "../store";
import { Todo } from "../store/types";
import TextField from "./text-field";
import useDebouncedCallback from "../hooks/useDebouncedCallback";

const TodoList: FC = () => {
  const {
    state: { items },
    editTodoItem,
    removeTodoItem,
  } = useTodos();

  const [search, setSearch] = useState("");

  const handleSearchChange = useDebouncedCallback(
    (value: string) => {
      setSearch(value);
    },
    300,
    []
  );

  return (
    <div className="container">
      <div className="input-group">
        <input
          className="input-group__input"
          defaultValue={search}
          placeholder="search"
          onChange={(e) => handleSearchChange(e.target.value)}
        />
      </div>
      <div className="todo-list">
        {items
          .filter(({ title }: Todo) =>
            title.toLowerCase().startsWith(search.toLowerCase())
          )
          .map((item: Todo) => (
            <TodoItem
              key={item.id}
              {...item}
              onEdit={editTodoItem}
              onDelete={removeTodoItem}
              onChange={() => console.log("ddd")}
            />
          ))}
      </div>
    </div>
  );
};

export default TodoList;
