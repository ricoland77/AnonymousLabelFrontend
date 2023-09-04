import "../css/detailsArtists.css";
import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import SoundExtract from "../components/SoundExtract";

const Berlan = () => {
  return (
    <main className="container">
      <section className="all-section-detail">
        <div className="section-detail-description">
          <h2 className="detail-title">Berlan</h2>
          <p className="detail-txt">
            Cet artiste de 31 ans et originaire de Troyes nous propose son
            premier album « MIS À JOUR », disponible depuis le mois de juin 2022
            en physique et sur toutes les plateformes de streaming et de
            téléchargement.
          </p>
          <p className="detail-txt">
            Vous pouvez retrouver l’album en exclusivité à " La Scred boutique "
            – 80 rue marcadet – 75018 Paris et sur le shop.
          </p>
          <p className="detail-txt">
            Nouvel Ep en préparation. N’hésitez pas venir découvrir l'univers de
            l’artiste et vous abonner à ses différents comptes.
          </p>
          <p className="detail-txt-key">#berlan #misajour</p>
        </div>
        <div>
          <img
            className="image-detail"
            src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680880165/AnonymousLabel/portraits-artistes/berlan_wrouyv.webp"
            alt="Berlan"
          />
          <div>
            <div className="detail-logos-medias">
              <Link
                to="https://music.apple.com/pl/artist/berlan/1572842889"
                target="_blank"
              >
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/Itunes_fwbuue.png"
                  alt="itunes"
                />
              </Link>
              <Link
                to="https://www.deezer.com/fr/album/238189412"
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
                to="https://open.spotify.com/album/6mOUPP5R58hoWjL9hw6H35"
                target="_blank"
              >
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/spotify_xa8rfz.png"
                  alt="spotify"
                />
              </Link>
              <Link
                to="https://www.youtube.com/channel/UCeb5Fl-l4-knNGm1MWc0pqA"
                target="_blank"
              >
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/youtube_zvyd9x.png"
                  alt="youtube"
                />
              </Link>
              <Link
                to="https://www.instagram.com/berlan_officiel"
                target="_blank"
              >
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/instagram_ku23fo.png"
                  alt="instagram"
                />
              </Link>
              <Link to="https://www.facebook.com/berlan1010" target="_blank">
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/facebook_mrqclc.png"
                  alt="facebook"
                />
              </Link>
              <Link
                to="https://www.tiktok.com/@berlan_officiel"
                target="_blank"
              >
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/tiktok_ykfoj4.png"
                  alt="tiktok"
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
          <div className="extract-actuality">
            <img
              className="image-extract"
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681309441/AnonymousLabel/covers/Berlan/ballon-dort_ecemvv.jpg"
              alt=""
            />
            <h3 className="title-extract">Ballon Dort</h3>
            <SoundExtract />
            <p className="txt-extract">Extrait</p>
          </div>
          <div className="txt-detail-actuality">
            <h3>BALLON DORT</h3>
            <p>
              Nouveau titre disponible sur Youtube & Spotify. Retrouvez Berlan
              en feat Elfuego & Bud.
            </p>
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
              url="https://www.youtube.com/watch?v=uEw-7HpWxj0"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=3rHhvWPoT5k"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=m3y4j7MfNQA"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=IJHDDLQbicQ"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=D59QDYx7jjo&t=1s"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=fb70BVZ_kb4"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=6_QD7EfIZ-Q"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=ZajDd7GX8FU"
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
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680782259/AnonymousLabel/albums/berlan-mis-a-jour_iea6yq.jpg"
              alt="cover Mis à jour"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681313801/AnonymousLabel/covers/Berlan/recalcitrant_ibrhra.jpg"
              alt="cover Recalcitrant"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680782259/AnonymousLabel/albums/berlan-x-bud_tso1bl.jpg"
              alt="cover Affaires sensibles"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681309441/AnonymousLabel/covers/Berlan/ballon-dort_ecemvv.jpg"
              alt="cover Ballon Dort"
            />
          </div>
        </Carousel>
      </section>
    </main>
  );
};

export default Berlan;
