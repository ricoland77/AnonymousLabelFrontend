import { React, useState } from "react";
import "../css/burgerMenu.css";
import { NavLink } from "react-router-dom";

const MenuBurger = ({ setDisplayMenu }) => {
  const { active1 } = useState(false);

  return (
    <div className="app">
      <div
        className="floating-menu-root"
        onClick={() => {
          setDisplayMenu(false);
        }}
      >
        <div
          className="floating-menu"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <button
            className="btn-close"
            onClick={() => {
              setDisplayMenu(false);
            }}
          >
            X
          </button>

          <nav className="all-header-nav">
            <ul className="burger-nav">
              <li
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <NavLink
                  to="/"
                  className={active1 === true ? "active" : "burger-link"}
                >
                  Accueil
                </NavLink>
              </li>
              <li
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <div className="menu2">
                  <div className="rubrique">
                    <NavLink
                      to="/artists"
                      className={active1 === true ? "active" : "burger-link"}
                    >
                      Artistes
                    </NavLink>
                  </div>

                  <div className="sous-menu2 contenu2">
                    <div className="element-sous-menu2">
                      <NavLink
                        to="/artist/2mezur"
                        className={active1 === true ? "active" : "burger-link"}
                      >
                        2mezur
                      </NavLink>
                    </div>

                    <div className="element-sous-menu2">
                      <NavLink
                        to="/artist/berlan"
                        className={active1 === true ? "active" : "burger-link"}
                      >
                        Berlan
                      </NavLink>
                    </div>

                    <div className="element-sous-menu2">
                      <NavLink
                        to="/artist/degy"
                        className={active1 === true ? "active" : "burger-link"}
                      >
                        Degy Le Resk.p
                      </NavLink>
                    </div>

                    <div className="element-sous-menu2">
                      <NavLink
                        to="/artist/docrmisterm"
                        className={active1 === true ? "active" : "burger-link"}
                      >
                        Dr.R & Mr.M
                      </NavLink>
                    </div>

                    <div className="element-sous-menu2">
                      <NavLink
                        to="/artist/evilvenom"
                        className={active1 === true ? "active" : "burger-link"}
                      >
                        Evil Venom
                      </NavLink>
                    </div>

                    <div className="element-sous-menu2">
                      <NavLink
                        to="/artist/lascaride"
                        className={active1 === true ? "active" : "burger-link"}
                      >
                        Lascaride
                      </NavLink>
                    </div>

                    <div className="element-sous-menu2">
                      <NavLink
                        to="/artist/lesalphas"
                        className={active1 === true ? "active" : "burger-link"}
                      >
                        Les Alphas
                      </NavLink>
                    </div>

                    <div className="element-sous-menu2">
                      <NavLink
                        to="/artist/maelyss"
                        className={active1 === true ? "active" : "burger-link"}
                      >
                        Maëlyss
                      </NavLink>
                    </div>

                    <div className="element-sous-menu2">
                      <NavLink
                        to="/artist/oner"
                        className={active1 === true ? "active" : "burger-link"}
                      >
                        Oner
                      </NavLink>
                    </div>

                    <div className="element-sous-menu2">
                      <NavLink
                        to="/artist/safnoruff"
                        className={active1 === true ? "active" : "burger-link"}
                      >
                        Saf Noruff
                      </NavLink>
                    </div>

                    <div className="element-sous-menu2">
                      <NavLink
                        to="/artist/scamleon"
                        className={active1 === true ? "active" : "burger-link"}
                      >
                        Scam Leon
                      </NavLink>
                    </div>

                    <div className="element-sous-menu2">
                      <NavLink
                        to="/artist/skiizo"
                        className={active1 === true ? "active" : "burger-link"}
                      >
                        Skiizo
                      </NavLink>
                    </div>

                    <div className="element-sous-menu2">
                      <NavLink
                        to="/artist/slim"
                        className={active1 === true ? "active" : "burger-link"}
                      >
                        Slim
                      </NavLink>
                    </div>
                  </div>
                </div>
              </li>
              <li
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <NavLink
                  to="/realisations"
                  className={active1 === true ? "active" : "burger-link"}
                >
                  Nos réalisations
                </NavLink>
              </li>
              {/* <li
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <NavLink
                  to="/news"
                  className={active1 === true ? "active" : "burger-link"}
                >
                  Actualités
                </NavLink>
              </li> */}
              <li
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <div className="menu2">
                  <div className="rubrique">
                    <NavLink
                      to="/studio"
                      className={active1 === true ? "active" : "burger-link"}
                    >
                      Studio AR13
                    </NavLink>
                  </div>

                  <div className="sous-menu2 contenu2">
                    <NavLink
                      to="/studio/reservation"
                      className={active1 === true ? "active" : "burger-link"}
                    >
                      Réservations
                    </NavLink>
                  </div>
                </div>
              </li>
              <li
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <div className="menu2">
                  <div className="rubrique">
                    <NavLink
                      to="/store"
                      className={active1 === true ? "active" : "burger-link"}
                    >
                      Boutique
                    </NavLink>
                  </div>

                  {/* <div className="sous-menu2 contenu2">
                    <NavLink
                      to="/store/cartecadeau"
                      className={active1 === true ? "active" : "burger-link"}
                    >
                      Carte cadeau
                    </NavLink>
                  </div> */}
                </div>
              </li>
              <li
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <NavLink
                  to="/contact"
                  className={active1 === true ? "active" : "burger-link"}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MenuBurger;
