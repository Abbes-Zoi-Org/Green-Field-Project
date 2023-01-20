import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:5000/caloriestracker/",
  headers: { "Content-type": "application/json" }
});

export default http;
