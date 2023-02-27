import React, { useState } from "react";
import AddStudentFormModel from "./AddStudentFormModal";
import AddStudentFormView from "./AddStudentFormView";

const AddStudentFormController = () => {
  const model = new AddStudentFormModel();
  const [form, setForm] = useState(model.state);

  const onInputChange = (field, value) => {
    var newState = { ...form };
    newState[field] = value;
    setForm(newState);
  };

  const getFormValue = (field) => {
    return form[field];
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <AddStudentFormView
      onSubmit={onSubmit}
      getFormValue={getFormValue}
      onInputChange={onInputChange}
    />
  );
};

export default AddStudentFormController;
