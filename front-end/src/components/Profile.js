import React from "react";
// Services
import AuthService from "../services/AuthService.js";

const Profile = () => {
  // const currentUser = AuthService.getCurrentUser();

  return (
    <div className="card-container card">
      <header className="jumbotron">
        <h2>Profile</h2>
        <p>
          <strong>Name:</strong> 
        </p>
        <p>
          <strong>Age:</strong> 
        </p>
        <p>
          <strong>Gender:</strong> 
        </p>
        <p>
          <strong>Height:</strong> 
        </p>
        <p>
          <strong>Weight:</strong> 
        </p>
        <p>
          <strong>BMI:</strong> 
        </p>
      </header>
    </div>
  );
};

export default Profile;
