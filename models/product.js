import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
const Schema = mongoose.Schema;


let ProductSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id: { type: Number, required: true },
  name: { type: String, required: true, max: 100 },
  wholePrice: { type: Number, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: false },
  categoryId: { type: Number, required: true }
});

// Export the model
// ProductSchema.plugin(autoIncrement.plugin, { model: 'Product', field: 'id', startAt: 1, incrementBy: 1 });
export default mongoose.model("Product", ProductSchema);
