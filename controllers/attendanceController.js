import Attendance from "../models/Attendance.js"


export const markAttendance = async (req,res)=>{
  try{

    const attendance = new Attendance(req.body)

    await attendance.save()

    res.json({
      message:"Attendance marked successfully",
      attendance
    })

  }catch(error){
    res.status(500).json({error:error.message})
  }
}



export const getAttendance = async (req,res)=>{
  try{

    const attendance = await Attendance.find().populate("studentId")

    res.json(attendance)

  }catch(error){
    res.status(500).json({error:error.message})
  }
}