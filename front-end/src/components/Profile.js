import React from "react";
// Services
import AuthService from "../services/AuthService.js";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="container">
      <header className="jumbotron">
        <h1>Profile</h1>
        <h3>
          <strong>Name:</strong> {currentUser.name}
        </h3>
        <p>
          <strong>Age:</strong> {currentUser.age}
        </p>
        <p>
          <strong>Gender:</strong> {currentUser.gender}
        </p>
        <p>
          <strong>Height:</strong> {currentUser.height}
        </p>
        <p>
          <strong>Weight:</strong> {currentUser.weight}
        </p>
        <p>
          <strong>BMI:</strong> {currentUser.bmi}
        </p>
      </header>
    </div>
  );
};

export default Profile;
