class AddStudentFormModel {
  state = {
    id: String(new Date().getTime()),
    firstName: "",
    lastName: "",
    studentNumber: "",
  };
}

export default AddStudentFormModel;
