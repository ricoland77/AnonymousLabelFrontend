import "../css/detailsArtists.css";
import React from "react";
import ReactPlayer from "react-player";

import { Link } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ScamLeon = () => {
  return (
    <main className="container">
      <section className="all-section-detail">
        <div className="section-detail-description">
          <h2 className="detail-title">Scam Leon</h2>
          <p className="detail-txt">
            Artiste Rap plus ou moins engagé (ça dépend des jours) et qui vient
            d’un peu partout… Parfois c’est même pas du rap, ça vire sur le
            rock/raggamuffin/jungle, un truc bizarre…
          </p>
          <p className="detail-txt">
            Mais bon, le mec saura te prendre aux tripes avec des textes biens
            construits et plutôt audibles, en plus la légende dit qu’en concert
            c’est assez pas mal et qu’ça bouge un peu. Vas y écoute, like et
            commente stp, c’est pour la cause.
          </p>
          <p className="detail-txt">
            Nouvel EP « 33 » disponible sur toutes les plates formes de
            téléchargement..
          </p>
          <p className="detail-txt-key">#ScamLeon #SystemD #33</p>
        </div>
        <div>
          <img
            className="image-detail"
            src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680880164/AnonymousLabel/portraits-artistes/scam-leon_avgduf.webp"
            alt="Scam Leon"
          />
          <div>
            <div className="detail-logos-medias">
              <Link
                to="https://music.apple.com/pl/artist/scam-leon/1554739413"
                target="_blank"
              >
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/Itunes_fwbuue.png"
                  alt="itunes"
                />
              </Link>
              <Link
                to="https://open.spotify.com/artist/0ockysBzNexObGmAkF9AqY"
                target="_blank"
              >
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/spotify_xa8rfz.png"
                  alt="spotify"
                />
              </Link>
              <Link
                to="https://www.deezer.com/fr/artist/124616762"
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
                to="https://www.youtube.com/c/SCAMLEONleonscam"
                target="_blank"
              >
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/youtube_zvyd9x.png"
                  alt="youtube"
                />
              </Link>
              <Link to="https://www.instagram.com/scam.leon" target="_blank">
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/instagram_ku23fo.png"
                  alt="instagram"
                />
              </Link>
              <Link
                to="https://www.facebook.com/freedomforleon"
                target="_blank"
              >
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
            src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1686581275/AnonymousLabel/covers/scam-leon/concert-hxxd7rz_tj3fnf.jpg"
            alt="concert HXXD7RZ"
          />
          <div className="txt-detail-actuality">
            <h3>Concert</h3>
            <p>
              Prochaines dates sur scène : <br /> - Le 09 juin 2023 à LA PLACE
              (ouverture des portes à 19h30).
              <br />- Adresse : 10, passage de la Canopée, 75001 Paris - France.{" "}
              <br />- Billetterie :{" "}
              <a
                className="extern-artists"
                href="https://link.dice.fm/laplace/olkainry"
                target="_blank"
                rel="noreferrer"
                title="Lien vers la Billetterie"
              >
                Ol' Kainry – La Place
              </a>
            </p>
          </div>
        </div>
        <div className="actuality">
          <img
            className="cover-actuality"
            src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1686581275/AnonymousLabel/covers/scam-leon/tifestif_krvzwp.jpg"
            alt="concert HXXD7RZ"
          />
          <div className="txt-detail-actuality">
            <h3>Le Ti’Festif#2</h3>
            <p>
              - Le 25 août 2023 en Belgique (Piscine Olympique de Seraing).{" "}
              <br />- Adresse : 51, avenue des Puddleurs, 41000 Seraing -
              Belgique. <br />- Programmation :{" "}
              <a
                className="extern-artists"
                href="https://www.facebook.com/events/1077357253141627"
                target="_blank"
                rel="noreferrer"
                title="Lien vers la Programmation"
              >
                www.facebook.com/events
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="detail-actuality">
        <span>
          <h2>Freestyle</h2>
        </span>

        <div className="video-carousel">
          <ReactPlayer url="https://www.youtube.com/watch?v=rISwIO7UIDY" />
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
              url="https://www.youtube.com/watch?v=ppO9DBd92Ws"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=_KFsu4eW5sM"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=BjxA_-clpE4"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=YNyaEbwISk8"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=ybuXFeah8pk"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=3Ih-rye6B3g"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=ryxGeRBEUeI"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=6e_OMbl0vfU"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=97kLqg7CO_M"
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
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681395147/AnonymousLabel/covers/scam-leon/HXXD7RZ-cover_s8onln.jpg"
              alt="cover HXXD7RZ"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681394652/AnonymousLabel/covers/scam-leon/scamleon33_otfcdh.jpg"
              alt="cover Scam Leon 33"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681394651/AnonymousLabel/covers/scam-leon/systemD_fsscyc.jpg"
              alt="cover System D"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681394651/AnonymousLabel/covers/scam-leon/freescam_aci5ou.jpg"
              alt="cover Freescam vol. 1"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681394651/AnonymousLabel/covers/scam-leon/loucherie_wddul6.jpg"
              alt="cover #loucherie"
            />
          </div>
        </Carousel>
      </section>
    </main>
  );
};

export default ScamLeon;
