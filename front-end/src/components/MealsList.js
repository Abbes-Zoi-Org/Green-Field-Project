import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Popup from "reactjs-popup";
// Components
import AddMeal from "./AddMeal.js";
// Services
import MealService from "../services/MealService.js";

const MealsList = () => {
  const [meals, setMeals] = useState([]);
  const [currentMeal, setCurrentMeal] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => { retrieveMeals(); }, []);

  const retrieveMeals = () => {
    MealService.getAll()
      .then((res) => {
        setMeals(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const refreshList = () => {
    retrieveMeals();
    setCurrentMeal(null);
    setCurrentIndex(-1);
  };

  const setActiveMeal = (meal, index) => {
    setCurrentMeal(meal);
    setCurrentIndex(index);
  };

  const removeAllMeals = () => {
    MealService.removeAll()
      .then((res) => {
        console.log(res.data);
        refreshList();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="list row">
      <div className="col-md-6">

        <Popup trigger={
          <button className="m-3 btn btn-lg btn-success">
            Add Meal
          </button>
          } position="bottom center">
            <div className="card-container card">
              <AddMeal />
            </div>
        </Popup>

        <ul className="list-group">
          {meals &&
            meals.map((meal, index) => (
              <li
                className={
                  "list-group-item" + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveMeal(meal, index)}
                key={index}
              >
                {meal.title}
                {meal.calories}
              </li>
            ))}
        </ul>

        <div className="col-md-6">
        {currentMeal && (
          <div>
            <h4>Meal</h4>
            <div>
              <label>
                <strong>Title:</strong>
              </label>{" "}
              {currentMeal.title}
            </div>
            <div>
              <label>
                <strong>Calories:</strong>
              </label>{" "}
              {currentMeal.calories}
            </div>
            <Link
              to={"/meals/" + currentMeal.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        )}
        </div>
        
        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllMeals}
        >
          Delete All
        </button>

      </div>

      <div className="container mt-3">
        <Routes>
          <Route path="/meals/add" element={<AddMeal />} />
        </Routes>
      </div>
    </div>
  );
};

export default MealsList;