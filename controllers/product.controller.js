const productService = require("../services/product.service");

const productController = {
  create: async (req, res) => {
    try {

      const { name, image, link, store } = req.body;

      if (!name || !image || !link || !store) {
        return res.status(400).json({ message: "Please, submit all fields for register a product" })
      }

      const product = await productService.create(req.body);

      if (!product) {
        return res.status(400).json({ message: "Error creating Product." })
      }

      res.status(201).json({
        message: "Product created.",
        product: {
          id: product._id,
          name,
          image,
          link,
          store
        }
      });

    } catch (error) {
      // console.log(error);
      res.status(500).json({ message: error.message });

    }
  },

  findById: async (req, res) => {
    try {
      const id = req.params.id;

      const product = await productService.findById(id);

      if (!product) {
        return res.status(400).json({ message: "Product not found." })
      }

      res.status(200).json(product);

    } catch (error) {
      // console.log(error);
      res.status(500).json({ message: error.message });

    }
  },

  findAll: async (req, res) => {
    try {
      const products = await productService.findAll();

      if (products.length === 0) {
        return res.status(400).json({ message: "Empty product list." })
      }

      res.status(200).json(products);

    } catch (error) {
      // console.log(error);
      res.status(500).json({ message: error.message });

    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;

      const product = await productService.findById(id);

      if (!product) {
        return res.status(404).json({ message: "Product not found." })
      }

      await productService.delete(id);

      res.status(200).json({ message: "Product has been deleted." })

    } catch (error) {
      // console.log(error);
      res.status(500).json({ message: error.message });

    }
  },

  update: async (req, res) => {
    try {
      const { name, image, link, store } = req.body;

      if (!name && !image && !link && !store) {
        return res.status(400).json({ message: "Please, submit at least one field for update a product." })
      }

      const id = req.params.id;

      const product = await productService.findById(id);

      if (!product) {
        return res.status(400).json({ message: "Product not found." })
      }

      await productService.update(
        id,
        name,
        image,
        link,
        store
      );

      res.status(200).json({ message: "Product has been updated." })

    } catch (error) {
      // console.log(error);
      res.status(500).json({ message: error.message });

    }
  }

};

module.exports = productController;

