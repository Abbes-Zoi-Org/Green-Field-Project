import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import MealService from "../services/MealService.js";

const Meal = ({meal}) => {
  let navigate = useNavigate();

  const updateMeal = () => {
    MealService.update(meal.id, meal)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const deleteMeal = () => {
    MealService.remove(meal.id)
      .then(res => {
        console.log(res.data);
        navigate("/meals");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      {meal && (
        <div className="edit-form">
          <div><strong>Title:</strong>{" "}{meal.title}</div>
          <div><strong>Calories:</strong>{" "}{meal.calories}</div>
          <button 
            className="btn btn-danger mr-2"
            onClick={deleteMeal}
            >
              Delete
          </button>
          <button
            type="submit"
            className="btn btn-success"
            onClick={updateMeal}
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
};

export default Meal;
