import "../css/login.css";
import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import Loader from "react-loader-spinner";

import eye from "../images/eye.png";
import eyeSlash from "../images/eye-slash.png";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  const navigate = useNavigate();
  // const location = useLocation();
  // const fromPublish = location.state?.fromPublish ? true : null;

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setIsLoading(true);
      const response = await axios.post(
        `${process.env.SERVER_ADRESS}/user/login`,
        {
          email: email,
          password: password,
        }
      );
      if (response.data.token) {
        setUser(response.data.token);
        setIsLoading(false);
        navigate("/");
      } else {
        alert("Une erreur est survenue, veuillez réssayer.");
      }
    } catch (error) {
      if (error.response.status === 401 || error.response.status === 400) {
        setErrorMessage("Mauvais email et/ou mot de passe");
        setIsLoading(false);
      }
      console.log(error.message);
    }
  };

  return (
    <div className="signup-container">
      <span>
        <h2>Se connecter</h2>
      </span>

      <form onSubmit={handleSubmit} className="signup-form">
        <input
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setErrorMessage("");
          }}
          placeholder="Adresse e-mail"
          type="email"
        />

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
            <img className="eye-btn-bis" src={eyeSlash} alt="Oeil barré" />
          ) : (
            <img className="eye-btn-bis" src={eye} alt="Oeil" />
          )}
        </div>

        <span className="signup-login-error-message">{errorMessage}</span>
        {isLoading ? (
          <p>Loading</p>
        ) : (
          <button disabled={isLoading ? true : false} type="submit">
            Se connecter
          </button>
        )}
      </form>
      <Link to="/signup">Nouveau sur ce site ? Inscris-toi</Link>
    </div>
  );
};

export default Login;
