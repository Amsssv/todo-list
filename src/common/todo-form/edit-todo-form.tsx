import React, { SyntheticEvent, useContext, useState } from "react";
import "./todo-form-styles.css";
import Context from "../../app";

const EditTodoForm = () => {
  const { updateTodoItem, setCurrentTodo, currentTodo, setIsEditing } =
    useContext(Context);
  const [title, setTitle] = useState(currentTodo.title);
  const [description, setDescription] = useState(currentTodo.description);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    updateTodoItem(currentTodo.id);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="field__line">
        <input
          type="text"
          value={title}
          onChange={({ target: { value } }) => {
            setTitle(value);
            setCurrentTodo({ ...currentTodo, title: value });
          }}
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
          onChange={({ target: { value } }) => {
            setDescription(value);
            setCurrentTodo({ ...currentTodo, description: value });
          }}
        />
      </div>
      <div className="todo-actions">
        <button type="submit" className="button edit-button">
          Edit
        </button>
        <button
          className="button delete-button"
          onClick={() => setIsEditing(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditTodoForm;
