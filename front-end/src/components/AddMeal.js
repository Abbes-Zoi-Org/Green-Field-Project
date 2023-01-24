import React, { useState } from "react";
// Services
import MealService from "../services/MealService.js";

const AddMeal = () => {
  const initialMealState = {
    id: null,
    title: "",
    calories: null
  };
  const [meal, setMeal] = useState(initialMealState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setMeal({ ...meal, [name]: value });
  };

  const saveMeal = () => {
    let data = {
      title: meal.title,
      calories: meal.calories
    };

    MealService.create(data)
      .then(res => {
        setMeal({
          id: res.data.id,
          title: res.data.title,
          calories: res.data.calories
        });
        setSubmitted(true);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const newMeal = () => {
    setMeal(initialMealState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h5>Added successfully!</h5>
          {newMeal}
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={meal.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="calories">Calories</label>
            <input
              type="number"
              className="form-control"
              id="calories"
              required
              value={meal.calories}
              onChange={handleInputChange}
              name="calories"
            />
          </div>

          <button onClick={saveMeal} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddMeal;
