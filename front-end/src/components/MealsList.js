import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Popup from "reactjs-popup";
// Services 
import MealService from "../services/MealService.js";
// Components
import AddMeal from "./AddMeal.js";
import Meal from "./Meal.js";

const MealsList = () => {
  const [meals, setMeals] = useState([]);
  const [currentMeal, setCurrentMeal] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    retrieveMeals();
  }, []);

  const retrieveMeals = () => {
    MealService.getAll()
      .then(res => {
        setMeals(res.data);
        console.log(res.data);
      })
      .catch(err => {
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
      .then(res => {
        console.log(res.data);
        refreshList();
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Meals List</h4>
        {/*--- Buttons ---*/}
        <Popup trigger={<button className="btn btn-success" >Add Meal</button>} position="bottom center">
          <div className="card"><AddMeal/></div>
        </Popup>
        <button
          className="m-3 btn btn-sm btn-success"
          onClick={refreshList}
        >
          Refresh List
        </button>
        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllMeals}
        >
          Remove All
        </button>
        {/*--- List ---*/}
        <ul>
          {meals &&
            meals.map((meal, index) => (
              <li
                className={
                  "card card-container " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveMeal(meal, index)}
                key={index}
              >
                <Meal meal={meal} />
              </li>
            ))}
        </ul>
      </div>
      {/*--- Routes ---*/}
        <div className="container mt-3">
        <Routes>
          <Route path="meals/add" element={<AddMeal />} />
          <Route path="meals/:id" element={<Meal />} />
        </Routes>
      </div>
    </div>
  );
};

export default MealsList;
