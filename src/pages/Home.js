import React from "react";
import { Link } from "react-router-dom";
import ListStudentsController from "../components/listStudents/ListStudentsController";
import ListStudents2 from "../components/ListStudents2/ListStudents2";

const Home = () => {
  return (
    <div>
      <Link to={"/add-student"}>Add Student</Link>
      <ListStudentsController />
      <hr />
      ------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------
      <hr />
      <ListStudents2 />
    </div>
  );
};

export default Home;
