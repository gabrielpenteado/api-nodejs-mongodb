const mongoose = require("mongoose");

const ebookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  category: {
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
  }
},
  { timestamps: true }
);

const Ebook = mongoose.model("Ebook", ebookSchema);

module.exports = Ebook;