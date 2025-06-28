import { Request, Response } from "express";

interface Student {
    id: number,
    name: string,
    age: number,
    address: string
}

let students: Student[] = []
// {
//     id:1,
//     name:"vivek",
//     age: 40,
//     address:"abc"
// }
//Get all students
export const getAllStudent = (req:Request, res:Response):void=>{
    res.json(students)
}

//Create a new student
export const createStudent = (req:Request, res:Response):void=>{
    const {id, name, age, address} = req.body;
    const newStudent:Student = {
        id: id,
        name,
        age,
        address
    }
    students.push(newStudent);
    res.json(newStudent)
}

//Update student by id
export const updateStudent = (req:Request, res:Response):void=>{

}

//Delete student by id
export const deleteStudent = (req:Request, res:Response):void=>{

}