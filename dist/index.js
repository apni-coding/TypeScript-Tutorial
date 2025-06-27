"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.use("/", (req, res) => {
    res.json({ message: "Welcome to apni coding" });
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
