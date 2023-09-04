import "../css/realisations.css";
import React from "react";
import realisations from "../json/realisations.json";

import Newsletter from "../components/Newsletter";

import pictoMore from "../images/picto-more.png";
import scred from "../images/scred.jpg";

const Realisations = () => {
  return (
    <>
      <div className="container">
        <div className="img-center">
          <img
            className="artists"
            src="https://res.cloudinary.com/dn7pf2dts/image/upload/v1681917296/AnonymousLabel/covers/realisation-visual02_gcsl0j.jpg"
            alt="realisations"
          />
        </div>
        <section className="section-rea">
          <span>
            <h2>Nos réalisations</h2>
          </span>
          <p className="rea-description">
            Toutes nos réalisations sont disponibles à la Scred Boutique :<br />
            80, rue Marcadet – 75018 Paris. <br />
            <a
              className="scred-boutique"
              href="https://scredboutique.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={scred} alt="Logo Scred Boutique" />
            </a>
          </p>

          <p className="rea-description-bis">
            Nos projets sont également disponibles sur toutes les plateformes de
            streaming et de téléchargement.
          </p>

          <div className="all-realisations">
            <div className="realisation">
              {realisations.albums.map((album) => {
                return (
                  <div className="box-realisation" key={album.id}>
                    <img
                      className="visual-album"
                      src={album.picture}
                      alt="visual-album"
                    />
                    <h4>{album.name}</h4>
                    <p>{album.type}</p>
                    {album.link && (
                      <a
                        className="realisation-link"
                        href={album.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className="picto-more"
                          src={pictoMore}
                          alt="picto Plus"
                        />
                      </a>
                    )}
                  </div>
                );
              })}
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

export default Realisations;
