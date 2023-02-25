import axios from "axios";
import React, { useEffect, useState } from "react";
import ListStudentView from "./ListStudentsView";

const ListStudentsController = () => {
  const [students, setStudents] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3004/students")
      .then((res) => {
        setStudents(res.data);
      })
      .catch((err) => {});
  }, []);
  if (!students) return null;

  return <ListStudentView students={students} />;
};

export default ListStudentsController;
