import "../css/bookRecording.css";
import chevronD from "../images/chevron-down.png";
import chevronU from "../images/chevron-up.png";

import axios from "axios";

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import fr from "date-fns/locale/fr";
registerLocale("fr", fr);
setDefaultLocale("fr", fr);

const BookRecordingForm = () => {
  const location = useLocation();
  const startDate = location.state?.startDate;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sms, setSms] = useState(false);
  const [message, setMessage] = useState("");
  const [session] = useState("Enregistrement");
  const [date, setDate] = useState(
    startDate ? startDate.toString().slice(4, 21) : null
  );
  const [, setErrorMessage] = useState(null);
  const [chevron, setChevron] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="container">
      <section className="all-book-recording">
        <span>
          <h2>Enregistrement</h2>
        </span>
        <p>
          Consultez nos disponibilités et réservez la date et l’heure qui vous
          conviennent.
        </p>

        <form onSubmit={handleSubmit} className="form-container">
          <div className="first-form-container">
            <div className="second-container">
              <div className="select-title">
                <h3 className="title-select-date">
                  Renseignez vos informations
                </h3>
              </div>
              {/* <Link to="/login">Déjà membre ? Connecte-toi</Link> */}
              <div className="input-name-email">
                <input
                  className="input-reservation"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  placeholder="Name"
                  type="text"
                  required="required"
                />
                <input
                  className="input-reservation"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  placeholder="E-mail"
                  type="email"
                  required="required"
                />

                <input
                  className="input-reservation"
                  value={phone}
                  onChange={(event) => {
                    setPhone(event.target.value);
                  }}
                  placeholder="Numéro de téléphone (facultatif)"
                  type="tel"
                />

                <div className="checkbox-container-bis">
                  {sms ? (
                    <div
                      className="check-newsletter"
                      onClick={() => {
                        setSms(!sms);
                      }}
                    >
                      ✗
                    </div>
                  ) : (
                    <div
                      className="check-newsletter-bis"
                      onClick={() => {
                        setSms(!sms);
                      }}
                    ></div>
                  )}
                  <span>
                    Je souhaite recevoir un rappel par SMS 24 heures avant le
                    début de cette séance.
                  </span>
                </div>

                <textarea
                  name="message"
                  maxLength={1000}
                  className="textarea-reservation"
                  value={message}
                  onChange={(event) => {
                    setMessage(event.target.value);
                  }}
                  placeholder="Ajouter un message"
                  type="text"
                ></textarea>
              </div>
            </div>

            {/* Details du Service */}
            <div className="four-container">
              <div
                className="service-details"
                onClick={() => {
                  setChevron(!chevron);

                  if (
                    getComputedStyle(document.getElementById("box-in-visible"))
                      .display !== "none"
                  ) {
                    document.getElementById("box-in-visible").style.display =
                      "none";
                  } else {
                    document.getElementById("box-in-visible").style.display =
                      "block";
                  }
                }}
              >
                <div className="service-details">
                  <p className="title-service-details">Détails du service</p>
                  {chevron ? (
                    <img
                      id="chevron-down"
                      className="chevron-details"
                      src={chevronD}
                      alt="chevron down"
                    />
                  ) : (
                    <img
                      id="chevron-up"
                      className="chevron-details"
                      src={chevronU}
                      alt="chevron down"
                    />
                  )}
                </div>
              </div>

              <div id="box-in-visible">
                <input
                  className="title-box-in-visible"
                  type="text"
                  value={session}
                  name="Enregistrement"
                  readOnly="readonly"
                />

                <input
                  className="date-box-in-visible"
                  type="text"
                  onChange={(event) => {
                    setDate(event.target.value);
                  }}
                  value={date}
                  name="date"
                  readOnly="readonly"
                />

                <p className="txt-box-in-visible">23 bis, bd de Louvain</p>
                <p className="txt-box-in-visible">Oner</p>
                <p className="txt-box-in-visible">1 h</p>
              </div>
              <div className="payement-details">
                <p className="title-payement-details">Détails du paiement</p>
                <div className="total-line">
                  <p className="txt-total-line">Total</p>
                  <p className="txt-total-line">20 €</p>
                </div>
                <div className="total-line">
                  <p className="txt-total-line">
                    À payer maintenant (accompte)
                  </p>
                  <p className="txt-total-line">10 €</p>
                </div>
                <div className="total-line">
                  <p className="txt-total-line">À payer plus tard</p>
                  <p className="txt-total-line">10 €</p>
                </div>
              </div>
              <div className="div-next-details">
                {!name || !email ? (
                  <button
                    disabled="disabled"
                    style={{ cursor: "not-allowed" }}
                    className="btn-next-details"
                  >
                    Suivant
                  </button>
                ) : (
                  <button
                    className="btn-next-details"
                    type="submit"
                    onClick={async (event) => {
                      try {
                        event.preventDefault();
                        setErrorMessage("");

                        const response = await axios.post(
                          `${process.env.SERVER_ADRESS}/booking/enregistrement/formulaire`,
                          {
                            name: name,
                            email: email,
                            phone: phone,
                            sms: sms,
                            message: message,
                            session: session,
                            date: date,
                          }
                        );
                        console.log("ok =>", response.data.message);
                        alert(response.data.message);
                      } catch (error) {
                        console.log(error.response);
                      }
                    }}
                  >
                    Réserver
                  </button>
                )}
              </div>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default BookRecordingForm;
