import "../css/artists.css";
import React from "react";

import { Link } from "react-router-dom";

import Newsletter from "../components/Newsletter";

const Artists = () => {
  return (
    <>
      <main className="container">
        {/* Artistes */}
        <section className="section-artists">
          <span>
            <h2 className="first-tittle">Artistes</h2>
          </span>
          <p className="description-section">
            Le label représente des auteurs, compositeur, beatmakers, chanteurs
            tels que : <br />
            2mezur, Berlan, Dr.R & Mr.M, Evil Venom, Lascaride, Les Alphas,
            Maëlyss, Oner, Saf Noruff, Scam Leon, SkiiZo & Slim.
          </p>
          <p className="description-section">
            Anonymous Label propose aux artistes une offre complète de services
            (contrat d’enregistrement exclusif ou contrat d’artiste, contrat de
            producteur exécutif, contrat de licence exclusive, contrat de
            distribution).
          </p>

          {/* Presentation  artists */}
          <div className="presentation-artists">
            {/* 2mezur */}
            <div className="all-artist-box">
              <Link to="/artist/2mezur">
                <img
                  className="artist-picture"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680880165/AnonymousLabel/portraits-artistes/2mezur_tr9rai.webp"
                  alt="2mezur"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                />
              </Link>
              <div className="music-style">
                <p>Chanteurs – Hip-hop français</p>
              </div>

              <div className="name-logos">
                <Link className="artist-name" to="/artist/2mezur">
                  <h3
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    2mezur
                  </h3>
                </Link>
                <div className="logos-medias">
                  <Link
                    to="https://open.spotify.com/album/3HLdu7fpmcfdU0Qife5QI1"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/spotify_xa8rfz.png"
                      alt="spotify"
                    />
                  </Link>
                  <Link
                    to="https://www.youtube.com/channel/UCh3Qem_iGJudrVcfx49f0YQ"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/youtube_zvyd9x.png"
                      alt="youtube"
                    />
                  </Link>
                  <Link
                    to="https://www.instagram.com/2mezur/?hl=fr"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/instagram_ku23fo.png"
                      alt="instagram"
                    />
                  </Link>
                  <Link
                    to="https://www.facebook.com/people/2mezur/100063754622604/"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/facebook_mrqclc.png"
                      alt="facebook"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Berlan */}
            <div className="all-artist-box">
              <Link to="/artist/berlan">
                <img
                  className="artist-picture"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680880165/AnonymousLabel/portraits-artistes/berlan_wrouyv.webp"
                  alt="Berlan"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                />
              </Link>
              <div className="music-style">
                <p>Chanteur – Hip-hop français</p>
              </div>

              <div className="name-logos">
                <Link className="artist-name" to="/artist/berlan">
                  <h3
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    Berlan
                  </h3>
                </Link>
                <div className="logos-medias">
                  <Link
                    to="https://music.apple.com/pl/artist/berlan/1572842889"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/Itunes_fwbuue.png"
                      alt="itunes"
                    />
                  </Link>
                  <Link
                    to="https://www.deezer.com/fr/album/238189412"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/deezer_egnati.png"
                      alt="deezer"
                    />
                  </Link>
                  <Link
                    to="https://open.spotify.com/artist/1rSSlQCBk7aY4o9nHxZdRi?si=SdGGXnOeTrebMkv6hsWvqA&nd=1"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/spotify_xa8rfz.png"
                      alt="spotify"
                    />
                  </Link>
                  <Link
                    to="https://www.youtube.com/channel/UCeb5Fl-l4-knNGm1MWc0pqA"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/youtube_zvyd9x.png"
                      alt="youtube"
                    />
                  </Link>
                  <Link
                    to="https://www.instagram.com/berlan_officiel/"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/instagram_ku23fo.png"
                      alt="instagram"
                    />
                  </Link>
                  <Link
                    to="https://www.facebook.com/berlan1010/"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/facebook_mrqclc.png"
                      alt="facebook"
                    />
                  </Link>
                  <Link
                    to="https://www.tiktok.com/@berlan_officiel"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/tiktok_ykfoj4.png"
                      alt="tiktok"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Degy */}
            <div className="all-artist-box">
              <Link to="/artist/degy">
                <img
                  className="artist-picture"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681800871/AnonymousLabel/portraits-artistes/degy_hhehvk.webp"
                  alt="Degy le Resk.p"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                />
              </Link>
              <div className="music-style">
                <p>Chanteur – Hip-hop français</p>
              </div>

              <div className="name-logos">
                <Link className="artist-name" to="/artist/berlan">
                  <h3
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    Degy Le Resk.p
                  </h3>
                </Link>
                <div className="logos-medias">
                  <Link
                    to="https://www.deezer.com/fr/artist/72143512"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/deezer_egnati.png"
                      alt="deezer"
                    />
                  </Link>
                  <Link
                    to="https://open.spotify.com/artist/2e0NnV72TC5pYC6TIi7gm3"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/spotify_xa8rfz.png"
                      alt="spotify"
                    />
                  </Link>
                  <Link
                    to="https://www.youtube.com/@fredericfabregat7139"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/youtube_zvyd9x.png"
                      alt="youtube"
                    />
                  </Link>

                  <Link to="https://www.facebook.com/Lereskp" target="_blank">
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/facebook_mrqclc.png"
                      alt="facebook"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Dr.R & Mr.M */}
            <div className="all-artist-box">
              <Link to="/artist/docrmisterm">
                <img
                  className="artist-picture"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680880164/AnonymousLabel/portraits-artistes/doc-r_pvenry.webp"
                  alt=""
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                />
              </Link>
              <div className="music-style">
                <p>Chanteur – Hip-hop français</p>
              </div>

              <div className="name-logos">
                <Link className="artist-name" to="/artist/docrmisterm">
                  <h3
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    Dr.R & Mr.M
                  </h3>
                </Link>
                <div className="logos-medias">
                  <Link
                    to="https://www.youtube.com/@dr.rmr.m5102"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/youtube_zvyd9x.png"
                      alt="youtube"
                    />
                  </Link>
                  <Link
                    to="https://www.instagram.com/mr.m.officiel"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/instagram_ku23fo.png"
                      alt="instagram"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Evil Venom */}
            <div className="all-artist-box">
              <Link to="/artist/evilvenom">
                <img
                  className="artist-picture"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680880164/AnonymousLabel/portraits-artistes/evil-venom_sqxfmg.webp"
                  alt=""
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                />
              </Link>
              <div className="music-style">
                <p>Chanteurs – Hip-hop français</p>
              </div>

              <div className="name-logos">
                <Link className="artist-name" to="/artist/evilvenom">
                  <h3
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    Evil Venom
                  </h3>
                </Link>
                <div className="logos-medias">
                  <Link
                    to="https://open.spotify.com/artist/4CGWxDUDSyeDJW5pwCP1A4"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/spotify_xa8rfz.png"
                      alt="spotify"
                    />
                  </Link>
                  <Link
                    to="https://www.youtube.com/user/EvilVenom95"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/youtube_zvyd9x.png"
                      alt="youtube"
                    />
                  </Link>
                  <Link
                    to="https://www.instagram.com/jazefaevilvenom/?hl=fr"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/instagram_ku23fo.png"
                      alt="instagram"
                    />
                  </Link>
                  <Link
                    to="https://www.facebook.com/evilvenom.hiphop"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/facebook_mrqclc.png"
                      alt="facebook"
                    />
                  </Link>
                  <Link to="https://evilvenom.bandcamp.com/" target="_blank">
                    <img
                      style={{ height: "12px" }}
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/bandcamp_r6bt4c.png"
                      alt="bandcamp"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Lascaride */}
            <div className="all-artist-box">
              <Link to="/artist/lascaride">
                <img
                  className="artist-picture"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680880164/AnonymousLabel/portraits-artistes/Lascaride_dknkar.webp"
                  alt=""
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                />
              </Link>
              <div className="music-style">
                <p>Chanteur – Hip-hop français</p>
              </div>

              <div className="name-logos">
                <Link className="artist-name" to="/artist/lascaride">
                  <h3
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    Lascaride
                  </h3>
                </Link>
                <div className="logos-medias">
                  <Link
                    to="https://music.apple.com/no/artist/lascaride/1453223447"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/Itunes_fwbuue.png"
                      alt="itunes"
                    />
                  </Link>
                  <Link
                    to="https://open.spotify.com/artist/3Pet9rrWjbttpmKUnHKeFx?si=9NLl_7y4QTayeJNBFXQCcg&nd=1"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/spotify_xa8rfz.png"
                      alt="spotify"
                    />
                  </Link>

                  <Link
                    to="https://www.deezer.com/en/album/217017572?utm_campaign=clipboard-generic&utm_source=user_sharing&utm_medium=mobile&utm_content=album-217017572/"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/deezer_egnati.png"
                      alt="deezer"
                    />
                  </Link>
                  <Link
                    to="https://www.youtube.com/channel/UCW65er6ahu9lGf7zS8DRnFw"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/youtube_zvyd9x.png"
                      alt="youtube"
                    />
                  </Link>
                  <Link
                    to="https://www.instagram.com/lascaride_officiel/"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/instagram_ku23fo.png"
                      alt="instagram"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Les Alphas */}
            <div className="all-artist-box">
              <Link to="/artist/lesalphas">
                <img
                  className="artist-picture"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680880164/AnonymousLabel/portraits-artistes/les-alphas_dylxlu.webp"
                  alt=""
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                />
              </Link>
              <div className="music-style">
                <p>Chanteurs – Hip-hop français</p>
              </div>

              <div className="name-logos">
                <Link className="artist-name" to="/artist/lesalphas">
                  <h3
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    Les Alphas
                  </h3>
                </Link>
                <div className="logos-medias">
                  <Link
                    to="https://open.spotify.com/artist/4dC2ZmYzWswVd7h76HfuDA"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/spotify_xa8rfz.png"
                      alt="spotify"
                    />
                  </Link>
                  <Link
                    to="https://www.deezer.com/fr/artist/63012672"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/deezer_egnati.png"
                      alt="deezer"
                    />
                  </Link>
                  <Link
                    to="https://www.youtube.com/channel/UC8DQsj6s28D47-azLa2Vz1A"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/youtube_zvyd9x.png"
                      alt="youtube"
                    />
                  </Link>
                  <Link
                    to="https://www.instagram.com/hnineproject/"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/instagram_ku23fo.png"
                      alt="instagram"
                    />
                  </Link>
                  <Link
                    to="https://www.facebook.com/people/Les-Alphas/100024018735982/"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/facebook_mrqclc.png"
                      alt="facebook"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Maëlyss */}
            <div className="all-artist-box">
              <Link to="/artist/maelyss">
                <img
                  className="artist-picture"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1682403595/AnonymousLabel/portraits-artistes/maelyss02_b0gae5.webp"
                  alt=""
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                />
              </Link>
              <div className="music-style">
                <p>Chanteuse – Pop urbaine</p>
              </div>

              <div className="name-logos">
                <Link className="artist-name" to="/artist/maelyss">
                  <h3
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    Maëlyss
                  </h3>
                </Link>
                <div className="logos-medias">
                  <Link
                    to="https://open.spotify.com/artist/2MHMhz9osXK8G1m6TdGewB"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/spotify_xa8rfz.png"
                      alt="spotify"
                    />
                  </Link>
                  <Link
                    to="https://www.youtube.com/channel/UChQDyFp9t0y1iChMlgsp4dQ"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/youtube_zvyd9x.png"
                      alt="youtube"
                    />
                  </Link>
                  <Link
                    to="https://www.instagram.com/maelyss.officiel/"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/instagram_ku23fo.png"
                      alt="instagram"
                    />
                  </Link>
                  <Link
                    to="https://www.facebook.com/MaelyssOfficiel/"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/facebook_mrqclc.png"
                      alt="facebook"
                    />
                  </Link>
                  <Link
                    to="https://www.tiktok.com/@maelyss.officiel?"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/tiktok_ykfoj4.png"
                      alt="tiktok"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Oner */}
            <div className="all-artist-box">
              <Link to="/artist/oner">
                <img
                  className="artist-picture"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680880165/AnonymousLabel/portraits-artistes/Oner_z6ycyw.jpg"
                  alt=""
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                />
              </Link>
              <div className="music-style">
                <p>Chanteur – Hip-hop français</p>
              </div>

              <div className="name-logos">
                <Link className="artist-name" to="/artist/oner">
                  <h3
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    Oner
                  </h3>
                </Link>
                <div className="logos-medias">
                  <Link
                    to="https://open.spotify.com/artist/50KAEDxexEl2okVATELraK"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/spotify_xa8rfz.png"
                      alt="spotify"
                    />
                  </Link>
                  <Link
                    to="https://www.youtube.com/@OnerProd/about"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/youtube_zvyd9x.png"
                      alt="youtube"
                    />
                  </Link>
                  <Link
                    to="https://www.instagram.com/onerofficiel"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/instagram_ku23fo.png"
                      alt="instagram"
                    />
                  </Link>
                  <Link
                    to="https://www.facebook.com/ONEROFFICIEL"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/facebook_mrqclc.png"
                      alt="facebook"
                    />
                  </Link>
                  <Link to="https://soundcloud.com/onerprod" target="_blank">
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/soundcloud_t3ltww.png"
                      alt="soundcloud"
                    />
                  </Link>
                  <Link to="https://twitter.com/OnerXLR" target="_blank">
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/twitter_ptkhlb.png"
                      alt="twitter"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Saf Noruff */}
            <div className="all-artist-box">
              <Link to="/artist/safnoruff">
                <img
                  className="artist-picture"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680880164/AnonymousLabel/portraits-artistes/saf-noruff_aajcaf.webp"
                  alt=""
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                />
              </Link>
              <div className="music-style">
                <p>Chanteur – Hip-hop français</p>
              </div>

              <div className="name-logos">
                <Link className="artist-name" to="/artist/safnoruff">
                  <h3
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    Saf Noruff
                  </h3>
                </Link>
                <div className="logos-medias">
                  <Link
                    to="https://open.spotify.com/artist/2Hh4fecbsHPiNNlHW0vbql"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/spotify_xa8rfz.png"
                      alt="spotify"
                    />
                  </Link>
                  <Link
                    to="https://www.youtube.com/user/skud95160/featured"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/youtube_zvyd9x.png"
                      alt="youtube"
                    />
                  </Link>
                  <Link
                    to="https://www.instagram.com/saf_noruff/"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/instagram_ku23fo.png"
                      alt="instagram"
                    />
                  </Link>
                  <Link
                    to="https://www.facebook.com/SAFNORUFF/"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/facebook_mrqclc.png"
                      alt="facebook"
                    />
                  </Link>
                  <Link
                    to="https://noruff.bandcamp.com/album/evil-venom-x-noruff-formez-les-rangs"
                    target="_blank"
                  >
                    <img
                      style={{ height: "12px" }}
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/bandcamp_r6bt4c.png"
                      alt="bandcamp"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Scam Leon */}
            <div className="all-artist-box">
              <Link to="/artist/scamleon">
                <img
                  className="artist-picture"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680880164/AnonymousLabel/portraits-artistes/scam-leon_avgduf.webp"
                  alt=""
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                />
              </Link>
              <div className="music-style">
                <p>Chanteur – Hip-hop français</p>
              </div>

              <div className="name-logos">
                <Link className="artist-name" to="/artist/scamleon">
                  <h3
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    Scam Leon
                  </h3>
                </Link>
                <div className="logos-medias">
                  <Link
                    to="https://music.apple.com/pl/artist/scam-leon/1554739413"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/Itunes_fwbuue.png"
                      alt="itunes"
                    />
                  </Link>
                  <Link
                    to="https://open.spotify.com/artist/0ockysBzNexObGmAkF9AqY"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/spotify_xa8rfz.png"
                      alt="spotify"
                    />
                  </Link>
                  <Link
                    to="https://www.deezer.com/fr/artist/124616762"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/deezer_egnati.png"
                      alt="deezer"
                    />
                  </Link>
                  <Link
                    to="https://www.youtube.com/c/SCAMLEONleonscam"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/youtube_zvyd9x.png"
                      alt="youtube"
                    />
                  </Link>
                  <Link
                    to="https://www.instagram.com/scam.leon/"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/instagram_ku23fo.png"
                      alt="instagram"
                    />
                  </Link>
                  <Link
                    to="https://www.facebook.com/freedomforleon"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/facebook_mrqclc.png"
                      alt="facebook"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Skiizo */}
            <div className="all-artist-box">
              <Link to="/artist/skiizo">
                <img
                  className="artist-picture"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680880164/AnonymousLabel/portraits-artistes/skiizo_gmsoii.webp"
                  alt=""
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                />
              </Link>
              <div className="music-style">
                <p>Chanteur – Hip-hop français</p>
              </div>

              <div className="name-logos">
                <Link className="artist-name" to="/artist/skiizo">
                  <h3
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    Skiizo
                  </h3>
                </Link>
                <div className="logos-medias">
                  <Link
                    to="https://music.apple.com/us/artist/skiizo/1441904510"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/Itunes_fwbuue.png"
                      alt="itune"
                    />
                  </Link>
                  <Link
                    to="https://open.spotify.com/artist/1ZAyQEIlEJZppAPfpSHeTw"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/spotify_xa8rfz.png"
                      alt="spotify"
                    />
                  </Link>
                  <Link
                    to="https://www.deezer.com/en/album/271255092"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/deezer_egnati.png"
                      alt="deezer"
                    />
                  </Link>
                  <Link
                    to="https://www.youtube.com/channel/UCZ8c5CyGd_ugiq1U805HFGg"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/youtube_zvyd9x.png"
                      alt="youtube"
                    />
                  </Link>
                  <Link
                    to="https://www.instagram.com/skiizo_officiel/"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/instagram_ku23fo.png"
                      alt="instagram"
                    />
                  </Link>
                  <Link
                    to="https://www.facebook.com/SkiiZoOfficiel/"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/facebook_mrqclc.png"
                      alt="facebook"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Slim */}
            <div className="all-artist-box">
              <Link to="/artist/slim">
                <img
                  className="artist-picture"
                  src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680880165/AnonymousLabel/portraits-artistes/slim_khdaz8.webp"
                  alt=""
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                />
              </Link>
              <div className="music-style">
                <p>Chanteur – Hip-hop français</p>
              </div>

              <div className="name-logos">
                <Link className="artist-name" to="/artist/slim">
                  <h3
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    Slim
                  </h3>
                </Link>
                <div className="logos-medias">
                  <Link
                    to="https://music.apple.com/mx/artist/slim-officiel/1520106031"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/Itunes_fwbuue.png"
                      alt="itune"
                    />
                  </Link>
                  <Link
                    to="https://open.spotify.com/artist/6at50jP6t2vUjWW4x81oQQ"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869783/AnonymousLabel/socialmedia/spotify_xa8rfz.png"
                      alt="spotify"
                    />
                  </Link>
                  <Link
                    to="https://www.deezer.com/fr/artist/98712542"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/deezer_egnati.png"
                      alt="deezer"
                    />
                  </Link>
                  <Link
                    to="https://www.youtube.com/channel/UCS7xneWr3txPN0DCWMEHuNw"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/youtube_zvyd9x.png"
                      alt="youtube"
                    />
                  </Link>
                  <Link
                    to="https://www.instagram.com/slim_ofcl/"
                    target="_blank"
                  >
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/instagram_ku23fo.png"
                      alt="instagram"
                    />
                  </Link>
                  <Link to="https://www.facebook.com/SlimOfcl/" target="_blank">
                    <img
                      className="logotypes"
                      src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680869784/AnonymousLabel/socialmedia/facebook_mrqclc.png"
                      alt="facebook"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Ils nous ont fait confiance */}
        <section className="they-trusted-us">
          <span>
            <h2>Ils nous ont fait confiance</h2>
          </span>

          <div className="all-they-trusted-us">
            {/* Bastos Old Timer */}
            <div className="all-artist-box">
              <img
                className="artist-picture"
                src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680880165/AnonymousLabel/portraits-artistes/bastos_fi5smw.webp"
                alt=""
              />
              <div className="music-style">
                <p>Chanteur – Hip-hop français</p>
              </div>

              <div className="trust">
                <h3 className="artist-name">Bastos old Timer</h3>
              </div>
            </div>

            {/* Rafal */}
            <div className="all-artist-box">
              <img
                className="artist-picture"
                src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680880164/AnonymousLabel/portraits-artistes/rafal_qijrbc.webp"
                alt=""
              />
              <div className="music-style">
                <p>Chanteur – Hip-hop français</p>
              </div>

              <div className="trust">
                <h3 className="artist-name">Rafal</h3>
              </div>
            </div>

            {/* R.O.D */}
            <div className="all-artist-box">
              <img
                className="artist-picture"
                src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680880164/AnonymousLabel/portraits-artistes/rod_qvmcgo.webp"
                alt=""
              />
              <div className="music-style">
                <p className="artist-name">Chanteur – Pop Urbain</p>
              </div>

              <div className="trust">
                <h3 className="artist-name">R.O.D.</h3>
              </div>
            </div>

            {/* Stevy Enay */}
            <div className="all-artist-box">
              <img
                className="artist-picture"
                src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680880164/AnonymousLabel/portraits-artistes/stevy-enay_majasv.webp"
                alt=""
              />
              <div className="music-style">
                <p>Chanteuse – R'n'B</p>
              </div>

              <div className="trust">
                <h3 className="artist-name">Stevy Enay</h3>
              </div>
            </div>

            {/* Storia Cherokee */}
            <div className="all-artist-box">
              <img
                className="artist-picture"
                src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680880164/AnonymousLabel/portraits-artistes/storia_bgfpai.webp"
                alt=""
              />
              <div className="music-style">
                <p>Chanteur – Hip-hop français</p>
              </div>

              <div className="trust">
                <h3 className="artist-name">Storia Cherokee</h3>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Newsletter */}
      <section className="section4">
        <Newsletter />
      </section>
    </>
  );
};

export default Artists;
