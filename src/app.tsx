import React, { useEffect, useState } from "react";
import { ReflexContainer, ReflexSplitter, ReflexElement } from "react-reflex";
import "react-reflex/styles.css";
import AddTodoForm from "./common/todo-form/add-todo-form";
import TodoList from "./common/todo-list/todo-list";
import EditTodoForm from "./common/todo-form/edit-todo-form";

const Context = React.createContext(null);

export const App = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodoItem(title: string, description: string) {
    setTodos([
      ...todos,
      { id: todos.length + 1, title: title, description: description },
    ]);
  }

  function removeTodoItem(id: number) {
    setTodos(todos.filter((todo: { id: number }) => todo.id !== id));
  }

  function updateTodoItem(id: number) {
    setTodos(
      todos.map((todo: { id: number }) => {
        return todo.id === id ? currentTodo : todo;
      })
    );
    setIsEditing(false);
  }

  return (
    <>
      <Context.Provider
        value={{
          addTodoItem,
          removeTodoItem,
          updateTodoItem,
          setIsEditing,
          setCurrentTodo,
          currentTodo,
        }}
      >
        <ReflexContainer className="site-content" orientation="vertical">
          <ReflexElement minSize={200}>
            <TodoList todos={todos} />
          </ReflexElement>
          <ReflexSplitter />
          <ReflexElement minSize={320}>
            {isEditing ? <EditTodoForm /> : <AddTodoForm />}
          </ReflexElement>
        </ReflexContainer>
      </Context.Provider>
    </>
  );
};

export default Context;
