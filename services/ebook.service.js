const Ebook = require("../models/Ebook");

const ebookService = {
  create: (body) => Ebook.create(body),
  findAll: () => Ebook.find(),
  findById: (id) => Ebook.findById(id),
  update: (id, title, author, category, image, link) => Ebook.findByIdAndUpdate({ _id: id }, { title, author, category, image, link }),
  delete: (id) => Ebook.findByIdAndDelete(id)
}

module.exports = ebookService;