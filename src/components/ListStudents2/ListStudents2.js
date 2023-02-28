import React from "react";
import { useGetStudents } from "../../hooks/useGetStudents";

const ListStudents2 = () => {
  const { students, error, errorMessage, success, pending } = useGetStudents();

  //const{students,pending,error,errorMessage}=useGetStudents()
  return (
    <div>
      {pending && !success && <h1>Loading.....</h1>}

      {success && students.length > 0 && (
        <>
          {students.map((item) => (
            <div key={item.id}>
              <p>
                {item.firstName} {item.lastName}
              </p>
              <hr />
            </div>
          ))}
        </>
      )}
      {error && <p> {errorMessage}</p>}
    </div>
  );
};

export default ListStudents2;
