import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
import {connection} from "../connection/connection.js"

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  _id: { type: Number, unique: true, required: true },
  name: { type: String, required: true, max: 100 },
  wholePrice: { type: Number, required: true },
  price: { type: Number, required: true },
  categoryId: { type: Number, required: true },
  description: {type: String, required: false}
});

autoIncrement.initialize(connection);
ProductSchema.plugin(autoIncrement.plugin, {
  model: "product",
  field: "_id",
  startAt: 1,
  incrementBy: 1
});
export default mongoose.model("product", ProductSchema);
