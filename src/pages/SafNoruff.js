import "../css/detailsArtists.css";
import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const SafNoruff = () => {
  return (
    <main className="container">
      <section className="all-section-detail">
        <div className="section-detail-description">
          <h2 className="detail-title">Saf Noruff</h2>
          <p className="detail-txt">
            Auteur-interprète, membre fondateur du groupe NORUFF dont la
            production est recherchée par les connaisseurs les plus avancés.
          </p>
          <p className="detail-txt">
            Il est également l’auteur de Philosophie du rap, publié aux éditions
            Symbiose.
          </p>
          <p className="detail-txt">
            Entre tradition et nouvelles addictions, Saf aime soigner le texte
            autant que la musicalité et propose une palette de rap toujours plus
            colorée.
          </p>

          <p className="detail-txt-key">#SafNoruff #revolverbe2</p>
        </div>
        <div>
          <img
            className="image-detail"
            src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680880164/AnonymousLabel/portraits-artistes/saf-noruff_aajcaf.webp"
            alt="SafNoruff"
          />
          <div>
            <div className="detail-logos-medias">
              <Link
                to="https://open.spotify.com/artist/2Hh4fecbsHPiNNlHW0vbql"
                target="_blank"
              >
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/spotify_xa8rfz.png"
                  alt="spotify"
                />
              </Link>
              <Link
                to="https://www.youtube.com/user/skud95160/featured"
                target="_blank"
              >
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/youtube_zvyd9x.png"
                  alt="youtube"
                />
              </Link>
              <Link to="https://www.instagram.com/saf_noruff" target="_blank">
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/instagram_ku23fo.png"
                  alt="instagram"
                />
              </Link>
              <Link to="https://www.facebook.com/SAFNORUFF" target="_blank">
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/facebook_mrqclc.png"
                  alt="facebook"
                />
              </Link>
              <Link to="https://noruff.bandcamp.com" target="_blank">
                <img
                  style={{ height: "20px" }}
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/bandcamp_r6bt4c.png"
                  alt="bandcamp"
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
            className="cover-actuality-long"
            src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681391228/AnonymousLabel/covers/saf-noruff/baniere-saf_klewrz.jpg"
            alt="Banière SafNoruff"
          />
          <div className="txt-detail-actuality">
            <h3>REVOLVERBE Vol.2 – en préparation</h3>
            <p>Une trilogie se prépare dans notre armurerie.</p>
          </div>
        </div>
      </section>

      {/* clips */}
      <section className="all-carousel-video">
        <span>
          <h2>Clips</h2>
        </span>
        <Carousel showThumbs={false}>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=uTlrw96mG0Q"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=tSOtEwVcytI"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=6p8aWmxrbGc"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=MxUAeRNtCo8"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=Saxd9d0E-EY"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=ZEvuAWFDSKM"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=p9dk2_m3Lp0"
            />
          </div>
        </Carousel>
      </section>

      {/* discographie */}
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
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681391227/AnonymousLabel/covers/saf-noruff/verbale_zqnuw5.jpg"
              alt="cover Saf Noruff"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681391227/AnonymousLabel/covers/saf-noruff/formez-rangs_aenjpi.jpg"
              alt="cover Saf Noruff"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681391228/AnonymousLabel/covers/saf-noruff/revolverbe_wmm6qa.jpg"
              alt="cover Saf Noruff"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681391228/AnonymousLabel/covers/saf-noruff/sublime_tthhrd.jpg"
              alt="cover Saf Noruff"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681391226/AnonymousLabel/covers/saf-noruff/bonarien_f8j3nd.jpg"
              alt="cover Saf Noruff"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681391227/AnonymousLabel/covers/saf-noruff/clebard_ifgjmh.jpg"
              alt="cover Saf Noruff"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681391228/AnonymousLabel/covers/saf-noruff/passe-passe_hxr04v.jpg"
              alt="cover Saf Noruff"
            />
          </div>
        </Carousel>
      </section>

      {/* littérature */}
      <section className="detail-actuality">
        <span>
          <h2>Littérature</h2>
        </span>

        <div className="literature">
          <Link
            to="https://noruff.bandcamp.com/merch/livre-saf-philosophie-du-rap"
            target="_blank"
          >
            <img
              className="cover-literature"
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681391226/AnonymousLabel/covers/saf-noruff/saf04_ztt03i.jpg"
              alt="livre de Saf Noruff"
            />
          </Link>

          <Link
            to="https://www.youtube.com/watch?v=TGJXWlSm698"
            target="_blank"
          >
            <img
              className="cover-literature"
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681391226/AnonymousLabel/covers/saf-noruff/saf01_elwfp7.jpg"
              alt="livre de Saf Noruff"
            />
          </Link>
          <Link
            to="https://noruff.bandcamp.com/merch/livre-saf-philosophie-du-rap"
            target="_blank"
          >
            <img
              className="cover-literature"
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681391226/AnonymousLabel/covers/saf-noruff/saf02_hqaix3.jpg"
              alt="livre de Saf Noruff"
            />
          </Link>
          <Link
            to="https://www.youtube.com/watch?v=TGJXWlSm698"
            target="_blank"
          >
            <img
              className="cover-literature"
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681391227/AnonymousLabel/covers/saf-noruff/saf03_xscfdk.jpg"
              alt="livre de Saf Noruff"
            />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default SafNoruff;
