import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    student_id: { type: String, required: true },
    class: { type: String, required: true },
    guardian: {
      father: { type: String, required: true },
      phone: { type: String, required: true },
    },
    password: { type: String, default: "" },
    image: { type: String, default: "" },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const User = mongoose.model("Student", userSchema);
export default User;
