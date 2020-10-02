import mongoose, { Schema } from "mongoose";

const ProductoSchema = new Schema({
  categoria: { type: String, maxlength: 50, unique: true, required: true },
  descripcion: { type: String, maxlength: 255 },
  precioCompra: { type: Number, required: true },
  precioVenta: { type: Number, required: true },
  stock: { type: Number, required: true }
});

export default mongoose.model("producto", ProductoSchema);
