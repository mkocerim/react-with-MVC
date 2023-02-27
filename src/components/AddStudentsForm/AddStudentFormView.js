import React from "react";

const AddStudentFormView = ({ onInputChange, getFormValue, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="firstName">Ögrenci Adi</label>
        <input
          onChange={(event) => onInputChange("firstName", event.target.value)}
          value={getFormValue("firstName")}
          id="firstName"
          type={"text"}
        />
      </div>
      <div>
        <label htmlFor="lastName">Ögrenci Soyadi</label>
        <input
          onChange={(event) => onInputChange("lastName", event.target.value)}
          value={getFormValue("lastName")}
          id="lastName"
          type={"text"}
        />
      </div>
      <div>
        <label htmlFor="studentNumber">Ögrenci No</label>
        <input
          onChange={(event) =>
            onInputChange("studentNumber", event.target.value)
          }
          value={getFormValue("studentNumber")}
          id="studentNumber"
          type={"text"}
        />
      </div>
      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default AddStudentFormView;
