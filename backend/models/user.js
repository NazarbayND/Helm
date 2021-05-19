const mongoose = require("mongoose");

const Movie = mongoose.model(
  "User",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
  })
);

module.exports = Movie;
