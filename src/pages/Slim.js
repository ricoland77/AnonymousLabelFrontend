import "../css/detailsArtists.css";
import React from "react";
import ReactPlayer from "react-player";

import { Link } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Slim = () => {
  return (
    <main className="container">
      <section className="all-section-detail">
        <div className="section-detail-description">
          <h2 className="detail-title">Slim</h2>
          <p className="detail-txt">
            Artiste originaire de Troyes et âgé de 28 ans, Slim est un jeune
            rappeur indépendant
          </p>

          <p className="detail-txt-key">#slim #NouvelArrivage</p>
        </div>
        <div>
          <img
            className="image-detail"
            src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680880165/AnonymousLabel/portraits-artistes/slim_khdaz8.webp"
            alt="Slim"
          />
          <div>
            <div className="detail-logos-medias">
              <Link
                to="https://music.apple.com/mx/artist/slim-officiel/1520106031"
                target="_blank"
              >
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/Itunes_fwbuue.png"
                  alt="itunes"
                />
              </Link>
              <Link
                to="https://open.spotify.com/artist/6at50jP6t2vUjWW4x81oQQ"
                target="_blank"
              >
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/spotify_xa8rfz.png"
                  alt="spotify"
                />
              </Link>
              <Link
                to="https://www.deezer.com/fr/artist/98712542"
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
                to="https://www.youtube.com/channel/UCS7xneWr3txPN0DCWMEHuNw"
                target="_blank"
              >
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/youtube_zvyd9x.png"
                  alt="youtube"
                />
              </Link>
              <Link to="https://www.instagram.com/slim_ofcl" target="_blank">
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/instagram_ku23fo.png"
                  alt="instagram"
                />
              </Link>
              <Link to="https://www.facebook.com/SlimOfcl" target="_blank">
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
            src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681401211/AnonymousLabel/covers/slim/nouvel-arrivage_clevlg.jpg"
            alt="cover Slim - Nouvel Arrivage"
          />
          <div className="txt-detail-actuality">
            <h3>Nouvel arrivage</h3>
            <p>
              Vous pouvez retrouver le premier projet EP 9 titres + 3 Bonus
              track « NOUVEL ARRIVAGE » en guise de carte de visite, disponible
              en physique et également sur toutes les plateformes de streaming
              et de téléchargement.
            </p>
          </div>
        </div>
      </section>

      <section className="all-carousel-video">
        <span>
          <h2>Clips</h2>
        </span>
        <Carousel showThumbs={false}>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=wXAm1vwFzao"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=9HE9_cMz5GA"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=wcvg0NcZswg"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=shSbcbrKVAM"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=UOJDJ2QlYic"
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
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681401211/AnonymousLabel/covers/slim/nouvel-arrivage_clevlg.jpg"
              alt="cover Slim"
            />
          </div>
        </Carousel>
      </section>
    </main>
  );
};

export default Slim;
