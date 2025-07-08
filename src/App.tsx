import React, { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudetnList";
import { Student } from "./types/Student";

const App: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const addOrUpdateStudent = (student: Student) => {
    setStudents((prev) =>
      prev.some((s) => s.id === student.id)
        ? prev.map((s) => (s.id === student.id ? student : s))
        : [...prev, student]
    );
  };

  const handleDelete = (id: number) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
    if (selectedStudent?.id === id) setSelectedStudent(null);
  };

  const handleEdit = (student: Student) => {
    setSelectedStudent(student);
  };

  const clearSelection = () => {
    setSelectedStudent(null);
  };

  return (
    <div>
      <h1>Student Management</h1>
      <StudentForm
        addOrUpdateStudent={addOrUpdateStudent}
        selectedStudent={selectedStudent}
        clearSelection={clearSelection}
      />
      <StudentList
        students={students}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;
