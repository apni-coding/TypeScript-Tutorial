"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const student_1 = require("../controller/student");
const router = (0, express_1.Router)();
router.get("/get", student_1.getAllStudent);
router.post("/create", student_1.createStudent);
// router.put("/update")
exports.default = router;
