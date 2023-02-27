import React from "react";
import { Link } from "react-router-dom";
import AddStudentFormController from "../components/AddStudentsForm/AddStudentFormController";

const AddStudent = () => {
  return (
    <div>
      <Link to={"/"}>Geri</Link>
      <AddStudentFormController />
    </div>
  );
};
export default AddStudent;
