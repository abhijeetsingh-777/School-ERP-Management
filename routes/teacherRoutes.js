import express from "express"
import { addTeacher,getTeachers,deleteTeacher } from "../controllers/teacherController.js"

const router = express.Router()

router.post("/",addTeacher)
router.get("/",getTeachers)
router.delete("/:id",deleteTeacher)

export default router