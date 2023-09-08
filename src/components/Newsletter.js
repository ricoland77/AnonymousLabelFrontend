import "../css/home.css";
import axios from "axios";

import { React, useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(email);
  };

  return (
    <section className="sectionNewsL">
      <p>Abonnez-vous à notre newsletter</p>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Saisissez votre adresse e-mail"
          type="text"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />

        <button
          type="submit"
          onClick={async (event) => {
            if (!email) {
              setErrorMessage("Veuillez saisir un e-mail");
            } else if (!email.includes("@")) {
              setErrorMessage("Veuillez saisir un e-mail valide");
            } else {
              try {
                event.preventDefault();
                setErrorMessage("");

                const response = await axios.post(
                  `${process.env.REACT_APP_SERVER_ADDRESS}/`,
                  {
                    email: email,
                  }
                );
                // console.log(response.data.message);
                alert(response.data.message);
              } catch (error) {
                console.log(error.response);
              }
            }
          }}
        >
          Valider
        </button>
        <p
          className="error-message"
          style={{
            fontStyle: "italic",
            fontWeight: "500",
            fontSize: "18px",
            color: "red",
          }}
        >
          {errorMessage}
        </p>
      </form>
    </section>
  );
};

export default Newsletter;
