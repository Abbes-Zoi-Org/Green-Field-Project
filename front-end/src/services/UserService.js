// Data Service (service for accessing data)
import axios from "axios";
import authHeader from "./auth-header.js";

const API_URL = "http://localhost:5000/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUser = () => {
  return axios.get(
    API_URL + "user",
    { headers: authHeader() }
  );
};

const UserService = {
  getPublicContent,
  getUser
};

export default UserService;
