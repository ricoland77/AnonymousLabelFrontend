import "../css/signup.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import eye from "../images/eye.png";
import eyeSlash from "../images/eye-slash.png";

import axios from "axios";

const Signup = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [checkBox, setCheckBox] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(`http://localhost:4000/user/signup`, {
        email: email,
        password: password,
        username: username,
      });
      if (response.data.token) {
        setUser(response.data.token);
        navigate("/");
      } else {
        alert("Une erreur est survenue, veuillez réssayer.");
      }
    } catch (error) {
      if (error.response.status === 409) {
        setErrorMessage("Cet email a déjà un compte chez nous !");
      }
      console.log(error.message);
    }
  };

  return (
    <div className="signup-container">
      <span>
        <h2>S’inscrire</h2>
      </span>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          placeholder="Nom d'utilisateur"
          type="text"
        />

        <input
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setErrorMessage("");
          }}
          placeholder="E-mail"
          type="email"
        />

        <span className="signup-login-error-message">{errorMessage}</span>

        <input
          type={passwordIsVisible ? "text" : "password"}
          placeholder="Mot de passe"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <div
          onClick={() => {
            setPasswordIsVisible(!passwordIsVisible);
          }}
        >
          {passwordIsVisible ? (
            <img className="eye-btn" src={eyeSlash} alt="Oeil barré" />
          ) : (
            <img className="eye-btn" src={eye} alt="Oeil" />
          )}
        </div>

        <div className="checkbox-container">
          {checkBox ? (
            <div
              className="check-newsletter"
              onClick={() => {
                setCheckBox(!checkBox);
              }}
            >
              ✗
            </div>
          ) : (
            <div
              className="check-newsletter-bis"
              onClick={() => {
                setCheckBox(!checkBox);
              }}
            ></div>
          )}
          <span>S’inscrire à notre Newsletter</span>
        </div>
        <p className="conditions">
          En m’inscrivant, je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité d’Anonymous Label. Je
          confirme avoir au moins 18 ans.
        </p>
        <button type="submit">S’inscrire</button>
      </form>
      <Link to="/login">Déjà membre ? Connecte-toi</Link>
    </div>
  );
};

export default Signup;
