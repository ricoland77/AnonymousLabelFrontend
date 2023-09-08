import "../css/contact.css";
import axios from "axios";
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

import Newsletter from "../components/Newsletter";

import youtube from "../images/youtube-nb.png";
import instagram from "../images/instagram-nb.png";
import facebook from "../images/facebook-nb.png";
import twitter from "../images/twitter-nb.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [SuccessMsg] = useState("");
  const [ErrorMsg, setErrorMsg] = useState("");
  const [valid_token, setValidToken] = useState([]);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const SITE_KEY = process.env.REACT_APP_reCAPTCHA_SITE_KEY;
  const SECRET_KEY = process.env.REACT_APP_reCAPTCHA_SECRET_KEY;

  const captchaRef = useRef(null);
  const handleCaptchaChange = (value) => {
    setIsCaptchaVerified(!!value);
  };

  const contactProject = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    let token = captchaRef.current.getValue();
    captchaRef.current.reset();

    // Vérifier si le reCAPTCHA a été validé
    if (!isCaptchaVerified) {
      setErrorMsg("Veuillez cocher le reCAPTCHA pour continuer.");
      return;
    }

    if (token) {
      let valid_token = await verifyToken(token);
      setValidToken(valid_token);
    }

    if (!name) {
      setErrorMessage("Veuillez saisir un nom");
    } else if (!email) {
      setErrorMessage("Veuillez saisir un e-mail");
    } else if (!email.includes("@")) {
      setErrorMessage("Veuillez saisir un e-mail valide");
    } else if (!email.includes(".")) {
      setErrorMessage("Veuillez saisir un e-mail valide");
    } else if (!subject) {
      setErrorMessage("Veuillez saisir un sujet");
    } else if (!message) {
      setErrorMessage("Veuillez saisir un message");
    } else {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_SERVER_ADDRESS}/contact`,
          {
            name: name,
            email: email,
            subject: subject,
            message: message,
          }
        );
        alert(response.data.message);
      } catch (error) {
        console.log(error.response);
      }
    }
  };

  const verifyToken = async (token) => {
    let APIResponse = [];
    try {
      let response = await axios.post(
        `${process.env.REACT_APP_SERVER_ADDRESS}/verify-token`,
        {
          reCAPTCHA_TOKEN: token,
          Secret_Key: SECRET_KEY,
        }
        // ${process.env.SERVER_ADDRESS}
      );

      APIResponse.push(response["data"]);
      return APIResponse;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="img-center">
          <img
            className="artists"
            src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681813617/AnonymousLabel/contact/contact_jshxyo.webp"
            alt="Contact"
          />
        </div>

        <section className="section-contact">
          <div>
            <p className="text-contact">
              VOUS SOUHAITEZ NOUS SOUMETTRE VOTRE PROJET ?
            </p>
            <p className="text-contact">UNE QUESTION ?</p>
            <p className="text-contact2">DÉVELOPPEMENT D’ARTISTES</p>
            <p className="text-contact3">Les Lilas 93260</p>
            <p className="text-contact3">
              <a href="mailto:contactanonymouslabel@gmail.com">
                contactanonymouslabel@gmail.com
              </a>
            </p>
            <p className="text-contact3">06 14 47 13 58</p>
            <div className="network-logos">
              <Link
                to="https://www.youtube.com/channel/UCvESjnkNe9EFwqvOukAdTwQ"
                target="_blank"
              >
                <img src={youtube} alt="logo youtube" />
              </Link>
              <Link
                to="https://instagram.com/anonymous_label?igshid=YmMyMTA2M2Y="
                target="_blank"
              >
                <img src={instagram} alt="logo instagram" />
              </Link>
              <Link
                to="https://www.facebook.com/anonymouslabel"
                target="_blank"
              >
                <img src={facebook} alt="logo facebook" />
              </Link>
              <Link
                to="https://twitter.com/LabelAnonymous?s=04"
                target="_blank"
              >
                <img src={twitter} alt="logo twitter" />
              </Link>
            </div>
          </div>

          <div className="contact-container">
            <span>
              <h2>Soumettre ton projet</h2>
            </span>

            <div className="login-form">
              <form onSubmit={contactProject} className="contact-form">
                {valid_token.length > 0 && valid_token[0].success === true ? (
                  <h3 className="textSuccess">{SuccessMsg}</h3>
                ) : (
                  <h3 className="textError">{ErrorMsg}</h3>
                )}
                <span className="contact-error-message">{errorMessage}</span>

                <input
                  value={name}
                  type="text"
                  placeholder="Nom"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />

                <input
                  value={email}
                  type="email"
                  placeholder="E-mail"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />

                <input
                  value={subject}
                  type="text"
                  placeholder="Sujet"
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                />

                <textarea
                  rows="6"
                  cols="30"
                  value={message}
                  type="text"
                  placeholder="Message"
                  className="text-area-contact"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />

                <ReCAPTCHA
                  className="recaptcha"
                  sitekey={SITE_KEY}
                  ref={captchaRef}
                  onChange={handleCaptchaChange}
                />

                <button type="submit">Envoyer</button>
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* Newsletter */}
      <section className="section4">
        <Newsletter />
      </section>
    </>
  );
};

export default Contact;
