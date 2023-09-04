import "../css/recording.css";

import React from "react";
import { Link } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import Newsletter from "../components/Newsletter";

const InfoRecording = () => {
  return (
    <>
      <main className="container">
        <section className="section-recording">
          <span>
            <h2>Enregistrement</h2>
          </span>
          <div className="all-infos-recording">
            <div className="info-recording">
              <p className="txt-info-recording">20 €/h</p>
            </div>
            <div className="info-recording">
              <p className="txt-info-recording">23 bis, boulevard de Louvain</p>
            </div>
          </div>
          <Link to="/booking/enregistrement">
            <button className="btn-reservation">Réserver</button>
          </Link>

          <h3 className="title-details-recording">Coordonnées</h3>

          <div className="box-details-mix-distance">
            <p className="txt-details-recording-title">Anonymous Record 13</p>
            <p className="txt-details-recording">
              23 bis, boulevard de Louvain, Marseille
            </p>
            <p className="txt-details-recording">06 14 47 13 58</p>
            <p className="txt-details-recording">
              <a
                className="email-details-recording"
                href="mailto:anonymousrecords13@gmail.com"
              >
                anonymousrecords13@gmail.com
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

export default InfoRecording;
