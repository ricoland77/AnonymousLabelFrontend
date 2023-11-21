import "../css/header.css";

import { NavLink, Link } from "react-router-dom";
import { React, useState } from "react";

import logoAl from "../images/logo-al.png";
import burgerPicto from "../images/burger-picto.png";
import shoppingCart from "../images/panier.svg";

import Sound from "./Sound";

const Header = ({
  cart,
  setCart,
  displayMenu,
  setDisplayMenu,
  token,
  setUser,
}) => {
  const { active1 } = useState(false);

  const refreshPage = () => {
    window.location.reload(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="integer-header">
      <div className="container all-top-menu">
        {token ? (
          <div className="disconnect-and-sound">
            <button
              className="btn-login top-menu"
              onClick={() => {
                setUser(null);
              }}
            >
              Déconnexion
            </button>
            <Sound />
          </div>
        ) : (
          <div className="container top-menu" style={{ width: "100%" }}>
            <Link to="/login">
              <button className="btn-login">se connecter</button>
            </Link>
            <Link to="/signup">
              <button className="btn-signup">s’inscrire</button>
            </Link>
            <Sound />
          </div>
        )}
      </div>

      <div className="container all-header">
        <div className="logo-span">
          <img className="logo-al" src={logoAl} alt="" />
          <span>
            <h1 className="txt-logo">Anonymous Label</h1>
          </span>
          {/* <Sound /> */}
        </div>
        {/* MENU BURGER */}
        <div
          className="menu-burger"
          onClick={() => {
            setDisplayMenu(!displayMenu);
          }}
        >
          <img className="burger" src={burgerPicto} alt="" />
        </div>
        <nav className="all-header-nav">
          <ul className="header-nav">
            <li
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <NavLink
                to="/"
                className={active1 === true ? "active" : "nav-link"}
              >
                Accueil
              </NavLink>
            </li>
            <li
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <div className="menu">
                <div className="rubrique">
                  <NavLink
                    to="/artists"
                    className={active1 === true ? "active" : "nav-link"}
                  >
                    Artistes
                  </NavLink>
                </div>

                <div className="sous-menu contenu">
                  <div className="element-sous-menu">
                    <NavLink
                      to="/artist/2mezur"
                      className={active1 === true ? "active" : "nav-link"}
                    >
                      2mezur
                    </NavLink>
                  </div>

                  <div className="element-sous-menu">
                    <NavLink
                      to="/artist/berlan"
                      className={active1 === true ? "active" : "nav-link"}
                    >
                      Berlan
                    </NavLink>
                  </div>

                  <div className="element-sous-menu">
                    <NavLink
                      to="/artist/degy"
                      className={active1 === true ? "active" : "nav-link"}
                    >
                      Degy Le Resk.p
                    </NavLink>
                  </div>

                  <div className="element-sous-menu">
                    <NavLink
                      to="/artist/docrmisterm"
                      className={active1 === true ? "active" : "nav-link"}
                    >
                      Dr.R & Mr.M
                    </NavLink>
                  </div>

                  <div className="element-sous-menu">
                    <NavLink
                      to="/artist/evilvenom"
                      className={active1 === true ? "active" : "nav-link"}
                    >
                      Evil Venom
                    </NavLink>
                  </div>

                  <div className="element-sous-menu">
                    <NavLink
                      to="/artist/lascaride"
                      className={active1 === true ? "active" : "nav-link"}
                    >
                      Lascaride
                    </NavLink>
                  </div>

                  <div className="element-sous-menu">
                    <NavLink
                      to="/artist/lesalphas"
                      className={active1 === true ? "active" : "nav-link"}
                    >
                      Les Alphas
                    </NavLink>
                  </div>

                  <div className="element-sous-menu">
                    <NavLink
                      to="/artist/maelyss"
                      className={active1 === true ? "active" : "nav-link"}
                    >
                      Maëlyss
                    </NavLink>
                  </div>

                  <div className="element-sous-menu">
                    <NavLink
                      to="/artist/oner"
                      className={active1 === true ? "active" : "nav-link"}
                    >
                      Oner
                    </NavLink>
                  </div>

                  <div className="element-sous-menu">
                    <NavLink
                      to="/artist/safnoruff"
                      className={active1 === true ? "active" : "nav-link"}
                    >
                      Saf Noruff
                    </NavLink>
                  </div>

                  <div className="element-sous-menu">
                    <NavLink
                      to="/artist/scamleon"
                      className={active1 === true ? "active" : "nav-link"}
                    >
                      Scam Leon
                    </NavLink>
                  </div>

                  <div className="element-sous-menu">
                    <NavLink
                      to="/artist/skiizo"
                      className={active1 === true ? "active" : "nav-link"}
                    >
                      Skiizo
                    </NavLink>
                  </div>

                  <div className="element-sous-menu">
                    <NavLink
                      to="/artist/slim"
                      className={active1 === true ? "active" : "nav-link"}
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
                className={active1 === true ? "active" : "nav-link"}
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
                className={active1 === true ? "active" : "nav-link"}
              >
                Actualités
              </NavLink>
            </li> */}
            <li
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <div className="menu">
                <div className="rubrique">
                  <NavLink
                    to="/studio"
                    className={active1 === true ? "active" : "nav-link"}
                  >
                    Studio AR13
                  </NavLink>
                </div>

                <div className="sous-menu">
                  <div className="element-sous-menu">
                    <NavLink
                      to="/studio/reservation"
                      className={active1 === true ? "active" : "nav-link"}
                    >
                      Réservations
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
              <div className="menu">
                <div className="rubrique">
                  <NavLink
                    to="/store"
                    className={active1 === true ? "active" : "nav-link"}
                  >
                    Boutique
                  </NavLink>
                </div>

                {/* <div className="sous-menu">
                  <div className="element-sous-menu">
                    <NavLink
                      to="/studio/cartecadeau"
                      className={active1 === true ? "active" : "nav-link"}
                    >
                      Carte cadeau
                    </NavLink>
                  </div>
                </div> */}
              </div>
            </li>

            <li onClick={refreshPage}>
              <NavLink
                to="/contact"
                className={active1 === true ? "active" : "nav-link"}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <Link
          to="/cart-page"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <div className="cart-sound">
            <img
              className="shopping-cart-picto"
              src={shoppingCart}
              alt="Panier"
            />

            {cart.length === 0 ? (
              <span className="quantity-cart">{cart.length}</span>
            ) : (
              <div>
                {cart.map((album) => {
                  let totalQuantity = 0;

                  // Calculer le nombre total d'éléments dans le panier
                  cart.forEach((album) => {
                    totalQuantity += album.quantity;
                  });

                  return (
                    <div key={album.id} className="quantity-cart2">
                      <span> {totalQuantity} </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
