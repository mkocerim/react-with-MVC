export default class StudentModel {
  constructor() {
    this.state.id = String(new Date().getTime());
  }

  state = {
    id: "",
    firstName: "",
    lastName: "",
    studentNumber: "",
  };
}
