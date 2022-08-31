import React from "react";
import { TodoProvider } from "./store";
import TodoList from "./components/todo-list";
import TodoForm from "./components/todo-form";
import ResizableSidebar from "./components/resizebale-sidebar";

const App = () => {
  return (
    <TodoProvider>
      <div className="container">
        <ResizableSidebar>
          <TodoList />
        </ResizableSidebar>
        <TodoForm />
      </div>
    </TodoProvider>
  );
};

export default App;
