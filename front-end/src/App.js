import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// CSS
import "./App.css";
// Components
import Register from "./components/Register.js";
import Login from "./components/Login.js";
import Home from "./components/Home.js";
import Profile from "./components/Profile.js";
import User from "./components/User.js";
import Meal from "./components/Meal.js";
import AddMeal from "./components/AddMeal.js";
import MealsList from "./components/MealsList.js";
// Services
import AuthService from "./services/AuthService.js";

// App
function App() {
  const [currentUser, setCurrentUser] = useState(true);
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);
  const logOut = () => {
    AuthService.logout();
  };

  // Render
  return (
    <div className="App">
      {/* --- NavBar --- */}
      <nav className="navbar navbar-expand navbar-dark bg-primary">
        <li>
          <Link to={"/"} className="navbar-brand">
            Calories Tracker
          </Link>
        </li>
        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/meals"} className="nav-link">
                Monday
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/meals"} className="nav-link">
                ...
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/meals"} className="nav-link">
                Sunday
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                Profile
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                User
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user" element={<User />} />
          <Route path="/meals/:id" element={<Meal />} />
          <Route path="/add" element={<AddMeal />} />
          <Route path="/meals" element={<MealsList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
