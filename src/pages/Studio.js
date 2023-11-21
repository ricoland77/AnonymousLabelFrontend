import "../css/studio.css";

import React from "react";
import { Link } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import Newsletter from "../components/Newsletter";

import youtube from "../images/youtube-nb.png";
import instagram from "../images/instagram-nb.png";
import facebook from "../images/facebook-nb.png";

const Studio = () => {
  return (
    <>
      <main className="container">
        <section className="section-studio">
          <span>
            <h2 className="first-tittle-studio">Studio AR13</h2>
          </span>
          <div className="all-specifications">
            <div className="specification">
              <p className="txt-specification">
                Studio d’enregistrement professionnel situé à Marseille (13).
                Nous proposons une large gamme de matériel professionnel pour un
                rendu de qualité.
                <br /> Vous voulez un projet clé en main ? On s'occupe de tout !
              </p>
              <p className="txt-specification">
                Auteurs, compositeurs, interprètes, produisez votre musique chez
                AR13 Studio.
              </p>
            </div>
          </div>

          <span>
            <h2 className="second-titlle-equipment">Équipement</h2>
          </span>
          <div className="all-specifications">
            <div className="specification">
              <p className="txt-specification-center">
                Monitoring : Focal trio 11
                <br />
                Micro : Warm audio wa67 tube contrôleur
                <br />
                Palmer Monicon XL
                <br />
                Wa 73 warm audio eq
                <br />
                Wa 76 warm audio comp
                <br />
                Carte son : UAD Twin X<br />
                Ordi : Imac
              </p>
            </div>
          </div>

          <Carousel
            className="carousel-studio"
            autoPlay
            infiniteLoop
            interval={3000}
          >
            <img
              className="top-image"
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681923591/AnonymousLabel/studio/studio07_noyxfz.jpg"
              alt=""
            />
            <img
              className="top-image"
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681924006/AnonymousLabel/studio/studio11_irlugo.jpg"
              alt=""
            />
            <img
              className="top-image"
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680801156/AnonymousLabel/studio/studio10_h29sew.jpg"
              alt=""
            />
            <img
              className="top-image"
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680801156/AnonymousLabel/studio/studio09_z418gc.jpg"
              alt=""
            />
            <img
              className="top-image"
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681923593/AnonymousLabel/studio/studio09_c9l8uy.jpg"
              alt=""
            />
          </Carousel>
        </section>

        <section className="section-studio">
          <span>
            <h2 className="second-titlle-equipment">Découvrez nos collab'</h2>
          </span>

          <div className="all-artists-box">
            {/* Lomepal */}
            <div className="artist-box">
              <img
                className="img-artist"
                src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681923590/AnonymousLabel/studio/lomepal_skcqsd.jpg"
                alt="visual artist(s)"
              />
              <span>
                <h3 className="name">Lomepal</h3>
              </span>
            </div>

            {/* Swift Guad */}
            <div className="artist-box">
              <img
                className="img-artist"
                src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681923590/AnonymousLabel/studio/swift-guad_hrpljn.jpg"
                alt="visual artist(s)"
              />
              <span>
                <h3 className="name">Swift Guad</h3>
              </span>
            </div>

            {/* Nekfeu */}
            <div className="artist-box">
              <img
                className="img-artist"
                src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681923591/AnonymousLabel/studio/nekfeu_kb1uii.jpg"
                alt="visual artist(s)"
              />
              <span>
                <h3 className="name">Nekfeu</h3>
              </span>
            </div>

            {/* Vald */}
            <div className="artist-box">
              <img
                className="img-artist"
                src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681923590/AnonymousLabel/studio/vald_jk8vxf.jpg"
                alt="visual artist(s)"
              />
              <span>
                <h3 className="name">Vald</h3>
              </span>
            </div>

            {/* Alpha Wann */}
            <div className="artist-box">
              <img
                className="img-artist"
                src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681923590/AnonymousLabel/studio/alpha-wann_uiexwy.jpg"
                alt="visual artist(s)"
              />
              <span>
                <h3 className="name">Alpha Wann</h3>
              </span>
            </div>
          </div>
        </section>

        <section className="section-services">
          <span>
            <h2>Nos prestations</h2>
          </span>
          <div className="all-specifications">
            <div className="all-book-session">
              <p className="txt-specification-center">
                Enregistre ta prochaine chanson au Studio AR13 ! Inscris tes
                infos et book ta session projet clé en main ? On s'occupe de
                tout !
              </p>
              <Link to="/studio/reservation">
                <button
                  className="btn-book-session"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Book ta session ▹
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="section-join-us">
          <span>
            <h2>Nous rejoindre</h2>
          </span>
          <div className="all-join-us">
            <div className="box-join-us">
              <h3 className="title-join-us">Adresse</h3>
              <p className="txt-join-us">23 bis, boulevard Louvain</p>
              <p className="txt-join-us">13008 - Marseille</p>
            </div>
            <div className="box-join-us">
              <h3 className="title-join-us">Contact</h3>
              <p className="txt-join-us">+33 6 13 56 35 70</p>
              <p className="txt-join-us">
                <a
                  className="email-join-us"
                  href="mailto:anonymousrecords13@gmail.com"
                >
                  anonymousrecords13@gmail.com
                </a>
              </p>
            </div>
            <div className="box-join-us">
              <h3 className="title-join-us">Horaires</h3>
              <p className="txt-join-us">24h/24h</p>
              <p className="txt-join-us">7/7</p>
            </div>
          </div>
          <div className="network-logos-join-us">
            <Link
              to="https://www.youtube.com/channel/UCCbECegiyfAPQsq2rp_GvLQ"
              target="_blank"
            >
              <img src={youtube} alt="logo youtube" />
            </Link>
            <Link to="https://www.instagram.com/ar13officiel" target="_blank">
              <img src={instagram} alt="logo instagram" />
            </Link>
            <Link to="https://www.facebook.com/studioAR13" target="_blank">
              <img src={facebook} alt="logo facebook" />
            </Link>
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

export default Studio;
