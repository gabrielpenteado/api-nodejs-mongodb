const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  store: {
    type: String,
    required: true
  }
},
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;