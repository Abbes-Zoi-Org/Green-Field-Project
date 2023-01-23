const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MealSchema = new Schema(
  {
    title: {
      type: String,
    },
    calories: {
      type: Number,
    },
  },
  { timestamps: true }
);
const Meal = mongoose.model("meals", MealSchema);

module.exports = Meal;
