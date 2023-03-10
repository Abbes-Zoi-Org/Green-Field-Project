module.exports = mongoose => {
  let schema = mongoose.Schema(
    {
      title: String,
      calories: Number,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Meal = mongoose.model("meal", schema);
  return Meal;
};
