// Data Service (service for accessing data)
import axios from "axios";
import authHeader from "./auth-header.js";

const CT_URL = "http://localhost:5000/caloriestracker/test/";

const getPublicContent = () => {
  return axios.get(CT_URL + "all");
};

const getUser = () => {
  return axios.get(
    CT_URL + "user",
    { headers: authHeader() }
  );
};

const UserService = {
  getPublicContent,
  getUser
};

export default UserService;
