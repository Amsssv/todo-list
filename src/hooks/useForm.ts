import React from "react";

const useForm = (initialState = {}) => {
  const [formData, setFormData] = React.useState<{
    title?: string;
    description?: string;
  }>(initialState);

  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return { formData, handleInputChange };
};

export default useForm;
