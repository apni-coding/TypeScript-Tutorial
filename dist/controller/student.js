"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudent = exports.updateStudent = exports.createStudent = exports.getAllStudent = void 0;
let students = [];
// {
//     id:1,
//     name:"vivek",
//     age: 40,
//     address:"abc"
// }
//Get all students
const getAllStudent = (req, res) => {
    res.json(students);
};
exports.getAllStudent = getAllStudent;
//Create a new student
const createStudent = (req, res) => {
    const { id, name, age, address } = req.body;
    const newStudent = {
        id: id,
        name,
        age,
        address
    };
    students.push(newStudent);
    res.json(newStudent);
};
exports.createStudent = createStudent;
//Update student by id
const updateStudent = (req, res) => {
};
exports.updateStudent = updateStudent;
//Delete student by id
const deleteStudent = (req, res) => {
};
exports.deleteStudent = deleteStudent;
