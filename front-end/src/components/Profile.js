import React from "react";
// Services
// import AuthService from "../services/AuthService.js";

const Profile = () => {
  // const currentUser = AuthService.getCurrentUser();
  const currentUser = {
    username: "Zoi",
    age: "29",
    gender: "Female",
    height: 160,
    weight: 65
  }

  return (
    <div className="card-container card">
      <header className="jumbotron">
        <h2 className="text-center">Profile</h2>
      </header>
      <br></br>
        <div className="d-flex justify-content-evenly">
        <div>
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
        </div>
        <div>
        <p>
          {currentUser.username}
        </p>
        <p>
          {currentUser.age}
        </p>
        <p>
          {currentUser.gender}
        </p>
        <p>
          {currentUser.height} cm^2
        </p>
        <p>
          {currentUser.weight} kg
        </p>
        </div>
        </div>

    </div>
  );
};

export default Profile;
