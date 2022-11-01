import React from "react";
import axios from "axios";
import "./index.css";
import { useEffect } from "react";
import { useState } from "react";

function Inscription() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const signup = () => {
   
    axios({
      method: "post",
      url: "http://localhost:5000/createuser",
      data: {
        username: name,
        password: password,
      },
    })
      .then((data) => {
        console.log("user created");
        
      })
      .catch((err) => console.log("voila:", err));
  };

  return (
    <div>
      <div className="container">
        <img src="https://usersplit.com/landrick/images/user/signup.svg" />
        <form className="mx-auto mt-20">
          <div className="text-3xl text-primary">
            <h3> Veuillez vous inscrire</h3>
          </div>

          <div>
            <label htmlFor=" ">Nom</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor=" "> Mot de passe</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-grid gap-2">
            <bu
              className="btn btn-outline-primary btn-block mt-3"
              onClick={signup}
            >
              S'inscrire
            </bu>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Inscription;
