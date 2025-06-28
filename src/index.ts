import { Request, Response } from "express";
import router from "./routes/student";

const express = require("express");

const app = express();

app.use(express.json())
// app.use("/", (req:Request, res:Response)=>{
// res.json({message:"Welcome to apni coding"})
// })

app.use("/student", router)


app.listen(3000, ()=>{
    console.log("Server running on port 3000")
})

//loc 3000/student/create