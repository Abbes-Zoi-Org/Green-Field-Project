import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// Services
import MealService from "../services/MealService.js";

const Meal = (props) => {
  let navigate = useNavigate();
  const { id } = useParams();
  const initialMealState = {
    id: null,
    title: "",
    calories: null
  };
  const [currentMeal, setCurrentMeal] = useState(initialMealState);
  const [message, setMessage] = useState("");

  const getMeal = (id) => {
    MealService.get(id)
      .then((res) => {
        setCurrentMeal(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => { if (id) getMeal(id); }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentMeal({ ...currentMeal, [name]: value });
  };

  const updateMeal = () => {
    MealService.update(currentMeal.id, currentMeal)
      .then((res) => {
        console.log(res.data);
        setMessage("Updated successfully!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteMeal = () => {
    MealService.remove(currentMeal.id)
      .then((res) => {
        console.log(res.data);
        navigate("/meals");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {currentMeal ? (
        <div className="edit-form">
          <h4>Meal</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentMeal.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="calories">Calories</label>
              <input
                type="number"
                className="form-control"
                id="calories"
                name="calories"
                value={currentMeal.calories}
                onChange={handleInputChange}
              />
            </div>
          </form>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateMeal}
          >
            Update
          </button>
          
          <button className="badge badge-danger mr-2" onClick={deleteMeal}>
            Delete
          </button>

          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Let's add a meal today!</p>
        </div>
      )}
    </div>
  );
};

export default Meal;
