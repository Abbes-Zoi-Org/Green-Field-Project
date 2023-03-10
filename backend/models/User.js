const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    pic: {
      type: String,
    },
    age: {
      require: true,
      type: String,
    },
    gender: {
      type: String,
    },
    height: {
      type: Number,
    },
    weight: {
      type: Number,
    },
    status: {
      type: String,
      default: "online",
    },
    date: {
      type: Date,
      default: Date.now
    },
    
  },
  { minimize: false }
);

const User = mongoose.model("users", UserSchema);

module.exports = User;
