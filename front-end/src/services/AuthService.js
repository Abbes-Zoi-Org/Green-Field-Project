// Authentication Service
import axios from "axios";

const API_URL = "http://localhost:5000/api/users/";

const register = (name, email, password, password2, pic) => {
  return axios.post(
    API_URL + "register",
    {
    name,
    email,
    password,
    password2,
    pic
    }
  );
};

const login = (email, password) => {
  return axios
    .post(
      API_URL + "login",
      {
      email,
      password,
      }
    )
    .then((res) => {
      if (res.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }
      return res.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
