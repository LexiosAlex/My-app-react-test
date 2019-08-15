import mongoose from "mongoose";
const Schema = mongoose.Schema;

let userSchema = new Schema({
  _id: { type:  mongoose.Schema.Types.ObjectId},
  userName: { type: String, required: true, max: 100, unique: true },
  password: {type: String, required: true}
});

export default mongoose.model("users", userSchema);
