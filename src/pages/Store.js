import "../css/store.css";
import React from "react";
import { Link } from "react-router-dom";
import store from "../json/store.json";
import Newsletter from "../components/Newsletter";

const Store = ({
  albumAddToCart,
  cart,
  setCart,
  displayCart,
  setDisplayCart,
}) => {
  return (
    <>
      <div className="container">
        <section className="section-store">
          <span>
            <h2 className="first-tittle-store">Boutique</h2>
          </span>
          <p className="welcome-text">
            Bienvenue sur notre <strong>boutique en ligne</strong>, ici vous
            pouvez acheter et payer directement sur Internet avec un accès
            sécurisé. Les œuvres musicales constituant notre catalogue sont
            déposées à la SACEM et protégées par les lois du Copyright en
            vigueur.{" "}
            <em>
              « Toute représentation ou reproduction intégrale ou partielle
              faite sans le consentement de l’auteur ou de ses ayants droits ou
              ayants cause, est illicite »
            </em>{" "}
            (Art. L 122-4 du Code de la Propriété Intellectuelle).
          </p>
        </section>

        {/* Album, EP, compilations */}
        <section className="section-store02">
          <span>
            <h2 className="second-titlle-store">
              Projets (albums, EP, compilations)
            </h2>
          </span>

          <div className="store">
            {store.projects.map((project) => {
              return (
                <div className="album" key={project.id}>
                  <Link
                    to={`/store/projects/${project.id}`}
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    <img
                      className="album-img"
                      src={project.picture1}
                      alt="Visuel de l'album"
                    />
                  </Link>

                  <p className="project-type">{project.type}</p>
                  <h3 className="artist-album">{project.artist}</h3>
                  <h4 className="title-album">{project.name}</h4>

                  {project.stock === 0 ? (
                    <p className="price-outstock">00,00 €</p>
                  ) : (
                    <div>
                      {project.solde ? (
                        <div className="all-prices">
                          <p className="price-album">
                            <s>{project.price} €</s>
                          </p>
                          <p className="price-solde">{project.solde} €</p>
                        </div>
                      ) : (
                        <p className="price-album">{project.price} €</p>
                      )}
                    </div>
                  )}

                  <p className="tva">{project.tva}</p>
                  <p className="tva">{project.subscriber}</p>

                  {project.stock === 0 && (
                    <p className="outStock">{project.outStock}</p>
                  )}

                  {project.new && <p className="outNew">{project.new}</p>}

                  {project.stock === 0 ? (
                    <button
                      className="btn-cart disable-btn"
                      onClick={() => {
                        setDisplayCart(!displayCart);
                      }}
                    >
                      Rupture de stock
                    </button>
                  ) : (
                    <button
                      className="btn-cart"
                      onClick={() => {
                        albumAddToCart(project);
                        setDisplayCart(!displayCart);
                      }}
                    >
                      Ajouter au panier
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Packs (CD + Tee-shirt) */}
        <section className="section-store-bis">
          <span>
            <h2>Packs (CD + Tee-shirt)</h2>
          </span>

          <div className="store">
            {store.packs.map((pack) => {
              return (
                <div className="album" key={pack.id}>
                  <Link
                    to={`/store/packs/${pack.id}`}
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    <img
                      className="album-img-bis"
                      src={pack.picture1}
                      alt="Visuel du pack"
                    />
                  </Link>

                  <p className="project-type">{pack.type}</p>
                  <h3 className="artist-album">{pack.artist}</h3>
                  <h4 className="title-album">{pack.name}</h4>

                  {pack.stock === 0 ? (
                    <p className="price-outstock">00,00 €</p>
                  ) : (
                    <div>
                      {pack.solde ? (
                        <div className="all-prices">
                          <p className="price-album">
                            <s>{pack.price} €</s>
                          </p>
                          <p className="price-solde">{pack.solde} €</p>
                        </div>
                      ) : (
                        <p className="price-album">{pack.price} €</p>
                      )}
                    </div>
                  )}

                  <p className="tva">{pack.tva}</p>
                  <p className="tva">{pack.subscriber}</p>

                  {pack.stock === 0 && (
                    <p className="outStock"> {pack.outStock} </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Goodies (Tee-shirts, Sweats) */}
        <section className="section-store02">
          <span>
            <h2 className="second-titlle-store">
              Goodies (Tee-shirts, Sweats)
            </h2>
          </span>

          <div className="store">
            {store.goodies.map((goodie) => {
              return (
                <div className="album" key={goodie.id}>
                  <Link
                    to={`/store/goodies/${goodie.id}`}
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    <img
                      className="album-img-ter"
                      src={goodie.picture1}
                      alt="Visuel du goodie"
                    />
                  </Link>

                  <p className="project-type">{goodie.type}</p>
                  <h3 className="artist-album">{goodie.artist}</h3>
                  <h4 className="title-album">{goodie.name}</h4>

                  {goodie.stock === 0 ? (
                    <p className="price-outstock">00,00 €</p>
                  ) : (
                    <div>
                      {goodie.solde ? (
                        <div className="all-prices">
                          <p className="price-album">
                            <s>{goodie.price} €</s>
                          </p>
                          <p className="price-solde">{goodie.solde} €</p>
                        </div>
                      ) : (
                        <p className="price-album">{goodie.price} €</p>
                      )}
                    </div>
                  )}

                  <p className="tva">{goodie.tva}</p>
                  <p className="tva">{goodie.subscriber}</p>

                  {goodie.stock === 0 && (
                    <p className="outStock"> {goodie.outStock} </p>
                  )}
                </div>
              );
            })}
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

export default Store;
