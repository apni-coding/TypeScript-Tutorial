import React from "react";
import { Student } from "../types/Student";

interface Props {
  students: Student[];
  onEdit: (student: Student) => void;
  onDelete: (id: number) => void;
}

const StudentList: React.FC<Props> = ({ students, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Student List</h2>
      {students.length === 0 && <p>No students added yet.</p>}
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} | Age: {student.age} | Grade: {student.grade}
            <button onClick={() => onEdit(student)}>Edit</button>
            <button onClick={() => onDelete(student.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
