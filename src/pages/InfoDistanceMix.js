import "../css/recording.css";

import React from "react";
import { Link } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import Newsletter from "../components/Newsletter";

const InfoDistanceMix = () => {
  return (
    <>
      <main className="container">
        <section className="section-recording">
          <span>
            <h2>Mix à distance</h2>
          </span>
          <div className="all-infos-recording">
            <div className="info-recording">
              <p className="txt-info-recording">20 €/h</p>
            </div>
            <div className="info-recording">
              <p className="txt-info-recording">Rue du Coq Français</p>
            </div>
          </div>
          <Link to="/booking/enregistrement">
            <button className="btn-reservation">Réserver</button>
          </Link>

          <h3 className="title-details-recording">Coordonnées</h3>
          <div className="box-details-mix-distance">
            <p className="txt-details-recording-title">Anonymous Record 93</p>
            <p className="txt-details-recording">
              9, rue du Coq Français, Les Lilas
            </p>
            <p className="txt-details-recording">06 13 56 35 70</p>
            <p className="txt-details-recording">
              <a
                className="email-details-recording"
                href="mailto:contactanonymouslabel@gmail.com"
              >
                contactanonymouslabel@gmail.com
              </a>
            </p>
          </div>
        </section>
      </main>

      {/* Newsletter */}
      <section className="section4">
        <Newsletter />
      </section>
    </>
  );
};

export default InfoDistanceMix;
