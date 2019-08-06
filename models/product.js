import mongoose from "mongoose";
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  key: { type: Number, required: true },
  id: { type: Number, required: true },
  name: { type: String, required: true, max: 100 },
  wholePrice: { type: Number, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: false },
  categoryId: { type: Number, required: true }
});

// Export the model
export default mongoose.model("Product", ProductSchema);
