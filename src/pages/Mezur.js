import "../css/detailsArtists.css";
import React from "react";
import ReactPlayer from "react-player";

import { Link } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Mezur = () => {
  return (
    <main className="container">
      <section className="all-section-detail">
        <div className="section-detail-description">
          <h2 className="detail-title">2mezur</h2>
          <p className="detail-txt">
            2mezur est un groupe Indépendant de Rap français composé de deux
            rappeurs, Cevi & Zeufa originaires du Val-de-Marne (94). Après une
            pause de plusieurs années, ils reviennent en 2020 avec l'EP 7 titres
            #BLCSTAP, puis en 2021 avec une série de freestyles intitulée :
            #EnModeClassic. Entièrement clipée et disponible sur YouTube, elle a
            été repostée et partagée par de nombreux artistes (Sniper, Joey
            Starr, Zoxea, Scred Connexion, Busta Flex, Sat). En 2022, ils nous
            présentent un second EP de 15 titres : B.L.C.S.T.A.P II.
            B.L.C.S.T.A.P II est disponible sur toutes les plateformes de
            streaming et en format physique sur www.scredboutique.com C’est un
            projet de 15 titres mélangeant Trap, Drill, Boombap avec Mehsah à la
            prod (entres autres) et un Feat avec Swift Guad. Ce projet est un
            mélange de sonorités actuelles tout en gardant du fond. Avec ce
            projet, 2mezur a pour objectif d'augmenter sa visibilité aussi bien
            sur les réseaux qu'au travers des médias traditionnels et également
            de se produire sur scène.
          </p>
          <p className="detail-txt">
            Nouvel EP sorti le 13/01/2023. Un projet de 7 titres en
            collaboration avec le beatmaker Oxydz.beats
          </p>
          <p className="detail-txt">
            Plusieurs clips vont arriver, restez connectés.
          </p>
          <p className="detail-txt-key">#2mezur #blcstapII #nouvelep</p>
        </div>
        <div>
          <img
            className="image-detail"
            src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680880165/AnonymousLabel/portraits-artistes/2mezur_tr9rai.webp"
            alt="2mezur"
          />
          <div>
            <div className="detail-logos-medias">
              <Link
                to="https://open.spotify.com/album/3HLdu7fpmcfdU0Qife5QI1"
                target="_blank"
              >
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/spotify_xa8rfz.png"
                  alt="spotify"
                />
              </Link>
              <Link
                to="https://www.youtube.com/channel/UCh3Qem_iGJudrVcfx49f0YQ"
                target="_blank"
              >
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/youtube_zvyd9x.png"
                  alt="youtube"
                />
              </Link>
              <Link
                to="https://www.instagram.com/2mezur/?hl=fr"
                target="_blank"
              >
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/instagram_ku23fo.png"
                  alt="instagram"
                />
              </Link>
              <Link
                to="https://www.facebook.com/people/2mezur/100063754622604/"
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
            src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681225858/AnonymousLabel/covers/2mezur/cover2mezur_tklapy.webp"
            alt="cover 2mezur"
          />
          <div className="txt-detail-actuality">
            <h3>Nouvel Ep disponible sur toutes les plateformes</h3>
            <p>
              Héritage est un EP 100 % Boombap du duo 2mezur, en commun avec le
              Beatmaker Oxydz que l'on retrouve sur toutes les prods du projet.
              Le titre de ce projet fait référence à l'héritage culturel en
              commun des 3 protagonistes à savoir : L'Italie, le cinéma, le
              hip-hop, etc. Sur la version Streaming et sur le format physique,
              on pourra également retrouver les 7 titres en version
              instrumentale.
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
              url="https://www.youtube.com/watch?v=QjPywYy2ht0"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=INxAhFcj4PA"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=P9zOIpC9Y0w"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=naFmikPQEBs"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=u0IyTVwL490&t=1s"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=6BXPY9uv6RM"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=xxUKGv06zO0"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=OloqSneO_so"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=iyCHySBTOeE"
            />
          </div>
        </Carousel>
      </section>
    </main>
  );
};

export default Mezur;
