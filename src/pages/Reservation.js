import "../css/reservation.css";

import React from "react";
import { Link } from "react-router-dom";

import Newsletter from "../components/Newsletter";

const Reservation = () => {
  return (
    <>
      <main className="container">
        <div className="img-center">
          <img
            className="artists"
            src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1682327530/AnonymousLabel/studio/reservation_z8hhfn.jpg"
            alt="Artistes"
          />
        </div>

        <section className="section-reservation">
          <span>
            <h2>Book ta session</h2>
          </span>
          <div className="all-specifications">
            <p className="txt-specification-center">
              Si tu souhaites planifier une session, n’attends plus ! AR13
              Studio est prêt à t’accueillir.
            </p>
          </div>

          {/* SECTION BOX RESERVATION */}
          <section className="all-box-reservation">
            {/*  BOX "Enregistrement" */}
            <div className="box-reservation">
              <Link
                to="/booking/enregistrement"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <img
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1682328174/AnonymousLabel/studio/micro_lusx5w.jpg"
                  alt="Microphone"
                />
              </Link>
              <div className="all-txt-box-reservation">
                <a
                  className="more-info-reservation"
                  href="/informations/recording"
                >
                  En savoir plus ▻
                </a>
                <p className="price-reservation">20 €/heure</p>
                <Link
                  to="/booking/enregistrement"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <button className="btn-reservation">Réserver</button>
                </Link>
              </div>
              <h3 className="title-box-reservation">Enregistrement</h3>
            </div>

            {/*  BOX "Mix" */}
            <div className="box-reservation">
              <Link
                to="/booking/mix"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <img
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1682328174/AnonymousLabel/studio/button_nfrkaf.jpg"
                  alt="bouton de platine"
                />
              </Link>
              <div className="all-txt-box-reservation">
                <a className="more-info-reservation" href="/informations/mix">
                  En savoir plus ▻
                </a>
                <p className="price-reservation">20 €/heure</p>
                <Link
                  to="/booking/mix"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <button className="btn-reservation">Réserver</button>
                </Link>
              </div>
              <h3 className="title-box-reservation">Mix</h3>
            </div>

            {/*  BOX "Mix à distance" */}
            <div className="box-reservation">
              <Link
                to="/booking/mixadistance"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <img
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1682328174/AnonymousLabel/studio/raq_dfbtxm.jpg"
                  alt="table de mixage"
                />
              </Link>
              <div className="all-txt-box-reservation">
                <a
                  className="more-info-reservation"
                  href="/informations/mixadistance"
                >
                  En savoir plus ▻
                </a>
                <p className="price-reservation">20 €/heure</p>
                <Link
                  to="/booking/mixadistance"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <button className="btn-reservation">Réserver</button>
                </Link>
              </div>
              <h3 className="title-box-reservation">Mix à Distance</h3>
            </div>

            {/*  BOX "Mastering" */}
            <div className="box-reservation">
              <Link
                to="/booking/mastering"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <img
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1682328174/AnonymousLabel/studio/sound_ybqpdi.jpg"
                  alt="Microphone"
                />
              </Link>
              <div className="all-txt-box-reservation">
                <a
                  className="more-info-reservation"
                  href="/informations/mastering"
                >
                  En savoir plus ▻
                </a>
                <p className="price-reservation">20 €/heure</p>
                <Link
                  to="/booking/mastering"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <button className="btn-reservation">Réserver</button>
                </Link>
              </div>
              <h3 className="title-box-reservation">Mastering</h3>
            </div>
          </section>
        </section>
      </main>

      {/* Newsletter */}
      <section className="section4">
        <Newsletter />
      </section>
    </>
  );
};

export default Reservation;
