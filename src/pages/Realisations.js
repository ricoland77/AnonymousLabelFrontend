import "../css/realisations.css";
import React from "react";
import realisations from "../json/realisations.json";

import Newsletter from "../components/Newsletter";

// import pictoMore from "../images/picto-more.png";
import scred from "../images/scred.jpg";

const Realisations = () => {
  return (
    <>
      <div className="container">
        <section className="section-rea">
          <span>
            <h2 className="first-tittle-realisation">Nos réalisations</h2>
          </span>
          <p className="rea-description">
            Toute nos réalisations en physique sont disponibles à la Scred
            boutique :
            <br />
            80, rue Marcadet – 75018 Paris - www.scredboutique.com <br />
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
            Nos projets sont également disponibles sur toutes les plates formes
            de streaming et de téléchargement.
            <br />
            Pour acquérir ou pour plus d'informations concernant nos projets, il
            suffit de cliquer sur les pochettes, qui vous dirigeront vers des
            liens sécurisés.
          </p>

          <div className="all-realisations">
            <div className="realisation">
              {realisations.albums.map((album) => {
                return (
                  <div className="box-realisation" key={album.id}>
                    <a
                      className="realisation-link"
                      href={album.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="visual-album"
                        src={album.picture}
                        alt="visual-album"
                      />
                      <h4>{album.name}</h4>
                      <p>{album.type}</p>
                    </a>
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
