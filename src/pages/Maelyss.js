import "../css/detailsArtists.css";
import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Maelyss = () => {
  return (
    <main className="container">
      <section className="all-section-detail">
        <div className="section-detail-description">
          <h2 className="detail-title">Maëlyss</h2>
          <p className="detail-txt">
            Jeune artiste âgée de 16 ans, chanteuse style (urbain pop à voix),
            originaire du Sud de la France.
          </p>
          <p className="detail-txt">
            Elle a pu participer à "The Voice Kid 5" il y a 3 ans, depuis elle a
            réalisé 3 singles et plusieurs covers disponibles sur youtube ainsi
            que sur toute les plateformes de téléchargement.
          </p>
          <p className="detail-txt">
            Vous pouvez retrouver Maëlyss en featuring avec Rym auprès de
            plusieurs artistes originaires de Marseille sur l'album V13, une
            production B18 X. Sortie le 2 juillet.
          </p>
          <p className="detail-txt">
            À présent en studio, elle travaille sur son premier projet.
          </p>
          <p className="detail-txt">
            Pour tenir son réseau, elle vous livre un premier single "Sur ma
            vie" sortie fin d’année 2021 sur toutes les plateformes de
            streaming.
          </p>
          <p className="detail-txt-key">#Maëlyss #JeuneTalent</p>
        </div>
        <div>
          <img
            className="image-detail"
            src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680880165/AnonymousLabel/portraits-artistes/maelyss_f8idup.webp"
            alt="Maëlyss"
          />
          <div>
            <div className="detail-logos-medias">
              <Link
                to="https://open.spotify.com/artist/2MHMhz9osXK8G1m6TdGewB"
                target="_blank"
              >
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/spotify_xa8rfz.png"
                  alt="spotify"
                />
              </Link>
              <Link
                to="https://www.youtube.com/channel/UChQDyFp9t0y1iChMlgsp4dQ"
                target="_blank"
              >
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/youtube_zvyd9x.png"
                  alt="youtube"
                />
              </Link>
              <Link
                to="https://www.instagram.com/maelyss.officiel"
                target="_blank"
              >
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/instagram_ku23fo.png"
                  alt="instagram"
                />
              </Link>
              <Link
                to="https://www.facebook.com/MaelyssOfficiel"
                target="_blank"
              >
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/facebook_mrqclc.png"
                  alt="facebook"
                />
              </Link>
              <Link
                to="https://www.tiktok.com/@maelyss.officiel"
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
          <img
            className="cover-actuality"
            src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681383860/AnonymousLabel/covers/maelyss/pas-dispo_euwmgx.jpg"
            alt="cover Maëlyss"
          />
          <div className="txt-detail-actuality">
            <h3>« Pas dispo »</h3>
            <p>
              Sortie le 13 mai 2022 de son dernier titre "Pas dispo". Disponible
              sur toutes les plateformes de streaming.
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
              url="https://www.youtube.com/watch?v=ggZ1Zksoq6o"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=W93Vc3WYE14"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=MeGMrLyKk2s"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=IdqPUi0lcb4"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=IM8IhDmY3M0"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=o_mNj58CGnU"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=k_hb1MSabX4"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=iS7FwC7uC74"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=BhBj01qaV5o"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=cknvwF2spaw"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=jqawtO0dlsE"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=DqDwb2vdtYk"
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
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681383860/AnonymousLabel/covers/maelyss/v13_nngwuk.jpg"
              alt="cover V13"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681383860/AnonymousLabel/covers/maelyss/Sur-ma-vie_q6fish.jpg"
              alt="cover Sur ma Vie"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681383860/AnonymousLabel/covers/maelyss/pas-dispo_euwmgx.jpg"
              alt="cover Pas dispo"
            />
          </div>
        </Carousel>
      </section>
    </main>
  );
};

export default Maelyss;
