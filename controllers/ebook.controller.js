const ebookService = require("../services/ebook.service");

const ebookController = {
  create: async (req, res) => {
    try {
      const { title, author, category, image, link } = req.body;

      if (!title || !author || !category || !image || !link) {
        return res.status(400).json({ message: "Please, submit all fields for register an ebook." })
      }

      const ebook = await ebookService.create(req.body);

      if (!ebook) {
        return res.status(400).json({ message: "Error creating Ebook." })
      }

      res.status(201).json({
        message: "Ebook created.",
        product: {
          id: ebook._id,
          title,
          author,
          category,
          image,
          link
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

      const ebook = await ebookService.findById(id);

      if (!ebook) {
        return res.status(400).json({ message: "Ebook not found." })
      }

      res.status(200).json(ebook);

    } catch (error) {
      // console.log(error);
      res.status(500).json({ message: error.message });
    }
  },

  findAll: async (req, res) => {
    try {
      const ebooks = await ebookService.findAll();

      if (ebooks.length === 0) {
        return res.status(400).json({ message: "Empty ebook list." })
      }

      res.status(200).json(ebooks);

    } catch (error) {
      // console.log(error);
      res.status(500).json({ message: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;

      const ebook = await ebookService.findById(id);

      if (!ebook) {
        res.status(400).json({ message: "Ebook not found." })
      }

      await ebookService.delete(id);

      res.status(200).json({ message: "Ebook has been deleted." })

    } catch (error) {
      // console.log(error);
      res.status(500).json({ message: error.message });

    }
  },

  update: async (req, res) => {
    try {
      const { title, author, category, image, link } = req.body;

      if (!title && !author && !category && !image && !link) {
        return res.status(400).json({ message: "Please, submit at least one field for update a product." })
      }

      const id = req.params.id;

      const ebook = await ebookService.findById(id);

      if (!ebook) {
        return res.status(400).json({ message: "Ebook not found." })
      }

      await ebookService.update(
        id,
        title,
        author,
        category,
        image,
        link
      );

      res.status(200).json({ message: "Ebook has been updated." })

    } catch (error) {
      // console.log(error);
      res.status(500).json({ message: error.message });

    }
  }
};

module.exports = ebookController;