import React, { useState } from "react";
// Services
import AuthService from "../services/AuthService.js";
import green from "../img/green-circle-emoji.png";

const Profile = () => {
  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  return (
    <div className="card-container card">
      <header className="jumbotron">
        <h2 className="text-center">
          {currentUser.user.name}'s profile
          {currentUser.user.status === "online" ? (
            <img className="ms-2" width={20} src={green} alt="Status" />
          ) : (
            "Offline"
          )}
        </h2>
      </header>
      <img
        className="profile-img-card mt-3"
        src={currentUser.user.pic}
        alt="Profile Pic"
      />
      <br></br>
      <div>
        <div className="form-group d-flex justify-content-between">
          <strong>Age:</strong>
          <input
            type="number"
            placeholder="&lt;age&gt;"
            className="tag"
            id="age"
            required
            value={currentUser.user.age}
            onChange={handleInputChange}
            name="age"
          />
        </div>
        <br></br>
        <div className="form-group d-flex justify-content-between">
          <strong>Gender:</strong>
          <input
            type="text"
            placeholder="&lt;gender&gt;"
            className="tag"
            id="gender"
            required
            value={currentUser.user.gender}
            onChange={handleInputChange}
            name="gender"
          />
        </div>
        <br></br>
        <div className="form-group d-flex justify-content-between">
          <strong>Height(cm<sup>2</sup>):</strong>
          <input
            type="number"
            placeholder="&lt;height&gt;"
            className="tag"
            id="height"
            required
            value={currentUser.user.height}
            onChange={handleInputChange}
            name="height"
          />
        </div>
        <br></br>
        <div className="form-group d-flex justify-content-between">
          <strong>Weight(kg):</strong>
          <input
            type="number"
            placeholder="&lt;weight&gt;"
            className="tag"
            id="weight"
            required
            value={currentUser.user.weight}
            onChange={handleInputChange}
            name="weight"
          />
        </div>
      </div>
      <br></br>
      <button className="m-3 btn btn-success">Save Changes</button>
    </div>
  );
};

export default Profile;
