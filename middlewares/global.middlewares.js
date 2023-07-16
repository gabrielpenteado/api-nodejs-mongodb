const mongoose = require("mongoose");

const validId = (req, res, next) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID." });
  }

  next();
};

module.exports = {
  validId
};