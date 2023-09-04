import "../css/detailsArtists.css";
import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const EvilVenom = () => {
  return (
    <main className="container">
      <section className="all-section-detail">
        <div className="section-detail-description">
          <h2 className="detail-title">Evil Venom</h2>
          <p className="detail-txt">
            Voit le jour en 2000, c’est un duo composé de Sowil et JaZefa, tous
            deux issus du collectif Posse meurtrier créé en 1997. Ce crew
            rassemble différents groupes tels que SKG, Secte U.G.C, Crucifix…
          </p>
          <p className="detail-txt">
            Evil Venom compte à ce jour deux Ep, deux mixtapes, un album « La
            Prophétie de L’ombre » et un solo de JaZefa.
          </p>
          <p className="detail-txt">
            Sowil et JaZefa se distinguent par leur champ lexical d’une sombre
            profondeur à la rime dure et sépulcrale.
          </p>
          <p className="detail-txt">
            DISCOGRAPHIE :<br /> • 2010 : Deep
            <br /> • 2012 : Mixtape 3.2.S Dj Noxious Apo K Lips
            <br /> • 2013 : V13
            <br /> • 2014 : Projet X<br /> • 2015 : La Prophétie de l'ombre
            <br /> • 2019 : Le Gris Des Cendres
            <br /> • 2021 : Formez les rangs (Album en combinaison avec le
            groupe Noruff)
            <br /> • 2023 : Casus Belli (Album de Sowil) sortie le 24 février
            2023
          </p>

          <p className="detail-txt-key">#EvilVenom #32s</p>
        </div>
        <div>
          <img
            className="image-detail"
            src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680880164/AnonymousLabel/portraits-artistes/evil-venom_sqxfmg.webp"
            alt="Evil Venom"
          />
          <div>
            <div className="detail-logos-medias">
              <Link
                to="https://open.spotify.com/artist/4CGWxDUDSyeDJW5pwCP1A4"
                target="_blank"
              >
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/spotify_xa8rfz.png"
                  alt="spotify"
                />
              </Link>
              <Link
                to="https://www.youtube.com/user/EvilVenom95"
                target="_blank"
              >
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/youtube_zvyd9x.png"
                  alt="youtube"
                />
              </Link>
              <Link
                to="https://www.instagram.com/jazefaevilvenom"
                target="_blank"
              >
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/instagram_ku23fo.png"
                  alt="instagram"
                />
              </Link>
              <Link
                to="https://www.facebook.com/evilvenom.hiphop"
                target="_blank"
              >
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/facebook_mrqclc.png"
                  alt="facebook"
                />
              </Link>
              <Link to="https://evilvenom.bandcamp.com/" target="_blank">
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
            className="cover-actuality"
            src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681364196/AnonymousLabel/covers/EvilVenom/casus-belli-sowil_gdgyc7.jpg"
            alt="cover Evil Venom"
          />
          <div className="txt-detail-actuality">
            <h3>Casus Belli - Sowill</h3>
            <p>Nouvel album sorti le 24 février 2023.</p>
            <p style={{ fontStyle: "italic" }}>
              « Oserez-vous tenter l’aventure au 32S, au troisième sous-sol du
              Rap Underground ? »
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
              url="https://www.youtube.com/watch?v=qWdHtdg8-Xk&t=1s"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=yxyvNCU_Bqc"
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
              url="https://www.youtube.com/watch?v=-nFHF4B4zzQ"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=14iPfKYQu_I&t=1s"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer url="https://www.youtube.com/watch?v=F4bMGZyEaZc" />
          </div>
          <div className="video-carousel">
            <ReactPlayer url="https://www.youtube.com/watch?v=IsY5-sVBLbI" />
          </div>
          <div className="video-carousel">
            <ReactPlayer url="https://www.youtube.com/watch?v=tugQzPLisWs" />
          </div>
          <div className="video-carousel">
            <ReactPlayer url="https://www.youtube.com/watch?v=6AaQgtak5Js" />
          </div>
          <div className="video-carousel">
            <ReactPlayer url="https://www.youtube.com/watch?v=rV45w96Syzw" />
          </div>
          <div className="video-carousel">
            <ReactPlayer url="https://www.youtube.com/watch?v=JJ42czN3saY&t=2s" />
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
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681364196/AnonymousLabel/covers/EvilVenom/casus-belli-sowil_gdgyc7.jpg"
              alt="cover Evil Venom"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681367225/AnonymousLabel/covers/EvilVenom/incontinence-verbale_jasfe8.jpg"
              alt="cover Evil Venom"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681365934/AnonymousLabel/covers/EvilVenom/all-star-game_jv16js.jpg"
              alt="cover Evil Venom"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681365935/AnonymousLabel/covers/EvilVenom/colere-peine_cqdekw.jpg"
              alt="cover Evil Venom"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681365936/AnonymousLabel/covers/EvilVenom/formez-rangs_qv8dec.jpg"
              alt="cover Evil Venom"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681365935/AnonymousLabel/covers/EvilVenom/sourire-crispe_bcjy9f.jpg"
              alt="cover Evil Venom"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681365935/AnonymousLabel/covers/EvilVenom/sublime-controle_wnoclg.jpg"
              alt="cover Evil Venom"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681365933/AnonymousLabel/covers/EvilVenom/bonarien_vp8zes.jpg"
              alt="cover Evil Venom"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681365934/AnonymousLabel/covers/EvilVenom/mauvais-gout_t5anzu.jpg"
              alt="cover Evil Venom"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681365933/AnonymousLabel/covers/EvilVenom/album-evil-venom_bmofft.jpg"
              alt="cover Evil Venom"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681365935/AnonymousLabel/covers/EvilVenom/undercover_tvco43.jpg"
              alt="cover Evil Venom"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681365935/AnonymousLabel/covers/EvilVenom/sous-pression_sftysg.jpg"
              alt="cover Evil Venom"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681365934/AnonymousLabel/covers/EvilVenom/liberte-expression_rxb3wn.jpg"
              alt="cover Evil Venom"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681365933/AnonymousLabel/covers/EvilVenom/gris-des-cendres_in8qgz.jpg"
              alt="cover Evil Venom"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681365934/AnonymousLabel/covers/EvilVenom/prophetie_mjqhpe.jpg"
              alt="cover Evil Venom"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681365934/AnonymousLabel/covers/EvilVenom/projet-x_o8mljl.jpg"
              alt="cover Evil Venom"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681365935/AnonymousLabel/covers/EvilVenom/vendredi13_ssf32x.jpg"
              alt="cover Evil Venom"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681365933/AnonymousLabel/covers/EvilVenom/deep_rzpkco.jpg"
              alt="cover Evil Venom"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681365934/AnonymousLabel/covers/EvilVenom/32S-inedit_nw9zmv.jpgLascaride"
              alt="cover Evil Venom"
            />
          </div>
        </Carousel>
      </section>
    </main>
  );
};

export default EvilVenom;
