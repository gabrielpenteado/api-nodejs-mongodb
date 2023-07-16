const route = require("express").Router();

const ebookController = require("../controllers/ebook.controller");
const validId = require("../middlewares/global.middlewares")

route.post("/", ebookController.create);
route.get("/:id", validId, ebookController.findById);
route.get("/", ebookController.findAll);
route.patch("/:id", validId, ebookController.update);
route.delete("/:id", validId, ebookController.delete);


module.exports = route;