import mongoose from "mongoose";
const adminSchema = new mongoose.Schema({
  firstname: { type: "string", required: true },
  lastname: { type: "string", required: true },
  username: { type: "string", required: true },
  password: { type: "string", required: true },
  gender: { type: "string", required: true },
  adress: { type: "string", required: true },
  status: { type: "string", required: true, default: "inactive" },
});

export const adminModel = mongoose.model("admin_model", adminSchema);
