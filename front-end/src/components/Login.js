import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// Validation 
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
// Services
import AuthService from "../services/AuthService.js";
// Images
import profile from "../img/profile.png";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required
      </div>
    );
  };
};

const Login = () => {
  let navigate = useNavigate();

  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(email, password).then(
        () => {
          navigate("/profile");
          window.location.reload();
        },
        (err) => {
          const resMessage = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();
          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    };
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        {/* --- Profile Image ---*/}
        <img
          src={profile}
          alt="profile-img"
          className="profile-img-card"
        />
        <Form onSubmit={handleLogin} ref={form}>
          {/* --- Email ---*/}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              className="form-control"
              name="email"
              value={email}
              onChange={onChangeEmail}
              validations={[required]}
            />
          </div>
          {/* --- Password ---*/}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </div>
          {/* --- Login Button ---*/}
          <div className="form-group">
            <button className="btn btn-success btn-block" disabled={loading}>
              {loading && ( <span className="spinner-border spinner-border-sm"></span> )}
              <span>Login</span>
            </button>
          </div>
          {/* --- Check ---*/}
          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default Login;
