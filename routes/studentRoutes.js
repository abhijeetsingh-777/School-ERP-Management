import express from "express"
import { addStudent,getStudents,deleteStudent } from "../controllers/studentController.js"

const router = express.Router()

router.post("/",addStudent)
router.get("/",getStudents)
router.delete("/:id",deleteStudent)

export default router