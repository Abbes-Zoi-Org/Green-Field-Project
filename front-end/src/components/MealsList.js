import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import MealService from "../services/MealService.js";
import Popup from "reactjs-popup";

const MealsList = () => {

  // ALL MEALS
  const [meals, setMeals] = useState([]);

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

  const removeAllMeals = () => {
    MealService.removeAll()
      .then(res => {
        console.log(res.data);
        retrieveMeals();
      })
      .catch(err => {
        console.log(err);
      });
  };
  // END ALL MEALS

  // ADD
  const initialMealState = {
    id: null,
    title: "",
    calories: null
  };

  const [meal, setMeal] = useState(initialMealState);

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
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
      };

  const newMeal = () => {
    setMeal(initialMealState);
  }
  // END-ADD

  // MEAL
  const { id } = useParams();

  const getMeal = id => {
    MealService.get(id)
      .then(res => {
        setMeal(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (id)
      getMeal(id);
  }, [id]);

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
      })
      .catch(err => {
        console.log(err);
      });
  };
  // END MEAL

  return (
    <div className="list row">
      <div className="col-md-6">

        <h4>Meals List</h4>

        <ul className="list-group">
          {meals &&
            meals.map((meal, index) => (
            <div>
              <li
                className="list-group-item"
                key={index}
              >
                {meal.title}
              </li>
              <li
                className="list-group-item"
                key={index}
              >
                {meal.calories}
              </li>
              <button className="badge badge-danger mr-2" onClick={deleteMeal}>
                Delete
              </button>
              <button
                type="submit"
                className="badge badge-success"
                onClick={updateMeal}
              >
                Update
              </button>
            </div>
          ))}
        </ul>

        <Popup trigger={<button className="m-3 btn btn-lg btn-success" onClick={newMeal}>Add Meal</button>}
        position="right center">
          <div className="card">
            <div className="submit-form">
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
                <button onClick={saveMeal} className="btn btn-success">Submit</button>
           </div>
          </div>
        </Popup>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllMeals}
        >
          Remove All
        </button>

      </div>
    </div>
  );
};

export default MealsList;
