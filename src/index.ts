import { Request, Response } from "express";

const express = require("express");

const app = express();

app.use("/", (req:Request, res:Response)=>{
res.json({message:"Welcome to apni coding"})
})


app.listen(3000, ()=>{
    console.log("Server running on port 3000")
})