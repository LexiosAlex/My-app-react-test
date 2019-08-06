import mongoose from "mongoose";
const Schema = mongoose.Schema;

let categorySchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  categoryId: { type: Number, required: true },
  categoryName: { type: String, required: true, max: 100 },
  categoryTitle: { type: String, required: false }
});

// Export the model
export default mongoose.model("Categories", categorySchema);
