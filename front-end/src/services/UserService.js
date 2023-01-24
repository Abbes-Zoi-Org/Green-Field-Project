// Data Service (service for accessing data)
import axios from "axios";
import authHeader from "./auth-header.js";

const API_URL = "http://localhost:5000/api/";
const getUser = () => {
  return axios.get(
    API_URL + "users",
    { headers: authHeader() }
  );
};

const UserService = { getUser };

export default UserService;
