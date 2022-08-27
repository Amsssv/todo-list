import React, { FC, SyntheticEvent } from "react";
import TextField from "./text-field";
import TextArea from "./text-area";
import { useTodos } from "../store";
import useForm from "../hooks/useForm";

interface Props {
  id: number;
}

const EditTodoForm: FC<Props> = ({ id }) => {
  const {
    state: { items },
    saveEditedTodoItem,
  } = useTodos();
  const currentItem = items.find((item: any) => item.id === id);
  const { formData, handleInputChange } = useForm({
    title: currentItem.title,
    description: currentItem.description,
  });
  const { title, description } = formData;

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    saveEditedTodoItem(id, title, description);
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
      <div className="todo-actions">
        <button type="submit" className="button edit-button">
          Update
        </button>
        <button className="button delete-button" onClick={() => {}}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditTodoForm;
