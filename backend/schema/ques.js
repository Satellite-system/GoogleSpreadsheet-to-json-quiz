const mongoose = require("mongoose");
const { Schema } = mongoose;

const quenSchema = new Schema({
  qu: {
    type: String,
    required: true
  },
  optionA: {
    type: String,
    required: true
  },
  optionB: {
    type: String,
    required: true
  },
  optionC: {
    type: String,
    required: true
  },
  optionD: {
    type: String,
    required: true
  },
  ans: {
    type: String,
    required: true
  },
  explanation: {
    type: String,
    default: "Explanation"
  }
});

module.exports = mongoose.model('ques', quenSchema);