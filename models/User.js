const mongoose = require("mongoose");
// Schema

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});
// Model
user = mongoose.model("user", userSchema);
module.exports = user;
