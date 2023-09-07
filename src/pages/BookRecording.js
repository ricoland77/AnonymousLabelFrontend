import "../css/bookRecording.css";
// import axios from "axios";

import chevronD from "../images/chevron-down.png";
import chevronU from "../images/chevron-up.png";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import getDay from "date-fns/getDay";
// import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
// import subDays from "date-fns/subDays";
// import addDays from "date-fns/addDays";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import fr from "date-fns/locale/fr";
import { Link } from "react-router-dom";
registerLocale("fr", fr);
setDefaultLocale("fr", fr);

const Styles = styled.div`
  .react-datepicker-wrapper,
  .react-datepicker__input-container,
  .react-datepicker__input-container input {
    width: 175px;
  }

  .react-datepicker__navigation-icon {
    color: black;
  }

  .react-datepicker__navigation {
    color: white;
    // background: black;
  }

  .react-datepicker__header {
    background: #ceffe7;
  }

  .react-datepicker__day--today {
    border-radius: 50%;
    font-weight: 700;
    color: gray;
    background: #eefff7;
  }

  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    font-weight: 700;
    color: gray;
    background: #ceffe7;
  }

  .react-datepicker__day--selected {
    border-radius: 50%;
    font-weight: 700;
    color: black;
    background: #50faa8;
  }

  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected {
    color: black;
    background-color: #50faa8;
  }

  //   .react-datepicker__close-icon::before,
  //   .react-datepicker__close-icon::after {
  //     width: 20px;
  //     height: 20px;
  //     box-sizing: border-box;
  //     font-weight: 700;
  //     border: 2px solid black;
  //     color: black;
  //     background-color: #50faa8;
  //   }
`;

const BookRecording = () => {
  const [startDate, setStartDate] = useState("");
  const [chevron, setChevron] = useState(false);

  //   const years = getYear(new Date()) + 1;
  const months = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ];

  const isWeekday = (date) => {
    const day = getDay(date);
    return (
      day !== 1 &&
      day !== 2 &&
      day !== 3 &&
      day !== 4 &&
      day !== 5 &&
      day !== 6 &&
      new Date() < date
    );
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

        <div className="first-container">
          <div className="second-container">
            <div className="select-title">
              <h3 className="title-select-date">
                Sélectionnez une date et un horaire
              </h3>
            </div>
            <DatePicker
              filterDate={isWeekday}
              placeholderText="Sélectionnez une date"
              setDefaultLocale="fr"
              selected={startDate}
              startDate={startDate}
              onChange={(date) => setStartDate(date)}
              showTimeSelect
              excludeTimes={[
                setHours(setMinutes(new Date(), 0), 0),
                setHours(setMinutes(new Date(), 30), 0),
                setHours(setMinutes(new Date(), 0), 1),
                setHours(setMinutes(new Date(), 30), 1),
                setHours(setMinutes(new Date(), 0), 2),
                setHours(setMinutes(new Date(), 30), 2),
                setHours(setMinutes(new Date(), 0), 3),
                setHours(setMinutes(new Date(), 30), 3),
                setHours(setMinutes(new Date(), 0), 4),
                setHours(setMinutes(new Date(), 30), 4),
                setHours(setMinutes(new Date(), 0), 5),
                setHours(setMinutes(new Date(), 30), 5),
                setHours(setMinutes(new Date(), 0), 6),
                setHours(setMinutes(new Date(), 30), 6),
                setHours(setMinutes(new Date(), 0), 7),
                setHours(setMinutes(new Date(), 30), 7),
                setHours(setMinutes(new Date(), 0), 8),
                setHours(setMinutes(new Date(), 30), 8),
                setHours(setMinutes(new Date(), 0), 9),
                setHours(setMinutes(new Date(), 30), 9),
                setHours(setMinutes(new Date(), 0), 23),
                setHours(setMinutes(new Date(), 30), 23),
              ]}
              timeIntervals={30}
              timeCaption="horaire"
              fixedHeight
              inline
              renderCustomHeader={({
                date,
                changeMonth,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
              }) => (
                <div
                  style={{
                    margin: 10,
                    display: "flex",
                    justifyContent: "center",
                    gap: 10,
                  }}
                >
                  <button
                    className="prev-next-btn"
                    onClick={decreaseMonth}
                    disabled={prevMonthButtonDisabled}
                  >
                    {"<"}
                  </button>

                  <select
                    className="months-input"
                    value={months[getMonth(date)]}
                    onChange={({ target: { value } }) =>
                      changeMonth(months.indexOf(value))
                    }
                  >
                    {months.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>

                  <button
                    className="prev-next-btn"
                    onClick={increaseMonth}
                    disabled={nextMonthButtonDisabled}
                  >
                    {">"}
                  </button>
                </div>
              )}
            />
          </div>

          {/* Details du Service */}
          <div className="three-container">
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
              <p className="title-box-in-visible">Enregistrement</p>
              <p className="date-box-in-visible">
                {startDate ? startDate.toString().slice(4, 21) : null}
              </p>
              <p className="txt-box-in-visible">23 bis, bd de Louvain</p>
              <p className="txt-box-in-visible">Oner</p>
              <p className="txt-box-in-visible">20 €/h</p>
            </div>
            <div className="div-next-details">
              {startDate ? (
                <div>
                  <Link
                    to="/booking/enregistrement/formulaire"
                    state={{ startDate: startDate }}
                  >
                    <button className="btn-next-details">Suivant</button>
                  </Link>
                </div>
              ) : (
                <button
                  disabled="disabled"
                  style={{ cursor: "not-allowed" }}
                  className="btn-next-details"
                >
                  Suivant
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

// export default BookRecording;
export default function TableDatePicker() {
  return (
    <Styles>
      <BookRecording />
    </Styles>
  );
}
