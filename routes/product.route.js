const route = require("express").Router();

const productController = require("../controllers/product.controller");
const validId = require("../middlewares/global.middlewares")

route.post("/", productController.create);
route.get("/:id", validId, productController.findById);
route.get("/", productController.findAll);
route.patch("/:id", validId, productController.update);
route.delete("/:id", validId, productController.delete);


module.exports = route;