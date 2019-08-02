const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
  key: { type: Number, required: true },
  id: { type: Number, required: true },
  name: { type: String, required: true, max: 100 },
  wholePrice: { type: Number, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: false },
  categoryId: { type: Number, required: true }
});

// Export the model
module.exports = mongoose.model("Product", ProductSchema);
