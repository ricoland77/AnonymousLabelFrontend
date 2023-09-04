import "../css/cartModal.css";
import { Link } from "react-router-dom";
import trash from "../images/trash-picto.svg";

const CartModal = ({
  albumAddToCart,
  albumRemoveFromCart,
  albumTrashFromCart,
  cart,
  setCart,
  displayCart,
  setDisplayCart,
}) => {
  // Déclaration de mon sous-total
  let total = 0;

  return (
    <div
      className="background-cart-modal"
      onClick={() => {
        setDisplayCart(false);
      }}
    >
      <div
        className="cart-modal"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div>
          <div className="title-cart-modal">
            <p
              className="close-cart"
              onClick={() => {
                setDisplayCart(false);
              }}
            >
              X
            </p>
            <p className="title-cart">Panier</p>
          </div>
          {cart.length !== 0 ? (
            <div className="list-albums">
              {cart.map((album) => {
                if (album.solde) {
                  total += album.solde * album.quantity;
                } else {
                  total += album.price * album.quantity;
                }

                return (
                  <div key={album.id} className="line-album">
                    <img
                      className="img-album-cart"
                      src={album.picture1}
                      alt="Visuel de l'album"
                    />
                    <div className="txt-cart">
                      <span className="artist-name">{album.artist}</span>
                      {album.solde ? (
                        <span>
                          {(album.solde * album.quantity).toFixed(2)} €
                        </span>
                      ) : (
                        <span>
                          {(album.price * album.quantity).toFixed(2)} €
                        </span>
                      )}

                      <div className="all-less-more-btn">
                        <button
                          className="less-more-btn"
                          onClick={() => {
                            albumRemoveFromCart(album);
                          }}
                        >
                          -
                        </button>
                        <span className="quantity-num">{album.quantity}</span>
                        <button
                          className="less-more-btn"
                          onClick={() => {
                            albumAddToCart(album);
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <img
                      src={trash}
                      alt="Corbeille"
                      className="trash-cart"
                      onClick={() => {
                        albumTrashFromCart(album);
                      }}
                    />
                  </div>
                );
              })}

              <div className="line-album-total">
                <span className="total-cart">Total</span>
                <span className="total-price-page">{total.toFixed(2)} €</span>
              </div>
            </div>
          ) : (
            <div className="cart-one">
              <p className="empty-cart">Le panier est vide</p>
            </div>
          )}
        </div>
        <Link to="/cart-page">
          <button
            className="btn-cart"
            onClick={() => {
              setDisplayCart(false);
              window.scrollTo(0, 0);
            }}
          >
            Voir le panier
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartModal;
