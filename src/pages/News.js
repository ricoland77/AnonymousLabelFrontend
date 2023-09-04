import "../css/news.css";
import React from "react";

import { Link } from "react-router-dom";

import youtube from "../images/youtube.png";
import Newsletter from "../components/Newsletter";

const News = () => {
  return (
    <>
      <div className="container">
        <div className="img-center">
          <img
            className="artists"
            src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681917861/AnonymousLabel/actualites/actuality-visual02_ejfded.jpg"
            alt="Artistes"
          />
        </div>
        <section className="section-news">
          <span>
            <h2>Actualités</h2>
          </span>

          <div className="all-news">
            {/* Degy & ScamLeon */}
            <div className="news">
              <img
                className="news-img"
                src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1686576632/AnonymousLabel/actualites/summer-hiphop_nxftvk.jpg"
                alt=""
              />
              <p className="date-new">30 juin 2023</p>
              <div className="all-title-artists">
                <Link className="link-actu" to="/artist/degy" target="_blank">
                  <h4 className="artist-new">Degy Le Resk.p</h4>
                </Link>
                <p className="and-text">&</p>
                <Link
                  className="link-actu"
                  to="/artist/scamleon"
                  target="_blank"
                >
                  <h4 className="artist-new">Scam Leon</h4>
                </Link>
              </div>

              <p className="title-new">Concert</p>
              <p className="coming-soon">
                Retrouvez Degy Le Resk.P accompagné de Titi Balieusards pour la
                promo de son album "Comme un piaf". Vous pourrez également
                retrouver Scam Leon avec son équipe HxxD7R7.
              </p>
            </div>

            {/* Lascaride */}
            <div className="news">
              <img
                className="news-img"
                src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1686576560/AnonymousLabel/actualites/lascaride-batisseurs_of96k8.jpg"
                alt=""
              />
              <p className="date-new">09 juin 2023</p>
              <Link
                className="link-actu"
                to="/artist/lascaride"
                target="_blank"
              >
                <h4 className="artist-new">Lascaride</h4>
              </Link>
              <p className="title-new">Bâtisseurs de ruines</p>
              <p className="coming-soon">
                Troisième extrait de la mixtape de Karl Colson, disponible sur
                Youtube.
              </p>
            </div>

            {/* Scam Leon */}
            <div className="news">
              <img
                className="news-img"
                src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1686575281/AnonymousLabel/actualites/HXXD7RZ_jad2mi.jpg"
                alt=""
              />
              <p className="date-new">09 juin 2023</p>
              <div className="all-title-artists">
                <Link
                  className="link-actu"
                  to="/artist/scamleon"
                  target="_blank"
                >
                  <h4 className="artist-new">Scam Leon</h4>
                </Link>
                <p className="and-text">&</p>

                <h4 className="artist-new">(HXXD7RZ)</h4>
              </div>
              <p className="title-new">Concert</p>
              <p className="coming-soon">
                Retrouvez Scam Leon accompagné de HXXD7RZ, en première partie de
                Olkainry, au centre culturel La Place à Paris.
              </p>
            </div>

            {/* Degy */}
            <div className="news">
              <img
                className="news-img"
                src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681801330/AnonymousLabel/covers/Degy/degy-album_e7qhib.jpg"
                alt=""
              />
              <p className="date-new">12 mai 2023</p>
              <Link className="link-actu" to="/artist/degy" target="_blank">
                <h4 className="artist-new">Degy Le Resk.p</h4>
              </Link>
              <p className="title-new">Comme un piaf</p>
              <p className="coming-soon">
                Nouvel album bientôt disponible en physique et sur toutes les
                plateformes légales.
              </p>
            </div>

            {/* Saf Noruff */}
            <div className="news">
              <img
                className="news-img"
                src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681453723/AnonymousLabel/covers/saf-noruff/revolverbe-saf_atq75e.jpg"
                alt=""
              />
              <p className="date-new">24 avril 2023</p>
              <Link
                className="link-actu"
                to="https://www.instagram.com/lh.visual"
                target="_blank"
              >
                <h4 className="artist-new">Saf Noruff</h4>
              </Link>
              <p className="title-new">Revolverbe vol. 2</p>
              <p className="coming-soon">Bientôt disponible.</p>
            </div>

            {/* Oner Millionnaire */}
            <div className="news">
              <img
                className="news-img"
                src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681912931/AnonymousLabel/covers/Oner/millionnaire-oner_jp0axo.jpg"
                alt=""
              />
              <p className="date-new">16 avril 2023</p>
              <Link className="link-actu" to="/artist/oner" target="_blank">
                <h4 className="artist-new">Oner</h4>
              </Link>
              <p className="title-new">Millionnaire</p>
              <p className="coming-soon">
                Nouveau single disponible sur toutes les plateformes légales.
              </p>
            </div>

            {/* Oner blueberry */}
            <div className="news">
              <img
                className="news-img"
                src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680792540/AnonymousLabel/actualites/blueberry_u7nhan.jpg"
                alt=""
              />
              <p className="date-new">21 mars 2023</p>
              <Link
                className="link-actu"
                to="https://www.instagram.com/lh.visual"
                target="_blank"
              >
                <h4 className="artist-new">Oner</h4>
              </Link>
              <p className="title-new">Blueberry (Single)</p>
              <div className="text-news">
                <p className="coming-soon">
                  Nouveau clip
                  <br /> disponible sur
                  <a
                    className="youtube-link"
                    href="https://www.youtube.com/watch?v=4ZliZoDAeHw"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="youtube-picto"
                      src={youtube}
                      alt="picto Youtube"
                    />
                  </a>
                </p>
              </div>
            </div>

            {/* Skiizo */}
            <div className="news">
              <img
                className="news-img"
                src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681913079/AnonymousLabel/covers/Skiizo/lokass-Skiizo_tnthbp.jpg"
                alt=""
              />
              <p className="date-new">9 mars 2023</p>
              <Link
                className="link-actu"
                to="/artist/skiizo"
                // target="_blank"
              >
                <h4 className="artist-new">SkiiZo feat Mad Part</h4>
              </Link>
              <p className="title-new">Trop sauvage</p>
              <div className="text-news">
                <p className="coming-soon">
                  Nouveau titre disponible sur le projet produit par
                </p>
                <a
                  href="https://www.facebook.com/lokass59"
                  target="_blank"
                  rel="noreferrer"
                >
                  Lokass Kassmc
                </a>
              </div>
            </div>

            {/* Evil venom */}
            <div className="news">
              <img
                className="news-img"
                src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1680792540/AnonymousLabel/actualites/sowil_a8par2.jpg"
                alt=""
              />
              <p className="date-new">24 février 2023</p>
              <Link
                className="link-actu"
                to="https://www.instagram.com/lh.visual"
                target="_blank"
              >
                <h4 className="artist-new">Sowill (Evil Venom)</h4>
              </Link>
              <p className="title-new">Casus Belli</p>
              <p className="coming-soon">
                Nouvel album disponible en physique et sur toutes les
                plateformes légales.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Newsletter */}
      <section className="section4">
        <Newsletter />
      </section>
    </>
  );
};

export default News;
