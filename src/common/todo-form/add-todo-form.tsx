import React, { SyntheticEvent, useContext, useState } from "react";
import "./todo-form-styles.css";
import Context from "../../app";

const AddTodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addTodoItem } = useContext(Context);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    addTodoItem(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="field__line">
        <input
          type="text"
          value={title}
          onChange={({ target: { value } }) => setTitle(value)}
          autoComplete="off"
          className="field__input"
          placeholder="title"
        />
      </div>
      <div className="text-aria__line">
        <textarea
          className="text-aria"
          rows={4}
          placeholder="description"
          value={description}
          onChange={({ target: { value } }) => setDescription(value)}
        />
      </div>
      <button className="save-button">Save</button>
    </form>
  );
};

export default AddTodoForm;
