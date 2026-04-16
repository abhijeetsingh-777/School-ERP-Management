import Student from "../models/Student.js"


export const addStudent = async (req,res)=>{
  try{

    const student = new Student(req.body)

    await student.save()

    res.json({
      message:"Student added successfully",
      student
    })

  }catch(error){
    res.status(500).json({error:error.message})
  }
}



export const getStudents = async (req,res)=>{
  try{

    const students = await Student.find()

    res.json(students)

  }catch(error){
    res.status(500).json({error:error.message})
  }
}



export const deleteStudent = async (req,res)=>{
  try{

    await Student.findByIdAndDelete(req.params.id)

    res.json({
      message:"Student deleted successfully"
    })

  }catch(error){
    res.status(500).json({error:error.message})
  }
}