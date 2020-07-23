const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const counterSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  seq: {
    type: Number,
    required: true,
  },
});

const counter = mongoose.model("Counter", counterSchema);

module.exports = counter;
