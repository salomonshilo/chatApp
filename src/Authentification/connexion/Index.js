import React, { useContext } from "react";
import "./style.css";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Objetcontext } from "../../Objetcontext";

function Connexion() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState(" ");
  const {token, setToken } = useContext(Objetcontext)
  

  const signin = () => {
    axios({
      method: "post",
      url: "http://localhost:5000/login",
      data: {
        username: name,
        password: password,
      },
    })
      .then((data) => {
        // console.log("user connected", data)
        window.localStorage.setItem("token", data.data.token);
        window.localStorage.setItem("user_id", data.data.payload.id);
        navigate('/message')
      })
      .catch((err) => console.log("error:", err));
  };
  setToken(localStorage.getItem("token"))
  console.log(token, "trigo");
  return (
    <div>
      <div className="container">
        <img
          src="https://st2.depositphotos.com/1001599/43046/v/950/depositphotos_430460192-stock-illustration-sign-page-abstract-concept-vector.jpg?forcejpeg=true "
          className="img"
        />
        <form action=" " methode="post" className="mx-auto ">
          <h3 className="text-3xl text-primary mb-4">
            Veuillez vous connecter
          </h3>
          <div>
            <label htmlFor=" "> Nom</label>
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

          <div className="container_button">
            <Link class="nav-link" to="/signUp">
              <p className="text_signup">Pas de compte? inscrivez-vous </p>
            </Link>
           
              <div className="btn btn-outline-primary mt-3" onClick={signin}>
                Connexion
              </div>
            
          </div>
        </form>
      </div>
    </div>
  );
}

export default Connexion;
