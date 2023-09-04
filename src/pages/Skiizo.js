import "../css/detailsArtists.css";
import React from "react";
import ReactPlayer from "react-player";

import { Link } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Skiizo = () => {
  return (
    <main className="container">
      <section className="all-section-detail">
        <div className="section-detail-description">
          <h2 className="detail-title">Skiizo</h2>
          <p className="detail-txt">
            Artiste de 29 ans et originaire de la région du Val-d'Oise (95), ce
            jeune rappeur indépendant et engagé nous fait percevoir un certain
            vécu à travers sa musique et ses paroles. Ses textes sont toujours
            matures et réalistes car il développe beaucoup autour des épreuves
            de la vie, qui nous concernent tous.
          </p>
          <p className="detail-txt">
            Sortie de 3 singles :<br />
            • « C'matin c'est mort » disponible le 19/11/2021.
            <br />
            • « DAENERYS » disponible en mai 2022.
            <br />• Troisième single disponible en 2023.
          </p>
          <p className="detail-txt" style={{ fontStyle: "italic" }}>
            « On me met des bâtons dans les roues donc c'est logique que le
            SkiiZofrène ».
          </p>
          <p className="detail-txt-key">#SkiiZo #daenerys</p>
        </div>
        <div>
          <img
            className="image-detail"
            src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680880164/AnonymousLabel/portraits-artistes/skiizo_gmsoii.webp"
            alt="Skiizo"
          />
          <div>
            <div className="detail-logos-medias">
              <Link
                to="https://music.apple.com/us/artist/skiizo/1441904510"
                target="_blank"
              >
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/Itunes_fwbuue.png"
                  alt="itunes"
                />
              </Link>
              <Link
                to="https://open.spotify.com/artist/1ZAyQEIlEJZppAPfpSHeTw"
                target="_blank"
              >
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/spotify_xa8rfz.png"
                  alt="spotify"
                />
              </Link>
              <Link
                to="https://www.deezer.com/fr/artist/1654301"
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
                to="https://www.youtube.com/channel/UCZ8c5CyGd_ugiq1U805HFGg"
                target="_blank"
              >
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/youtube_zvyd9x.png"
                  alt="youtube"
                />
              </Link>
              <Link
                to="https://www.instagram.com/skiizo_officiel"
                target="_blank"
              >
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/instagram_ku23fo.png"
                  alt="instagram"
                />
              </Link>
              <Link
                to="https://www.facebook.com/SkiiZoOfficiel"
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
            src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681399717/AnonymousLabel/covers/Skiizo/skiizoCover_o0dxss.jpg"
            alt="cover HXXD7RZ"
          />
          <div className="txt-detail-actuality">
            <h3>3e single</h3>
            <p>Disponible en 2023.</p>
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
              url="https://www.youtube.com/watch?v=4qSQKMmul7o"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=Z9ExqiQerFM"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=LWbLoLU5si4"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=ubY1O8THxqk"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=S7qQ5jDgyHI"
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
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681398406/AnonymousLabel/covers/Skiizo/daenerys_dndbga.jpg"
              alt="cover Skiizo"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681398406/AnonymousLabel/covers/Skiizo/cmatin_io5oqx.jpg"
              alt="cover Skiizo"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681398406/AnonymousLabel/covers/Skiizo/ramses_gheh4v.jpg"
              alt="cover Skiizo"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681398407/AnonymousLabel/covers/Skiizo/cnd_jsg7nv.jpg"
              alt="cover Skiizo"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681398406/AnonymousLabel/covers/Skiizo/furious_t2am7n.jpg"
              alt="cover Skiizo"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681398407/AnonymousLabel/covers/Skiizo/neoshtar_vojrar.jpg"
              alt="cover Skiizo"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681398407/AnonymousLabel/covers/Skiizo/Skiizo01_a2dcew.jpg"
              alt="cover Skiizo"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681398406/AnonymousLabel/covers/Skiizo/france-pression_lbtrc1.jpg"
              alt="cover Skiizo"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681398406/AnonymousLabel/covers/Skiizo/flu-entape_ou9gkl.jpg"
              alt="cover Skiizo"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681398406/AnonymousLabel/covers/Skiizo/16-44_ovoutq.jpg"
              alt="cover Skiizo"
            />
          </div>
        </Carousel>
      </section>
    </main>
  );
};

export default Skiizo;
