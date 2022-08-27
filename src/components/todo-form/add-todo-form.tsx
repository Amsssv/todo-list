import React, { SyntheticEvent } from "react";
import "./todo-form-styles.css";
import TextField from "../text-field";
import TextArea from "../text-area";
import { useTodos } from "../../store";
import useForm from "../../hooks/useForm";

const AddTodoForm = () => {
  const { addTodoItem } = useTodos();
  const { formData, handleInputChange } = useForm();
  const { title, description } = formData;

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    addTodoItem(title, description);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
        value={title}
        name="title"
        placeholder="title"
        onChange={handleInputChange}
      />
      <TextArea
        value={description}
        name="description"
        placeholder="description"
        onChange={handleInputChange}
      />
      <button type="submit" className="save-button">
        Save
      </button>
    </form>
  );
};

export default AddTodoForm;
