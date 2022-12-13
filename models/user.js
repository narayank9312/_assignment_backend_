var mongoose = require("mongoose");

// Design a User Schema
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});
//Creating the collection Address
module.exports = mongoose.model("User", userSchema);
