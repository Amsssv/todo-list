import React from "react";

const useForm = (initialState = { description: "", title: "" }) => {
  const [formData, setFormData] = React.useState<{
    title?: string;
    description?: string;
  }>(initialState);

  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = () => {
    setFormData({ description: "", title: "" });
  };

  return { formData, handleInputChange, handleSubmitForm };
};

export default useForm;
