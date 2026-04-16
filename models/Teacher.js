import mongoose from "mongoose"

const teacherSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  subject:{
    type:String,
    required:true
  },
   role:{
    type:String
  },
  email:{
    type:String
  }
})

export default mongoose.model("Teacher",teacherSchema)