import React, { useState } from "react";
import { ReflexContainer, ReflexSplitter, ReflexElement } from "react-reflex";
import "react-reflex/styles.css";
import TodoForm from "./common/todo-form/todo-form";
import TodoList from "./common/todo-list/todo-list";

let todoItems = [
  {
    id: 1,
    title: "Task №1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sint perspiciatis deleniti ab possimus ut? Ducimus fugiat hic velit necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sapiente harum soluta excepturi ut temporibus, at amet corporis id asperiores.",
  },
  {
    id: 2,
    title: "Task №2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sint perspiciatis deleniti ab possimus ut? Ducimus fugiat hic velit necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sapiente harum soluta excepturi ut temporibus, at amet corporis id asperiores.",
  },
];

const Context = React.createContext(null);

export const App = () => {
  const [todos, setTodos] = useState(todoItems);

  function addTodo(title: string, description: string) {
    setTodos([
      ...todos,
      { id: todos.length + 1, title: title, description: description },
    ]);
  }

  function removeTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <Context.Provider value={{ addTodo, removeTodo }}>
        <ReflexContainer className="site-content" orientation="vertical">
          <ReflexElement minSize={200}>
            <TodoList todos={todos} />
          </ReflexElement>
          <ReflexSplitter />
          <ReflexElement minSize={320}>
            <TodoForm />
          </ReflexElement>
        </ReflexContainer>
      </Context.Provider>
    </>
  );
};

export default Context;
