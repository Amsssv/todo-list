import React from "react";
import { ReflexContainer, ReflexSplitter, ReflexElement } from "react-reflex";
import "react-reflex/styles.css";
import TodoForm from "./common/todo-form/todo-form";
import TodoList from "./common/todo-list/todo-list";

function App() {
  return (
    <>
      <ReflexContainer className="site-content" orientation="vertical">
        <ReflexElement minSize={200}>
          <TodoList />
        </ReflexElement>
        <ReflexSplitter />
        <ReflexElement minSize={320}>
          <TodoForm />
        </ReflexElement>
      </ReflexContainer>
    </>
  );
}

export default App;
