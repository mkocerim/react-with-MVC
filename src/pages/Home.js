import React from "react";
import { Link } from "react-router-dom";
import ListStudentsController from "../components/listStudents/ListStudentsController";

const Home = () => {
  return (
    <div>
      <Link to={"/add-student"}>Add Student</Link>
      <ListStudentsController />
    </div>
  );
};

export default Home;
