import React, { SyntheticEvent } from "react";
import TextField from "./text-field";
import TextArea from "./text-area";
import { useTodos } from "../store";
import useForm from "../hooks/useForm";

const AddTodoForm = () => {
  const { addTodoItem } = useTodos();
  const { formData, handleInputChange, handleSubmitForm } = useForm();
  const { title, description } = formData;

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    addTodoItem(title.trim(), description.trim());
    handleSubmitForm();
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
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
      <button type="submit" className="button save-button">
        Save
      </button>
    </form>
  );
};

export default AddTodoForm;
