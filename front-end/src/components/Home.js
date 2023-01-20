import React, { useEffect, useState} from "react";
import UserService from "../services/UserService.js";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (res) => { setContent(res.data); },
      (err) => {
        const cont = (err.response && err.response.data) || err.message || err.toString();
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

export default Home;
