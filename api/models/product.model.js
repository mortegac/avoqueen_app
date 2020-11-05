const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  status: {
    type: Boolean,
    default: true    
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  modifiedAt: {
    type: Date,
    default: new Date(),
  },
});



const Product = mongoose.model("products", ProductSchema);

module.exports = Product;
