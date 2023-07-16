const router = require("express").Router();

const productRoute = require("./product.route");
const ebookRoute = require("./ebook.route");

router.use("/product", productRoute);
router.use("/ebook", ebookRoute);

module.exports = router;