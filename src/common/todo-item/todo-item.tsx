import React from "react";
import "./todo-item-styles.css";

const TodoItem = () => {
  return (
    <div className="todo-item">
      <h2 className="todo-title">Task №1</h2>
      <p className="todo-copy">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sint
        perspiciatis deleniti ab possimus ut? Ducimus fugiat hic velit
        necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repellendus sapiente harum soluta excepturi ut temporibus, at amet
        corporis id asperiores.
      </p>
      <div className="todo-actions">
        <button className="button edit-button">Edit</button>
        <button className="button delete-button">Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
