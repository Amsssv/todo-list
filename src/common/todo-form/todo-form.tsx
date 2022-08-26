import React, { useState } from "react";
import TextField from "../text-field/text-field";
import "./todo-form-styles.css";

const TodoForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  return (
    <form className="todo-form" onSubmit={(e) => e.preventDefault()}>
      <TextField
        id={"1"}
        placeholder={"name"}
        type={"text"}
        value={name}
        name={"name"}
        onChange={setName}
      />
      <TextField
        id={"2"}
        placeholder={"description"}
        type={"text"}
        value={description}
        name={"description"}
        onChange={setDescription}
      />
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
