import React, { useState, useEffect } from "react";
import { Student } from "../types/Student";

interface Props {
  addOrUpdateStudent: (student: Student) => void;
  selectedStudent: Student | null;
  clearSelection: () => void;
}

const StudentForm: React.FC<Props> = ({
  addOrUpdateStudent,
  selectedStudent,
  clearSelection,
}) => {
  const [student, setStudent] = useState<Student>({
    id: Date.now(),
    name: "",
    age: 0,
    grade: "",
  });

  useEffect(() => {
    if (selectedStudent) setStudent(selectedStudent);
  }, [selectedStudent]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStudent((prev) => ({
      ...prev,
      [name]: name === "age" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addOrUpdateStudent(student);
    setStudent({ id: Date.now(), name: "", age: 0, grade: "" });
    clearSelection();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{selectedStudent ? "Edit" : "Add"} Student</h2>
      <input
        type="text"
        name="name"
        value={student.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="number"
        name="age"
        value={student.age}
        onChange={handleChange}
        placeholder="Age"
        required
      />
      <input
        type="text"
        name="grade"
        value={student.grade}
        onChange={handleChange}
        placeholder="Grade"
        required
      />
      <button type="submit">{selectedStudent ? "Update" : "Add"}</button>
      {selectedStudent && <button onClick={clearSelection}>Cancel</button>}
    </form>
  );
};

export default StudentForm;
