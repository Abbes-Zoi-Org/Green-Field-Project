module.exports = app => {
  const meals = require("../../controllers/meal.controller.js");
  let router = require("express").Router();

  // create a new meal
  router.post("/", meals.create);
  // retrieve all Meals
  router.get("/", meals.findAll);
  // retrieve a single Meal with id
  router.get("/:id", meals.findOne);
  // update a Meal with id
  router.put("/:id", meals.update);
  // delete a Meal with id
  router.delete("/:id", meals.delete);
  // delete all Meals
  router.delete("/", meals.deleteAll);

  app.use("/api/meals", router);
};
