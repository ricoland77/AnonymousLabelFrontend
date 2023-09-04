import "../css/detailsArtists.css";
import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import SoundExtract2 from "../components/SoundExtract2";
import SoundExtract3 from "../components/SoundExtract3";

const Oner = () => {
  return (
    <main className="container">
      <section className="all-section-detail">
        <div className="section-detail-description">
          <h2 className="detail-title">Oner</h2>
          <p className="detail-txt">
            Avec Rue du Bon Son, Oner signera les premiers enregistrements des
            membres de 1995, grands fans du NCA Crew et le premier projet
            d’Areno Jazz alias Darryl Zeuja.
          </p>
          <p className="detail-txt">
            Oner fera également plusieurs collaborations avec les artistes
            suivants : Georgio, Flynt, Rocé, Set & Match ou encore du rappeur
            américain Reks.
          </p>
          <p className="detail-txt">
            Oner revient aujourd’hui chez Anonymous Label avec plusieurs singles
            dont :<br /> - « Plus rien » disponible sur toutes les plateformes
            de téléchargement. Le clip est également disponible sur Youtube.
            <br />- « Miracle » nouveau single disponible sur toutes les
            plateformes légales.
            <br />- « Blueberry » nouveau single disponible sur toutes les
            plateformes légales. Le clip est également disponible sur Youtube
          </p>
          <p className="detail-txt-key">#oner #single #blueberry</p>
        </div>
        <div>
          <img
            className="image-detail"
            src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680880165/AnonymousLabel/portraits-artistes/Oner_z6ycyw.jpg"
            alt="Oner"
          />
          <div>
            <div className="detail-logos-medias">
              <Link
                to="https://open.spotify.com/artist/50KAEDxexEl2okVATELraK"
                target="_blank"
              >
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/spotify_xa8rfz.png"
                  alt="spotify"
                />
              </Link>
              <Link
                to="https://www.youtube.com/@OnerProd/about"
                target="_blank"
              >
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/youtube_zvyd9x.png"
                  alt="youtube"
                />
              </Link>
              <Link to="https://www.instagram.com/onerofficiel" target="_blank">
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/instagram_ku23fo.png"
                  alt="instagram"
                />
              </Link>
              <Link to="https://www.facebook.com/ONEROFFICIEL" target="_blank">
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/facebook_mrqclc.png"
                  alt="facebook"
                />
              </Link>
              <Link to="https://soundcloud.com/onerprod" target="_blank">
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/soundcloud_t3ltww.png"
                  alt="soundcloud"
                />
              </Link>
              <Link to="https://twitter.com/OnerXLR" target="_blank">
                <img
                  className="logotype-detail"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/twitter_ptkhlb.png"
                  alt="twitter"
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
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681912931/AnonymousLabel/covers/Oner/millionnaire-oner_jp0axo.jpg"
              alt=""
            />
            <h3 className="title-extract">Millionnaire</h3>
            <SoundExtract3 />
            <p className="txt-extract">Extrait</p>
          </div>
          <div className="extract-actuality">
            <img
              className="image-extract"
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680782255/AnonymousLabel/albums/blueberry_z6ziyq.jpg"
              alt=""
            />
            <h3 className="title-extract">Blueberry</h3>
            <SoundExtract2 />
            <p className="txt-extract">Extrait</p>
          </div>
          <div className="txt-detail-actuality">
            <h3>MILLIONNAIRE & BLUEBERRY</h3>
            <p>
              Nouveaux singles disponibles sur toutes les plateformes légales.
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
              url="https://www.youtube.com/watch?v=4ZliZoDAeHw"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=JY1p6jU0hng"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=6UVLEu53JXs"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=SWPXK3pnAL0"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=7zEgBjNxYtI"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=ciJwzDDQ2kc"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=4ira9efAa28"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=xYApC6H71yE"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer
              className="ratio-video"
              url="https://www.youtube.com/watch?v=OyaNRMUD9Ks"
            />
          </div>
          <div className="video-carousel">
            <ReactPlayer url="https://www.youtube.com/watch?v=RV3TSfvc1tk" />
          </div>
          <div className="video-carousel">
            <ReactPlayer url="https://www.youtube.com/watch?v=6rur--HgZtI" />
          </div>
          <div className="video-carousel">
            <ReactPlayer url="https://www.youtube.com/watch?v=09VXjoR5d24" />
          </div>
          <div className="video-carousel">
            <ReactPlayer url="https://www.youtube.com/watch?v=OARoJfzSLoI" />
          </div>
          <div className="video-carousel">
            <ReactPlayer url="https://www.youtube.com/watch?v=OlMLBgeijZk" />
          </div>
          <div className="video-carousel">
            <ReactPlayer url="https://www.youtube.com/watch?v=LbwDe7Jj80U" />
          </div>
          <div className="video-carousel">
            <ReactPlayer url="https://www.youtube.com/watch?v=KEqqIqxdgA8" />
          </div>
          <div className="video-carousel">
            <ReactPlayer url="https://www.youtube.com/watch?v=fFc1euqRd8E" />
          </div>
          <div className="video-carousel">
            <ReactPlayer url="https://www.youtube.com/watch?v=HzeRNpXhWT4" />
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
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681388088/AnonymousLabel/covers/Oner/blueberry_io5enz.jpg"
              alt="cover Oner"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681388095/AnonymousLabel/covers/Oner/plus-rien_bixdlw.jpg"
              alt="cover Oner"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681388090/AnonymousLabel/covers/Oner/onerO_zlmcmn.jpg"
              alt="cover Oner"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681388090/AnonymousLabel/covers/Oner/sawt_ztnju8.jpg"
              alt="cover Oner"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681388090/AnonymousLabel/covers/Oner/bien-dans-baskets_hfxflt.jpg"
              alt="cover Oner"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681388089/AnonymousLabel/covers/Oner/no-borders_zxndl0.jpg"
              alt="cover Oner"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681388089/AnonymousLabel/covers/Oner/balard_vmylda.jpg"
              alt="cover Oner"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681388089/AnonymousLabel/covers/Oner/lune_ikjrjm.jpg"
              alt="cover Oner"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681388089/AnonymousLabel/covers/Oner/parisouth_yrbfgo.jpg"
              alt="cover Oner"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681388089/AnonymousLabel/covers/Oner/miracle_xsjmrt.jpg"
              alt="cover Oner"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681388089/AnonymousLabel/covers/Oner/vertrau_xvfzyf.jpg"
              alt="cover Oner"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681388089/AnonymousLabel/covers/Oner/vaisseau_jxivej.jpg"
              alt="cover Oner"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681388089/AnonymousLabel/covers/Oner/crew-nca_ilq5ml.jpg"
              alt="cover Oner"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681388089/AnonymousLabel/covers/Oner/triste_vkmgau.jpg"
              alt="cover Oner"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681388088/AnonymousLabel/covers/Oner/tu-sais_xrzub9.jpg"
              alt="cover Oner"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681388088/AnonymousLabel/covers/Oner/folie_ztq1js.jpg"
              alt="cover Oner"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681388088/AnonymousLabel/covers/Oner/ou-vous-etes_lhmv8o.jpg"
              alt="cover Oner"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681388088/AnonymousLabel/covers/Oner/catspow_nsdgal.jpg"
              alt="cover Oner"
            />
          </div>
          <div className="cover">
            <img
              src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681388088/AnonymousLabel/covers/Oner/autodidact_akwurn.jpg"
              alt="cover Oner"
            />
          </div>
        </Carousel>
      </section>
    </main>
  );
};

export default Oner;
