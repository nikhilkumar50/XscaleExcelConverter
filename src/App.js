import React, { useState } from "react";
import ExcelExportHelper from "./components/ExcelExportHelper";
import "./App.css"; 
import { Link } from "react-router-dom";

const App = () => {
  const [students, setStudents] = useState([]);

  const handleChange = (e, index, key, section) => {
    const { value } = e.target;
    const updatedStudents = [...students];
    updatedStudents[index][section][key] = value;
    setStudents(updatedStudents);
  };

  const handleAddStudent = () => {
    setStudents([
      ...students,
      {
        STUDENT_DETAILS: {
          id: "",
          name: "",
          parentName: "",
          classroom: "",
          subject: "",
          division: "",
          status: "",
        },
        MARKS: {
          maths: "",
          physics: "",
          chemistry: "",
          english: "",
          computerScience: "",
          
        },
      },
    ]);
  };

  const handleRemoveStudent = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
  };

  return (
    <div className="container">
      <ExcelExportHelper data={students} />
      <h3>Student Details</h3>
      <button className="btn btn-primary mb-3" onClick={handleAddStudent}>
        Add Student
      </button>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Enrollment No.</th>
              <th>Student Name</th>
              <th>Parent Name</th>
              <th>Classroom</th>
              <th>Subject</th>
              <th>Division</th>
              <th>Result Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={student.STUDENT_DETAILS.id}
                    onChange={(e) => handleChange(e, index, "id", "STUDENT_DETAILS")}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={student.STUDENT_DETAILS.name}
                    onChange={(e) => handleChange(e, index, "name", "STUDENT_DETAILS")}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={student.STUDENT_DETAILS.parentName}
                    onChange={(e) => handleChange(e, index, "parentName", "STUDENT_DETAILS")}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={student.STUDENT_DETAILS.classroom}
                    onChange={(e) => handleChange(e, index, "classroom", "STUDENT_DETAILS")}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={student.STUDENT_DETAILS.subject}
                    onChange={(e) => handleChange(e, index, "subject", "STUDENT_DETAILS")}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={student.STUDENT_DETAILS.division}
                    onChange={(e) => handleChange(e, index, "division", "STUDENT_DETAILS")}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={student.STUDENT_DETAILS.status}
                    onChange={(e) => handleChange(e, index, "status", "STUDENT_DETAILS")}
                    className="form-control"
                  />
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleRemoveStudent(index)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3>Marks</h3>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Enrollment No.</th>
              <th>Student Name</th>
              <th>Mathematics</th>
              <th>Physics</th>
              <th>Chemistry</th>
              <th>English</th>
              <th>Computer Science</th>
              
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={student.STUDENT_DETAILS.id}
                    onChange={(e) => handleChange(e, index, "id", "STUDENT_DETAILS")}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={student.STUDENT_DETAILS.name}
                    onChange={(e) => handleChange(e, index, "name", "STUDENT_DETAILS")}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={student.MARKS.maths}
                    onChange={(e) => handleChange(e, index, "maths", "MARKS")}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={student.MARKS.physics}
                    onChange={(e) => handleChange(e, index, "physics", "MARKS")}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={student.MARKS.chemistry}
                    onChange={(e) => handleChange(e, index, "chemistry", "MARKS")}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={student.MARKS.english}
                    onChange={(e) => handleChange(e, index, "english", "MARKS")}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={student.MARKS.computerScience}
                    onChange={(e) => handleChange(e, index, "computerScience", "MARKS")}
                    className="form-control"
                  />
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link className="btn btn-primary mb-3" to="/reader">Get Report</Link>
    </div>
  );
};

export default App;
