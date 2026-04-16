import Teacher from "../models/Teacher.js"


export const addTeacher = async (req,res)=>{
  try{

    const teacher = new Teacher(req.body)

    await teacher.save()

    res.json({
      message:"Teacher added successfully",
      teacher
    })

  }catch(error){
    res.status(500).json({error:error.message})
  }
}


export const getTeachers = async (req,res)=>{
  try{

    const teachers = await Teacher.find()

    res.json(teachers)

  }catch(error){
    res.status(500).json({error:error.message})
  }
}



export const deleteTeacher = async (req,res)=>{
  try{

    await Teacher.findByIdAndDelete(req.params.id)

    res.json({
      message:"Teacher deleted successfully"
    })

  }catch(error){
    res.status(500).json({error:error.message})
  }
}