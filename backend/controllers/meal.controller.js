const db = require("../models");
const Meal = db.meals;

// create and save a new Meal
exports.create = (req, res) => {
  // validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content cannot be empty!" });
    return;
  };
  // create a Meal
  const meal = new Meal({
    title: req.body.title,
    calories: req.body.calories,
  });
  // save Meal in the database
  meal
    .save(meal)
    .then(data => { res.send(data); })
    .catch(err => {
      res.status(500).send({ message: err.message || "Some error occurred while creating the Meal." });
    });
};

// retrieve all Meals from the database
exports.findAll = (req, res) => {
  const title = req.query.title;
  let condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Meal.find(condition)
    .then(data => { res.send(data); })
    .catch(err => {
      res.status(500).send({ message: err.message || "Some error occurred while retrieving meals." });
    });
};

// find a single Meal with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Meal.findById(id)
    .then(data => {
      if (!data) {
        res.status(404).send({ message: `Not found Meal with id=${id}.` });
      } else { 
        res.send(data);
      };
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: err.message || `Error retrieving Meal with id=${id}.` });
    });
};

// update a Meal by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update cannot be empty!" });
  };

  const id = req.params.id;

  Meal.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({ message: `Cannot update Meal with id=${id}. Meal was not found.` });
      } else {
        res.send({ message: "Meal was updated successfully!" });
      };
    })
    .catch(err => {
      res.status(500).send({ message: err.message || `Error updating Meal with id=${id}.` });
    });
};

// delete a Meal with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Meal.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({ message: `Cannot delete Meal with id=${id}. Meal was not found.` });
      } else {
        res.send({ message: "Meal was deleted successfully!" });
      };
    })
    .catch(err => {
      res.status(500).send({ message: err.message || `Could not delete Meal with id=${id}.` });
    });
};

// delete all Meals from the database
exports.deleteAll = (req, res) => {
  Meal.deleteMany({})
    .then(data => {
      res.send({ message: `${data.deletedCount} Meals were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({ message: err.message || "Some error occurred while removing all meals." });
    });
};
