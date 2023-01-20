import React, { useEffect, useState } from "react";
// Services 
import UserService from "../services/UserService.js";

const User = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getUser().then(
      (res) => { setContent(res.data); },
      (err) => {
        const cont = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();
        setContent(cont);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
};

export default User;
