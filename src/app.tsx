import React from "react";
import { TodoProvider } from "./store";
import "react-reflex/styles.css";
import { ReflexContainer, ReflexElement, ReflexSplitter } from "react-reflex";
import TodoList from "./components/todo-list/todo-list";
import Content from "./components/todo-form/content";

const App = () => {
  return (
    <TodoProvider>
      <ReflexContainer className="site-content" orientation="vertical">
        <ReflexElement minSize={200}>
          <TodoList />
        </ReflexElement>
        <ReflexSplitter />
        <ReflexElement minSize={320}>
          <Content />
        </ReflexElement>
      </ReflexContainer>
    </TodoProvider>
  );
};

export default App;
