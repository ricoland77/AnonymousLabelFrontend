import "../css/detailsArtists.css";
import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const LesAlphas = () => {
  return (
    <main className="container">
      <section className="all-section-detail">
        <div className="section-detail-description">
          <h2 className="detail-title">Les Alphas</h2>
          <p className="detail-txt">
            Collectif créé en 2015 par des artistes originaires de Vitry dont
            Diaf et Issa. Le collectif se définit avant tout comme un pôle de
            création artistique et ses membres tous autodidactes et polyvalents
            sont tour à tour rappeurs, beatmaker, chanteurs ou filmmaker.
          </p>
          <p className="detail-txt">
            La première œuvre du collectif réalisée en autoproduction s’intitule
            “H-Nine (H9) Project” un double album concept 18 titres 18 clips
            scindé en deux parties de 9 titres chacune.
          </p>
          <p className="detail-txt">
            La partie 1 : EP disponible sur toutes les plates-formes de
            téléchargement depuis le 09/04/2018.
            <br />
            La partie 2 : EP disponible sur toutes les plates-formes de
            télécharchement depuis le 09/04/2019.
          </p>

          <p className="detail-txt-key">#LesAlphas #NorcamCity</p>
        </div>
        <div>
          <img
            className="image-detail"
            src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680880164/AnonymousLabel/portraits-artistes/les-alphas_dylxlu.webp"
            alt="Les Alphas"
          />
          <div>
            <div className="detail-logos-medias">
              <Link
                to="https://open.spotify.com/artist/4dC2ZmYzWswVd7h76HfuDA"
                target="_blank"
              >
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/spotify_xa8rfz.png"
                  alt="spotify"
                />
              </Link>
              <Link
                to="https://www.deezer.com/fr/artist/63012672"
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
                to="https://www.youtube.com/channel/UC8DQsj6s28D47-azLa2Vz1A"
                target="_blank"
              >
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/youtube_zvyd9x.png"
                  alt="youtube"
                />
              </Link>
              <Link to="https://www.instagram.com/hnineproject" target="_blank">
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/instagram_ku23fo.png"
                  alt="instagram"
                />
              </Link>
              <Link
                to="https://www.facebook.com/people/Les-Alphas/100024018735982/"
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
            src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681379955/AnonymousLabel/portraits-artistes/assam_rwx5o7.webp"
            alt="Assam DIaf"
          />
          <div className="txt-detail-actuality">
            <h3>Les Alphas : RIP Assam Diaf (20/03/1982 - 09/12/2022)</h3>
            <p>
              Pour les gens d'Ivry, il était d'Ivry, pour les gens de Vitry, il
              était de Vitry et pour les Parisiens nul doute qu'il était des
              leurs. En fait Assam était d'ici et d'ailleurs. Depuis son enfance
              en Algérie à son arrivée en France, Assam a par sa personnalité et
              son parcours, marqué tous ceux qui l'on connu. Assam était un
              homme bon, un artiste, un passionné, militant infatigable, un
              idéaliste, fougueux, plein d'entrain, une véritable locomotive...
            </p>
            <p>#RIP</p>
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
              url="https://www.youtube.com/watch?v=S3ECF9SHAbo"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=KV7YA0JgWMc"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=-n120jQmQFI"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=Hem4cKg9-1s"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=nuRfdaTOgDM"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=EiFKhqz1W-w"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=T947tIIJIWY"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=R8SU0UJqnvQ"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=LfMg_Bik8dw"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=vtftE1sogHI"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=PqQeL1ldlHE"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=AIjKl74BWQ0"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=Bb5DmqsyLuE"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=kZFSlAZHgbY"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=Gbp4LrJ6I_s"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=BrPf07C0cZ0"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=gJ0P1FZzHvs"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=kIxVqUQa3C4"
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
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681380757/AnonymousLabel/covers/lesAlphas/norcam-city_lmnj7f.jpg"
              alt="cover Les Alphas"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681380757/AnonymousLabel/covers/lesAlphas/hnine_hqtxye.jpg"
              alt="cover Les Alphas"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681380758/AnonymousLabel/covers/lesAlphas/opinion_heuqdf.jpg"
              alt="cover Les Alphas"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681380758/AnonymousLabel/covers/lesAlphas/bitume3_vtebcx.jpg"
              alt="cover Les Alphas"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681380758/AnonymousLabel/covers/lesAlphas/Niroshima3_qyaw84.jpg"
              alt="cover Les Alphas"
            />
          </div>
        </Carousel>
      </section>
    </main>
  );
};

export default LesAlphas;
