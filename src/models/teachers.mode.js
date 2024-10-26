import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    teacher_role: {
      type: String,
      enum: ["Assistant", "Assistant_HM", "HM"],
      default: "Assistant",
      required: true,
    },
    info: {
      nid_no: { type: Number, required: true },
      phone: { type: String, required: true },
      address: { type: String, required: true },
    },
    password: { type: String, default: "" },
    image: { type: String, default: "" },
  },
  { timestamps: true }
);

const User = mongoose.model("Teacher", userSchema);
export default User;
