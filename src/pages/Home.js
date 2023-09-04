import "../css/home.css";
import React from "react";

// import { useState } from "react";
import { Link } from "react-router-dom";

import Newsletter from "../components/Newsletter";

import lhvisual from "../images/lhvisual.jpg";
import scred from "../images/scred.jpg";
import rumble from "../images/rumble.jpg";
import coverland from "../images/coverland.jpg";
import scpp from "../images/scpp.jpg";
import imusician from "../images/imusician.jpg";
import sacem from "../images/sacem.jpg";

const Home = () => {
  return (
    <>
      <main className="container">
        <div className="img-center">
          <img
            className="artists"
            src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681904960/AnonymousLabel/Accueil/groupe04_aernra.jpg"
            alt="Artistes"
          />
        </div>

        {/* à la UNE */}
        <section className="section1">
          <span>
            <h2>Artistes à la Une</h2>
          </span>

          <div className="all-artists-box">
            {/* Degy le Resk.p */}
            <div className="artist-box">
              <img
                className="img-artist"
                src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681800871/AnonymousLabel/portraits-artistes/degy_hhehvk.webp"
                alt="visual artist(s)"
              />
              <span>
                <Link to="/artist/degy">
                  <h3
                    className="name"
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    Degy Le Resk.p
                  </h3>
                </Link>
              </span>
            </div>

            {/* Saf Noruff */}
            <div className="artist-box">
              <img
                className="img-artist"
                src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680854375/AnonymousLabel/Accueil/saf-noruff_ntpqx9.jpg"
                alt="visual artist(s)"
              />
              <span>
                <Link to="/artist/safnoruff">
                  <h3
                    className="name"
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    Saf Noruff
                  </h3>
                </Link>
              </span>
            </div>

            {/* Oner */}
            <div className="artist-box">
              <img
                className="img-artist"
                src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680854376/AnonymousLabel/Accueil/oner_gigydi.jpg"
                alt="visual artist(s)"
              />
              <span>
                <Link to="/artist/oner">
                  <h3
                    className="name"
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    Oner
                  </h3>
                </Link>
              </span>
            </div>

            {/* Evil Venom */}
            <div className="artist-box">
              <img
                className="img-artist"
                src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680854376/AnonymousLabel/Accueil/evil-venom_qqzovy.jpg"
                alt="visual artist(s)"
              />
              <span>
                <Link to="/artist/evilvenom">
                  <h3
                    className="name"
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    Evil Venom
                  </h3>
                </Link>
              </span>
            </div>

            {/* Scam Leon */}
            <div className="artist-box">
              <img
                className="img-artist"
                src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680854375/AnonymousLabel/Accueil/scam-leon_psyykp.jpg"
                alt="visual artist(s)"
              />
              <span>
                <Link to="/artist/scamleon">
                  <h3
                    className="name"
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    Scam Leon
                  </h3>
                </Link>
              </span>
            </div>

            {/* 2mezur */}
            <div className="artist-box">
              <img
                className="img-artist"
                src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680854496/AnonymousLabel/Accueil/2mezur_bfzec9.webp"
                alt="visual artist(s)"
              />
              <span>
                <Link to="/artist/2mezur">
                  <h3
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                    className="name"
                  >
                    2mezur
                  </h3>
                </Link>
              </span>
            </div>
          </div>

          {/* Lien vers la page Artistes */}
          <Link to="/artists" className="go-to-artists">
            <p
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Voir tous les artistes Anonymous Label
            </p>
          </Link>
        </section>

        {/* Présentation */}
        <section className="section2">
          <span>
            <h2>Qui sommes-nous ?</h2>
          </span>
          <p>
            L'histoire d’Anonymous Label débute à Paris en 2018, fondé par Yedi,
            passionné de musique et de culture. Après plus de 15 ans passé en
            tant qu’ingénieur du son de son propre studio, il a pu travailler et
            rencontrer beaucoup d’artistes de différents univers musicaux. Tout
            au long de ces années « J’ai pu constater un manque de structure
            pour les artistes indépendants ». Le label est chargé de produire,
            d’éditer et de distribuer les enregistrements d’artistes de
            différents univers musicaux à l’échelle internationale.
          </p>
          <h3 className="subtitle">Notre objectif</h3>
          <p>
            - Vous êtes concepteur de son, musicien, Dj, interprète, auteur,
            etc., vous avez un projet musical que vous souhaiteriez voir se
            concrétiser mais vous ne disposez pas du matériel, des compétences
            suffisantes ou encore manque de finance ?
          </p>
          <p>
            - À l’écoute de vos envies et de vos idées, nous vous orienterons et
            vous apporterons l’assistance technique qu’il vous manque. Nous vous
            sensibiliserons également aux droits juridiques et aux formalités
            administratives associés à votre statut d’artiste afin d’améliorer
            vos démarches.
          </p>
          <p>
            - N'hésitez pas à nous contacter afin de discuter avec nous de vos
            envies et de vos projets.
          </p>
          <p className="txt-end">
            - Ensemble, nous ferons bouger la scène musicale.
          </p>
        </section>

        {/* Partenaires */}
        <section className="section3">
          <span>
            <h2>Nos partenaires</h2>
          </span>

          <div className="all-partners">
            <div className="partner">
              <Link to="https://www.instagram.com/lh.visual" target="_blank">
                <img
                  className="logo-partner"
                  src={lhvisual}
                  alt="Partner logo"
                />
              </Link>
              <h4>LH Visual</h4>
              <p>Photographe</p>
            </div>
            <div className="partner">
              <Link to="https://scredboutique.com/" target="_blank">
                <img className="logo-partner" src={scred} alt="Partner logo" />
              </Link>
              <h4>Scred Boutique</h4>
              <p>Temple du Hip-hop</p>
            </div>
            <div className="partner">
              <Link to="https://rumble-clothing.com/" target="_blank">
                <img
                  className="logo-partner"
                  src={rumble}
                  alt="Rumble Clothing logo"
                />
              </Link>

              <h4>Rumble Clothing</h4>
              <p>Marque de vêtement</p>
            </div>
            <div className="partner">
              <Link
                to="https://www.instagram.com/coverland_graphiste"
                target="_blank"
              >
                <img
                  className="logo-partner"
                  src={coverland}
                  alt="Partner logo"
                />
              </Link>
              <h4>Coverland</h4>
              <p>Graphiste</p>
            </div>
            <div className="partner">
              <Link to="https://www.scpp.fr" target="_blank">
                <img className="logo-partner" src={scpp} alt="Partner logo" />
              </Link>
              <h4>SCPP</h4>
              <p>Société civile des…</p>
            </div>
            <div className="partner">
              <Link to="https://imusician.pro/fr" target="_blank">
                <img
                  className="logo-partner"
                  src={imusician}
                  alt="Partner logo"
                />
              </Link>
              <h4>iMusician</h4>
              <p>Distributeur digital</p>
            </div>
            <div className="partner">
              <Link to="https://www.sacem.fr" target="_blank">
                <img className="logo-partner" src={sacem} alt="Partner logo" />
              </Link>
              <h4>Sacem</h4>
              <p>Société des Auteurs…</p>
            </div>
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

export default Home;
