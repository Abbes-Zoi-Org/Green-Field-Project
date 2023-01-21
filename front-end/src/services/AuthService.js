// Authentication Service
import axios from "axios";

const CT_URL = "http://localhost:5000/caloriestracker/auth/";

const register = (username, email, password, password2) => {
  return axios.post(
    CT_URL + "signup",
    {
    username,
    email,
    password,
    password2,
    }
  );
};

const login = (username, password) => {
  return axios
    .post(
      CT_URL + "login",
      {
      username,
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
