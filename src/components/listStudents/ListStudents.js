import React, { useEffect, useState } from "react";
import axios from "axios";

const ListStudents = () => {
  const [students, setStudents] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3004/students")
      .then((res) => {
        console.log(res);
        setStudents(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  /*! isratini kullandigimiz yerler   null, undefined,false "" */
  if (!students) return null;
  return (
    <div>
      {students.map((item) => (
        <div key={item.id}>
          <p>
            {item.firstName} {item.lastName}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
};
export default ListStudents;
