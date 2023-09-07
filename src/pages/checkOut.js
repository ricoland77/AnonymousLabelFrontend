import "../css/checkOut.css";
import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Link } from "react-router-dom";

import PayementForm from "../components/PayementForm";
import CheckoutForm from "../components/CheckoutForm";

// const STRIPE_SITE_KEY = process.env.REACT_APP_STRIPE_SECRET_KEY;
const stripePromise = loadStripe(
  "pk_test_51NXKJpC5SSNjldEjJDSWge9phJeDwy8WjgnxZTHrxJjOuXP0za9f5HNqMjLGSU3RuNhzQ5rnvixAhayJtv1ZoEU700JtMuXUNG"
);

const CheckOut = ({
  albumAddToCart,
  albumRemoveFromCart,
  albumTrashFromCart,
  cart,
  setCart,
  displayCart,
  setDisplayCart,
  email,
  setEmail,
  firstname,
  setFirstname,
  name,
  setName,
  phone,
  setPhone,
  company,
  setCompany,
  selectedCountry,
  setSelectedCountry,
  adress,
  setAdress,
  postalCode,
  setPostalCode,
  city,
  setCity,
  regionSelect,
  setRegionSelect,
  edit,
  setEdit,
  edit2,
  setEdit2,
  edit3,
  setEdit3,
  emailError,
  setEmailError,
  firstnameError,
  setFirstnameError,
  nameError,
  setNameError,
  phoneError,
  setPhoneError,
  tva,
  setTva,
  isFixed,
  setIsFixed,
  shipping,
  setShipping,
  subTotal,
  totalExpedition,
  total,
  setTotal,
  description,
  setDescription,
  completed,
  setCompleted,
}) => {
  const [orderSummaryCart, setOrderSummaryCart] = useState([]);

  // Fonction pour réinitialiser le panier après le paiement
  const resetCartAfterPayment = () => {
    // Sauvegarder le contenu du panier dans une nouvelle variable
    setOrderSummaryCart(cart.slice());
    // Vider le panier
    setCart([]);
  };

  useEffect(() => {
    let newSubTotal = 0;
    cart.forEach((album) => {
      if (album.solde) {
        newSubTotal += album.solde * album.quantity;
      } else {
        newSubTotal += album.price * album.quantity;
      }
    });

    const newTotal = newSubTotal + shipping * totalExpedition + tva;
    setTotal(newTotal);
  }, [cart, shipping, totalExpedition, tva, setTotal]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 644;
      if (window.scrollY > scrollThreshold) {
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIsFixed]);

  cart.forEach((album) => {
    totalExpedition += album.quantity;
  });

  useEffect(() => {
    // Calculer la TVA lorsque subTotal change
    let tvaValue = (subTotal / 100) * 20;
    setTva(tvaValue);
  }, [subTotal, setTva]);

  useEffect(() => {
    if (selectedCountry === "France") {
      setShipping(0);
    } else {
      setShipping(3);
    }
  }, [selectedCountry, setShipping]);

  return (
    <div className="container">
      <div className="container-form-payement">
        {/* PARTIE GAUCHE FORMULAIRE */}
        <div className={`form-payment-left ${completed ? "full-width" : ""}`}>
          {/* INFORMATIONS DE LIVRAISON */}
          <div className="all-section">
            {!completed && (
              <div className="title-information-letf">
                <p>Informations de livraison</p>
                <span
                  className="btn-edit"
                  onClick={() => {
                    setEdit(!edit);
                  }}
                  style={edit ? { display: "none" } : {}}
                >
                  Modifier
                </span>
              </div>
            )}

            <PayementForm
              albumTrashFromCart={albumTrashFromCart}
              albumAddToCart={albumAddToCart}
              albumRemoveFromCart={albumRemoveFromCart}
              cart={cart}
              setCart={setCart}
              setDisplayCart={setDisplayCart}
              email={email}
              setEmail={setEmail}
              firstname={firstname}
              setFirstname={setFirstname}
              name={name}
              setName={setName}
              phone={phone}
              setPhone={setPhone}
              company={company}
              setCompany={setCompany}
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
              adress={adress}
              setAdress={setAdress}
              postalCode={postalCode}
              setPostalCode={setPostalCode}
              city={city}
              setCity={setCity}
              regionSelect={regionSelect}
              setRegionSelect={setRegionSelect}
              shipping={shipping}
              setShipping={setShipping}
              edit={edit}
              setEdit={setEdit}
              edit2={edit2}
              setEdit2={setEdit2}
              edit3={edit3}
              setEdit3={setEdit3}
              tva={tva}
              setTva={setTva}
              isFixed={isFixed}
              setIsFixed={setIsFixed}
              emailError={emailError}
              setEmailError={setEmailError}
              firstnameError={firstnameError}
              setFirstnameError={setFirstnameError}
              nameError={nameError}
              setNameError={setNameError}
              phoneError={phoneError}
              setPhoneError={setPhoneError}
              subTotal={subTotal}
              totalExpedition={totalExpedition}
              total={total}
              description={description}
              setDescription={setDescription}
              completed={completed}
              setCompleted={setCompleted}
            />
          </div>

          {/*  */}
          {/* MODE DE LIVRAISON */}
          {!completed && (
            <div className="all-section">
              <div className="shipping-method-letf">
                {!completed && (
                  <div className="title-information-letf">
                    <p>Mode de livraison</p>
                    <span
                      className="btn-edit"
                      onClick={() => {
                        setEdit2(!edit2);
                      }}
                      style={edit || edit2 ? { display: "none" } : {}}
                    >
                      Modifier
                    </span>
                  </div>
                )}

                {!edit ? (
                  <>
                    {selectedCountry === "France" ? (
                      <>
                        {edit2 ? ( // Vérifiez si edit2 est vrai, si oui, affichez le contenu de la div
                          <div className="shipping-method">
                            <div className="select-shipping-method">
                              <input
                                className="radio"
                                type="radio"
                                defaultChecked
                              />
                              <span>Livraison standard</span>
                            </div>
                            <span>Gratuit</span>
                          </div>
                        ) : (
                          <span className="infos-text">
                            Livraison standard Gratuit
                          </span>
                        )}
                      </>
                    ) : (
                      <>
                        {edit2 ? ( // Vérifiez si edit2 est vrai, si oui, affichez le contenu de la div
                          <div className="shipping-method">
                            <div className="select-shipping-method">
                              <input
                                className="radio"
                                type="radio"
                                defaultChecked
                              />
                              <span>Offre spéciale</span>
                            </div>
                            <span>
                              {(shipping * totalExpedition).toFixed(2)} €
                            </span>
                          </div>
                        ) : (
                          <span className="infos-text">
                            Offre spéciale{" : "}
                            {(shipping * totalExpedition).toFixed(2)} €
                          </span>
                        )}
                      </>
                    )}

                    <button
                      className="btn-continue"
                      onClick={() => {
                        setEdit2(!edit2);
                        window.scrollTo(0, 0);
                      }}
                      style={!edit2 ? { display: "none" } : {}}
                    >
                      Continuer
                    </button>
                  </>
                ) : (
                  !edit && (
                    <span className="infos-text">
                      Livraison standard Gratuit
                    </span>
                  )
                )}
              </div>
            </div>
          )}

          {/*  */}
          {/* PAIEMENT */}
          <div className="all-section">
            <div className="shipping-method-letf">
              <div className="title-information-letf">
                {!completed && (
                  <>
                    <p>Paiement</p>
                    <span
                      className="btn-edit"
                      onClick={() => {
                        setEdit3(!edit3);
                      }}
                      style={edit || edit2 || edit3 ? { display: "none" } : {}}
                    >
                      Modifier
                    </span>
                  </>
                )}
              </div>
              {!edit && !edit2 && (
                <div>
                  <Elements stripe={stripePromise}>
                    <CheckoutForm
                      cart={cart}
                      setCart={setCart}
                      edit={edit}
                      edit2={edit2}
                      edit3={edit3}
                      setEdit3={setEdit3}
                      total={total}
                      setTotal={setTotal}
                      completed={completed}
                      setCompleted={setCompleted}
                      tva={tva}
                      isFixed={isFixed}
                      subTotal={subTotal}
                      shipping={shipping}
                      totalExpedition={totalExpedition}
                      selectedCountry={selectedCountry}
                      email={email}
                      firstname={firstname}
                      name={name}
                      phone={phone}
                      adress={adress}
                      postalCode={postalCode}
                      city={city}
                      description={description}
                      setDescription={setDescription}
                      regionSelect={regionSelect}
                      orderSummaryCart={orderSummaryCart}
                      setOrderSummaryCart={setOrderSummaryCart}
                      resetCartAfterPayment={resetCartAfterPayment}
                    />
                  </Elements>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* PARTIE DROITE PANIER */}
        {!completed && (
          <div className={`resume-right ${isFixed ? "" : "is-absolute"}`}>
            <div>
              <p className="title-cart-checkout">
                Résumé de la commande
                {cart.map((album) => {
                  let totalQuantity = 0;
                  cart.forEach((album) => {
                    totalQuantity += album.quantity;
                  });
                  return (
                    <span key={album.id} className="quantity-cart3">
                      {totalQuantity}
                    </span>
                  );
                })}
              </p>
              {!completed && (
                <Link
                  to="/cart-page"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className="modify-cart"
                >
                  Modifier le panier
                </Link>
              )}
            </div>
            <div className="list-albums">
              {cart.map((album) => {
                if (album.solde) {
                  subTotal += album.solde * album.quantity;
                } else {
                  subTotal += album.price * album.quantity;
                }

                total = subTotal + shipping * totalExpedition + tva;
                console.log("ok...=>", total);

                return (
                  <div key={album.id} className="line-album-ckeckout">
                    <div className="img-txt-checkout">
                      <img
                        className="img-album-cart-ckeckout"
                        src={album.picture1}
                        alt="Visuel de l'album"
                      />
                      <div className="txt-cart-checkout">
                        <div className="first-txt-checkout">
                          <span className="artist-checkout">
                            {album.artist}
                          </span>
                          <span className="artist-name-checkout">
                            {album.name}
                          </span>
                        </div>

                        <div className="all-less-more-btn">
                          <span>Qté : </span>
                          <span className="quantity-num">{album.quantity}</span>
                        </div>
                      </div>
                    </div>
                    {album.solde ? (
                      <span>{(album.solde * album.quantity).toFixed(2)} €</span>
                    ) : (
                      <span>{(album.price * album.quantity).toFixed(2)} €</span>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="line-album-total-checkout">
              <span className="total-cart-page">Sous-total</span>
              <span className="total-price">{subTotal.toFixed(2)} €</span>
            </div>

            <div className="line-album-total-page">
              <span className="total-cart-page">Livraison</span>
              <span className="total-price">
                {selectedCountry === "France"
                  ? "GRATUIT"
                  : `${(shipping * totalExpedition).toFixed(2)} €`}
              </span>
            </div>

            <div className="line-album-total-page">
              <span className="total-cart-page">TVA</span>

              <span className="total-price">{tva.toFixed(2)} €</span>
            </div>

            <div className="line-album-total-page">
              <span className="real-total-cart-page">Total</span>
              <span className="total-price-page">{total.toFixed(2)} €</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckOut;
