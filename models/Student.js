import mongoose from "mongoose"

const studentSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  class:{
    type:String,
    required:true
  },
  section:{
    type:String
  },
  rollNumber:{
    type:String
  },
  email:{
    type:String
  }
})

export default mongoose.model("Student",studentSchema)