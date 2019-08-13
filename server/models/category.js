import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
import {connection} from "../connection/connection";

const Schema = mongoose.Schema;

let categorySchema = new Schema({
  _id: { type: Number, unique: true, required: true },
  categoryName: { type: String, required: true, max: 100 },
});

autoIncrement.initialize(connection);
categorySchema.plugin(autoIncrement.plugin, {
  model: "categories",
  field: "_id",
  startAt: 1,
  incrementBy: 1
});

export default mongoose.model("categories", categorySchema);
