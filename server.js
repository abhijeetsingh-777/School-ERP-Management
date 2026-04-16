import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import authRoutes from "./routes/authRoutes.js"
import studentRoutes from "./routes/studentRoutes.js"
import teacherRoutes from "./routes/teacherRoutes.js"
import attendanceRoutes from "./routes/attendanceRoutes.js"

dotenv.config()

const app = express()


app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB Connected"))
.catch((err)=> console.log(err))

app.get("/", (req,res)=>{
  res.send("Server Running")
})

app.use("/api/auth", authRoutes)
app.use("/api/students", studentRoutes)
app.use("/api/teachers",teacherRoutes)
app.use("/api/attendance",attendanceRoutes)

app.listen(process.env.PORT, ()=>{
    console.log("Server running on port", process.env.PORT)
})