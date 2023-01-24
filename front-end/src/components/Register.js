import React, { useRef, useState } from "react";
// Validation
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
// Images
import profile from "../img/profile.png"
// Services
import AuthService from "../services/AuthService.js";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required
      </div>
    );
  };
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email
      </div>
    );
  };
};

const validUsername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters
      </div>
    );
  };
};

const validPassword = (value) => {
  if (value.length < 8 || value.length > 30) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 8 and 30 characters
      </div>
    );
  };
};

const validPassword2 = (value, password) => {
  if ((parseInt(value) === parseInt(password))) {
    return (
      <div className="alert alert-danger" role="alert">
        Passwords do not match.
      </div>
    );
  };
};

const Register = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  
  //Picture

  const inputRef = useRef(null);
  const addFile = () => {
    inputRef.current.click();
  };
  const [picture, setPic] = useState(null);
  // eslint-disable-next-line
  const [picUpload, setPicupload] = useState(false);
  const [picPreview, setPicpreview] = useState(null);
  function picValidate(e) {
    const file = e.target.files[0];
    if (file.size >= 1048576) {
      alert("Please choose a smaller profile picture. Max size 1MB");
    } else {
      setPic(file);
      setPicpreview(URL.createObjectURL(file));
    }
  }
  let pic;
  async function uploadPic() {
    const data = new FormData();
    data.append("file", picture);
    data.append("upload_preset", "qpidzcci");
    try {
      setPicupload(true);
      let res = await fetch(
        "https://api.cloudinary.com/v1_1/dgnjgjsto/image/upload",
        {
          method: "post",
          body: data,
        }
      );
      const urlData = await res.json();
      setPicupload(false);
      pic = urlData.url.toString();
      console.log("%%%%" + pic )
    } catch (error) {
      setPicupload(false);
    }
  }

  const onChangeUsername = (e) => {
    const name = e.target.value;
    setUsername(name);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangePassword2 = (e) => {
    const password2 = e.target.value;
    setPassword2(password2);
  };

  async function handleRegister(e) {
    e.preventDefault();
    await uploadPic();
    setMessage("");
    setSuccessful(false);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
    AuthService.register(name, email, password, password2, pic).then(
        (res) => {
          console.log(res.status)
          setMessage(res.data.message);
          setSuccessful(true);
        },
        (err) => {
          const resMessage = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();
          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    };
  };

  return (
    <div className="col-md-12">
      <div className="card card-container" >
          <img
            src={picPreview || profile}
            alt="profile-img"
            className="profile-img-card"
            onClick={addFile}
          />
            <input
              ref={inputRef}
              type="file"
              className="file-add"
              id="profile-pic"
              hidden
              accept="image/png, image/jpeg image/jpg"
              onChange={picValidate}
            />
        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              {/*--- Username ---*/}
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <Input
                  type="text"
                  className="form-control"
                  name="username"
                  value={name}
                  onChange={onChangeUsername}
                  validations={[required, validUsername]}
                />
              </div>
              {/*--- Email ---*/}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Input
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                />
              </div>
              {/*--- Password ---*/}
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, validPassword]}
                />
              </div>
              {/*--- Confirm Password ---*/}
              <div className="form-group">
                <label htmlFor="password2">Confirm Password</label>
                <Input
                  type="password"
                  className="form-control"
                  name="password2"
                  value={password2}
                  onChange={onChangePassword2}
                  validations={[required, validPassword2]}
                />
              </div>
              {/*--- Sign Up ---*/}
              <div className="form-group">
                <button className="btn btn-success btn-block">Sign Up</button>
              </div>
            </div>
          )}
          {/*--- Check ---*/}
          {message && (
            <div className="form-group">
              <div
                className={ successful ? "alert alert-success" : "alert alert-danger" }
                role="alert"
              >
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

export default Register;
