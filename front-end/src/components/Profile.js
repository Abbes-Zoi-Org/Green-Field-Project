import React from "react";
// Services
import AuthService from "../services/AuthService.js";
import green from "../img/green-circle-emoji.png"
const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  // const currentUser = {
  //   username: "Zoi",
  //   age: "29",
  //   gender: "Female",
  //   height: 160,
  //   weight: 65
  // }

  return (
    <div className="card-container card">
      <header className="jumbotron">
        <h2 className="text-center">
          {currentUser.user.name}'s Profile {currentUser.user.status === "online"? <img width={20} src={green}/> : "hi"} {/*we can add green light if user is online*/}        </h2>
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
          <p>{currentUser.user.name}</p>
          <p>{currentUser.user.age}</p>
          <p>{currentUser.user.gender}</p>
          {currentUser.user.height} cm<sup>2</sup>
          <p></p>
          <p>{currentUser.user.weight} kg</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
