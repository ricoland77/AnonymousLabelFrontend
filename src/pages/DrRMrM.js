import "../css/detailsArtists.css";
import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// import SoundExtract from "../components/SoundExtract";

const DrRMrM = () => {
  return (
    <main className="container">
      <section className="all-section-detail">
        <div className="section-detail-description">
          <h2 className="detail-title">Dr.R & Mr.M</h2>
          <p className="detail-txt">
            Nous sommes en 1990 lorsque notre protagoniste découvre le rap par
            le biais de 2 compilations sorties la même année. Rap attitude pour
            le côté français et Def jam pour le côté US. Il ne lui en faudra pas
            plus pour tomber dedans.
          </p>
          <p className="detail-txt">
            Quelques années plus tard et après être passé par diverses
            formations, un groupe se met en place « SUPERPOZER », il en trouve
            son nom de scène MAXX-R. Le groupe sortira une mixtape et apparaîtra
            sur quelques compilations et projets notamment les tapes de Dj
            Deep'sycho. Au terme de cet aventure les membres se séparent et
            œuvre en solo.
          </p>
          <p className="detail-txt">
            C'est ainsi que Maxx-R sort son street album accompagnés de quelques
            featurings. Le tout enregistré par Yedi au studio « Conçu pour durer
            ». Suite à cela il remet en cause son désir de continuer dans
            l'univers de la musique et peu à peu s'en éloigne. Cet éloignement
            durera jusqu'au 1er confinement.
          </p>
          <p className="detail-txt">
            Là un déclic se produit… des retrouvailles avec Yedi, qui depuis à
            monter le label ainsi qu’une autre rencontre déclenche le projet, il
            va par le nom de « Toop ». C'est de leur union artistique que « feu
            » Maxx-r devient Mister M et que le projet Dr.R & Mr.M prend forme.
            Le choix étant d'amener chacun des 2 protagonistes à exprimer leur
            différentes facettes avant un album en commun. Étant convenu que
            Mr.M à pris un peu d'avance, Dr. R attend patiemment son heure.
          </p>

          <p className="detail-txt-key">#DrR #MrM</p>
        </div>
        <div>
          <img
            className="image-detail"
            src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680880164/AnonymousLabel/portraits-artistes/doc-r_pvenry.webp"
            alt="Dr.R & Mr.M"
          />
          <div>
            <div className="detail-logos-medias">
              <Link to="https://www.youtube.com/@dr.rmr.m5102" target="_blank">
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/youtube_zvyd9x.png"
                  alt="youtube"
                />
              </Link>
              <Link
                to="https://www.instagram.com/mr.m.officiel"
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
          <div className="txt-detail-actuality">
            <h3>16 capsules</h3>
            <p>
              Les hostilités sont lancées, nous vous avons préparer 16 CAPSULES
              disponible tout les lundis uniquement sur Instagram et Facebook.
            </p>
            <p>
              1. #Grisaillerie – 2. #OnyVoitRienDePersonnel – 3. #Ardp – 4.
              #2draps2soie – 5. #Cavaler – 6. #Q.I.M – 7. #5à7 – 8. #SaleTemps –
              9. #Dior – 10. #LamourDuRisk – 11. #LesYeuxRevolver – 12.
              #Michtoneuse – 13. #LesCrisDansLeDesert – 14. #LettreàElise – 15.
              #LamourVache – 16. #JeSuisVenuTeDire.
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
              url="https://www.youtube.com/watch?v=96iSFTXxgAg&t=2s"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=Jw_Wfa_9u-c"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=ZCfDs8SatKM&t=2s"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=qK8hYCmOp3w"
            />
          </div>
        </Carousel>
      </section>
    </main>
  );
};

export default DrRMrM;
