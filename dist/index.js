"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = __importDefault(require("./routes/student"));
const express = require("express");
const app = express();
app.use(express.json());
// app.use("/", (req:Request, res:Response)=>{
// res.json({message:"Welcome to apni coding"})
// })
app.use("/student", student_1.default);
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
//loc 3000/student/create
