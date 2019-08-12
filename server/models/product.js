import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const Schema = mongoose.Schema;


const ProductSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  // id: { type: Number, required: true },
  name: { type: String, required: true, max: 100 },
  wholePrice: { type: Number, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: false },
  categoryId: { type: Number, required: true }
});

export default mongoose.model("Product", ProductSchema);
// autoIncrement.initialize(db);
autoIncrement.initialize(mongoose.connection);
ProductSchema.plugin(autoIncrement.plugin, { model: 'Product', field: 'id', startAt: 1, incrementBy: 1 });


