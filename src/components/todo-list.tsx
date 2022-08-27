import React, { FC, useState } from "react";
import TodoItem from "./todo-item";
import { useTodos } from "../store";
import { Todo } from "../store/types";
import TextField from "./text-field";

const TodoList: FC = () => {
  const {
    state: { items },
    editTodoItem,
    removeTodoItem,
  } = useTodos();

  const [search, setSearch] = useState("");

  const handleSearchChange = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <div className="container">
      <TextField
        name="search"
        placeholder="search"
        value={search}
        onChange={handleSearchChange}
      />
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
            />
          ))}
      </div>
    </div>
  );
};

export default TodoList;
