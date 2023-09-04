import "../css/checkOut.css";
import axios from "axios";
import { Link } from "react-router-dom";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = ({
  cart,
  setCart,
  edit,
  edit2,
  edit3,
  setEdit3,
  tva,
  total,
  subTotal,
  shipping,
  totalExpedition,
  selectedCountry,
  completed,
  setCompleted,
  email,
  firstname,
  name,
  phone,
  adress,
  postalCode,
  city,
  regionSelect,
  orderSummaryCart,
  resetCartAfterPayment,
}) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // récupérer les codes de CB
      const cardElement = elements.getElement(CardElement);

      // Demander un token à stripe
      const stripeResponse = await stripe.createToken(cardElement, {
        name: name + " " + firstname,
      });
      // console.log(stripeResponse);

      const stripeToken = stripeResponse.token.id;
      // console.log(stripeToken);
      // console.log("total :", total);

      const orderData = {
        email,
        firstname,
        name,
        phone,
        selectedCountry,
        adress,
        postalCode,
        city,
        regionSelect,
        total,
        stripeToken,
        orderSummaryCart: cart.map((album) => ({
          artist: album.artist,
          name: album.name,
          quantity: album.quantity,
        })),
      };

      const response = await axios.post(
        "http://localhost:4000/payment",
        orderData
      );
      console.log(response.data);

      if (response.data === "succeeded") {
        setCompleted(true);
        resetCartAfterPayment();
      }

      if (response.data === "succeeded") {
        resetCartAfterPayment();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return completed ? (
    <div className="aaaa">
      <div className="bbbb">
        <p className="success-payment">Paiement effectué avec succès</p>

        <div className="order-summary">
          <div>
            <p className="title-cart-checkout">Résumé de la commande</p>
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
            {orderSummaryCart.map((album) => {
              if (album.solde) {
                subTotal += album.solde * album.quantity;
              } else {
                subTotal += album.price * album.quantity;
              }

              total = subTotal + shipping * totalExpedition + tva;
              // console.log("ok...=>", total);

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
                        <span className="artist-checkout">{album.artist}</span>
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
          <div>
            <div className="title-information-letf-bis">
              <p>Adresse de livraison</p>
            </div>
            <p className="delivery-address">
              {firstname} {name}
            </p>
            <p className="delivery-address">{adress}</p>
            <p className="delivery-address">
              {postalCode} {city}
            </p>
            <p className="delivery-address">{regionSelect}</p>
            <p className="delivery-address">{selectedCountry}</p>
          </div>
        </div>

        <Link
          to="/"
          className="continue-browsing"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <p>Continuer de parcourir le site</p>
        </Link>
      </div>
    </div>
  ) : (
    <form onSubmit={handleSubmit}>
      <CardElement className="input-card-element" />
      <input
        type="submit"
        value="Continuer"
        className="btn-continue"
        onClick={() => {
          setEdit3(!edit3);
          window.scrollTo(0, 0);
        }}
        style={!edit3 || edit || edit2 ? { display: "none" } : {}}
      />
    </form>
  );
};

export default CheckoutForm;
