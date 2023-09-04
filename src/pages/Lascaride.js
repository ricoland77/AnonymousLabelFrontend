import "../css/detailsArtists.css";
import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Lascaride = () => {
  return (
    <main className="container">
      <section className="all-section-detail">
        <div className="section-detail-description">
          <h2 className="detail-title">Lascaride</h2>
          <p className="detail-txt">
            Artiste Auteur Interprète Rap Conscient Français. Originaire du
            bassin parisien, grandissant sous influence Hip hop, pionnier des
            années 80/90… Lascaride, plume unique aux textes chargés d’écrits
            incisifs métaphoriques, dérisoires et émotionnels, relayant faits de
            vie et actualités.
          </p>

          <p className="detail-txt-key">#lascaride #AntreCielEtTerre</p>
        </div>
        <div>
          <img
            className="image-detail"
            src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680880164/AnonymousLabel/portraits-artistes/Lascaride_dknkar.webp"
            alt="Lascaride"
          />
          <div>
            <div className="detail-logos-medias">
              <Link
                to="https://music.apple.com/no/artist/lascaride/1453223447"
                target="_blank"
              >
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/Itunes_fwbuue.png"
                  alt="itunes"
                />
              </Link>
              <Link
                to="https://open.spotify.com/artist/3Pet9rrWjbttpmKUnHKeFx?si=9NLl_7y4QTayeJNBFXQCcg&nd=1"
                target="_blank"
              >
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/spotify_xa8rfz.png"
                  alt="spotify"
                />
              </Link>
              <Link
                to="https://www.deezer.com/en/album/217017572?utm_campaign=clipboard-generic&utm_source=user_sharing&utm_medium=mobile&utm_content=album-217017572"
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
                to="https://www.youtube.com/channel/UCW65er6ahu9lGf7zS8DRnFw"
                target="_blank"
              >
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/youtube_zvyd9x.png"
                  alt="youtube"
                />
              </Link>
              <Link
                to="https://www.instagram.com/lascaride_officiel"
                target="_blank"
              >
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/instagram_ku23fo.png"
                  alt="instagram"
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
            src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1686578965/AnonymousLabel/actualites/lascaride-batisseurs02_s1v9h0.jpg"
            alt="Bâtisseur de ruines"
          />
          <div className="txt-detail-actuality">
            <h3>Bâtisseurs de ruines</h3>
            <p>
              Tu peux retrouver Lascaride sur la mixtape BeatonyourSide de{" "}
              <a
                className="extern-artists"
                href="https://www.facebook.com/karlcolson.official"
                target="_blank"
                rel="noreferrer"
              >
                Karl Colson
              </a>
              , disponible dès maintenant sur{" "}
              <a
                className="extern-artists"
                href="https://www.youtube.com/watch?v=VgebJwokT6A"
                target="_blank"
                rel="noreferrer"
              >
                YouTube
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="all-carousel-video">
        <span>
          <h2>Clips</h2>
        </span>
        <Carousel showThumbs={false}>
          {/* <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=wHKo54qmZ-4"
            />
          </div> */}
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=6RJzCBZkxxM"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=-ezh6HYuVXc"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=h2oG1fOsAzw"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=4qSQKMmul7o"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=YAZAa79RM1A"
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
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681378155/AnonymousLabel/covers/Lascaride/antre-ciel-et-terre_fflrey.jpg"
              alt="cover Lascaride"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681375972/AnonymousLabel/covers/Lascaride/holdup_zykdyn.jpg"
              alt="cover Lascaride"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681459298/AnonymousLabel/covers/Lascaride/enfant_xatgtd_nnuqsy.jpg"
              alt="cover Lascaride"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681375971/AnonymousLabel/covers/Lascaride/maitre-darmes_ribjgo.jpg"
              alt="cover Lascaride"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681375971/AnonymousLabel/covers/Lascaride/sixieme-element_zkkh7r.jpg"
              alt="cover Lascaride"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681375972/AnonymousLabel/covers/Lascaride/reflexion_ywppol.jpg"
              alt="cover Lascaride"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681375971/AnonymousLabel/covers/Lascaride/pourquoi_zzl25a.jpg"
              alt="cover Lascaride"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681375971/AnonymousLabel/covers/Lascaride/lascaride-pitbull_s0jqqf.jpg"
              alt="cover Lascaride"
            />
          </div>
        </Carousel>
      </section>
    </main>
  );
};

export default Lascaride;
