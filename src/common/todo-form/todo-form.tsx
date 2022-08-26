import React, { SyntheticEvent, useContext, useState } from "react";
import TextField from "../text-field/text-field";
import "./todo-form-styles.css";
import Context from "../../app";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const { addTodo } = useContext(Context);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    addTodo(title, description);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
        id={"1"}
        placeholder={"name"}
        type={"text"}
        value={title}
        name={"name"}
        onChange={setTitle}
      />
      <div className="text-aria__line">
        <textarea
          className="text-aria"
          name="text"
          rows={4}
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <TextField
        id={"3"}
        placeholder={"status"}
        type={"text"}
        value={status}
        name={"status"}
        onChange={setStatus}
      />
      <button className="save-button">Save</button>
    </form>
  );
};

export default TodoForm;
