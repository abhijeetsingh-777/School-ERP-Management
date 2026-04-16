import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["admin", "teacher", "student","parent","accountant","librarian","transport-manager","exam-coord","headmaster"],
    default: "admin"
  }
})

export default mongoose.model("User", userSchema)