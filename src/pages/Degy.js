import "../css/detailsArtists.css";
import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Degy = () => {
  return (
    <main className="container">
      <section className="all-section-detail">
        <div className="section-detail-description">
          <h2 className="detail-title">Degy Le Resk.p</h2>
          <p className="detail-txt">Degy est né le 26/12/72 à Créteil (94).</p>
          <p className="detail-txt">
            Il grandit en banlieue dans la cité du Londeau à Noisy-Le-Sec (93)
            pendant toute sa jeunesse. Il découvre le rap dès ses années de
            collège et commence à écrire fin 88. En 1996, Degy se retrouve pour
            la première fois sur un cd avec le groupe Resk-p avec le titre «
            Fais toi plaisir » que l'on retrouve sur la compilation Hip Hop
            Vibes Vol.1. Et depuis ce temps-là, on ne cesse de le retrouver
            accompagné d'artistes divers et variés. En 2001, dû à des problèmes
            de santé, il met un terme au Rap et en 2013, il revient avec le
            titre « Bouteille à la mer ». <br />
            En 2014 il sort un vynil 2 titres intitulé « Le canon », produit par
            le label « Goliathizm », puis il apparait par la suite sur des
            compilations telle que « Au cœur de l’indépendance », produite par «
            Actubuzz », ou encore les compiles (1,3) de « Corruption »,
            produites par « Génération Indépendance », pour ne citer que
            celles-ci.
          </p>
          <p className="detail-txt">
            Aujourd'hui âgé de 50 ans, il a des projets plein la tête et
            souhaite les voir se concrétiser.
          </p>
          <p className="detail-txt-key">#DegyLeReskP #CommeUnPiaf</p>
        </div>
        <div>
          <img
            className="image-detail"
            src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681800871/AnonymousLabel/portraits-artistes/degy_hhehvk.webp"
            alt="Berlan"
          />
          <div>
            <div className="detail-logos-medias">
              <Link
                to="https://www.deezer.com/fr/artist/72143512"
                target="_blank"
              >
                <img
                  style={{ height: "27px" }}
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/deezer_egnati.png"
                  alt="deezer"
                />
              </Link>
              <Link
                to="https://open.spotify.com/artist/2e0NnV72TC5pYC6TIi7gm3"
                target="_blank"
              >
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/spotify_xa8rfz.png"
                  alt="spotify"
                />
              </Link>
              <Link
                to="https://www.youtube.com/@fredericfabregat7139"
                target="_blank"
              >
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/youtube_zvyd9x.png"
                  alt="youtube"
                />
              </Link>
              {/* <Link
                to="https://www.instagram.com/berlan_officiel"
                target="_blank"
              >
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/instagram_ku23fo.png"
                  alt="instagram"
                />
              </Link> */}
              <Link to="https://www.facebook.com/Lereskp" target="_blank">
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/facebook_mrqclc.png"
                  alt="facebook"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Actualité */}
      <section className="detail-actuality">
        <span>
          <h2>Actualité</h2>
        </span>

        <div className="actuality">
          <img
            className="cover-actuality"
            src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1686580451/AnonymousLabel/covers/Degy/site-internet_tsp13a.jpg"
            alt="cover promo Degy"
          />
          <div className="txt-detail-actuality">
            <h3>Premier album solo</h3>
            <p>Disponible sur toutes les plateformes.</p>
          </div>
        </div>
      </section>

      <section className="all-carousel-video">
        <span>
          <h2>Clips</h2>
        </span>
        <Carousel showThumbs={false} className="video-carousel1">
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=aQySfvbbXS4"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=NKlXfzdAUno"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=L3oAZLFw4lw"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=iw1Vr4U6H8s"
            />
          </div>
        </Carousel>
      </section>

      <section className="all-carousel-discography">
        <span>
          <h2>Discographie</h2>
        </span>
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={4000}
          className="discography-carousel"
        >
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681801330/AnonymousLabel/covers/Degy/degy-album_e7qhib.jpg
              "
              alt="cover Comme un Piaf"
            />
          </div>
        </Carousel>
      </section>
    </main>
  );
};

export default Degy;
