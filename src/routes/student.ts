import { Router } from "express";
import { createStudent, getAllStudent } from "../controller/student";


const router = Router();

router.get("/get", getAllStudent);
router.post("/create", createStudent);
// router.put("/update")

export default router;