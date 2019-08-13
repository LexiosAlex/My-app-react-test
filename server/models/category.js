// import mongoose from "mongoose";
// const Schema = mongoose.Schema;
//
// let categorySchema = new Schema({
//   _id: mongoose.Schema.Types.ObjectId,
//   categoryId: { type: Number, required: true },
//   categoryName: { type: String, required: true, max: 100 },
//   categoryTitle: { type: String, required: false }
// });
//
// // Export the model
// export default mongoose.model("categories", categorySchema);

import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
import {connection} from "../connection/connection";

const Schema = mongoose.Schema;

let categorySchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  categoryId: { type: Number, required: true },
  categoryName: { type: String, required: true, max: 100 },
});

autoIncrement.initialize(connection);
categorySchema.plugin(autoIncrement.plugin, {
  model: "categories",
  field: "categoryId",
  startAt: 1,
  incrementBy: 1
});

export default mongoose.model("categories", categorySchema);
