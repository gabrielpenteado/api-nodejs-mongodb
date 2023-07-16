const Product = require("../models/Product");

const productService = {
  create: (body) => Product.create(body),
  findAll: () => Product.find(),
  findById: (id) => Product.findById(id),
  update: (id, name, image, link, store) => Product.findByIdAndUpdate({ _id: id }, { name, image, link, store }),
  delete: (id) => Product.findByIdAndDelete(id)
}

module.exports = productService;