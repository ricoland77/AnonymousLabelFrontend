import "../css/projects.css";
import { Link } from "react-router-dom";
import store from "../json/store.json";
import Newsletter from "../components/Newsletter";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Packs = ({
  itemsAddToCart,
  albumRemoveFromCart,
  cart,
  setCart,
  displayCart,
  setDisplayCart,
  selectedColor,
  setSelectedColor,
  selectedSize,
  setSelectedSize,
  errorMessage,
  errorMessage2,
}) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);

  let { id } = useParams();
  // console.log(id);

  useEffect(() => {
    const fetchDataPacks = async () => {
      try {
        const response = await fetch(`http://localhost:3000/packs?id=${id}`);
        const result = await response.json();
        setData(result);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchDataPacks();
  }, [id]);

  const onColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  return isLoading ? (
    <div className="container-loader">
      <div className="loader">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  ) : (
    <>
      <div className="container">
        <div className="all-project">
          {data.map((pack) => {
            return (
              <div key={pack.id} className="project">
                <div className="position-outstock">
                  <img
                    src={pack.picture1}
                    alt="Visuel de l'album"
                    className="img-packs"
                  />
                  {pack.stock === 0 && (
                    <p className="outStock-project"> {pack.outStock} </p>
                  )}
                </div>

                <div className="txt-project">
                  <p className="album-type">{pack.type}</p>
                  <h3 className="album-artist">{pack.artist}</h3>
                  <h4 className="album-title">{pack.name}</h4>

                  {pack.stock === 0 ? (
                    <p className="outstock-price">00,00 €</p>
                  ) : (
                    <div>
                      {pack.solde ? (
                        <div className="all-album-prices">
                          <p className="album-price">
                            <s>{pack.price} €</s>
                          </p>
                          <p className="album-solde">{pack.solde} €</p>
                        </div>
                      ) : (
                        <p className="album-price">{pack.price} €</p>
                      )}
                    </div>
                  )}

                  <p className="album-tva">{pack.tva}</p>
                  <p className="album-tva">{pack.subscriber}</p>

                  {showMore && (
                    <>
                      <div className="more-less-packs">
                        <p className="album-packs-bold">{pack.type}</p>
                        <p className="album-packs-ital">{pack.name}</p>
                      </div>
                      <div className="more-less-packs">
                        <p className="album-packs">{pack.thanks}</p>
                        <p className="album-packs">{pack.copyright}</p>
                      </div>
                    </>
                  )}

                  {showMore ? (
                    <button
                      className="btn-show-more-less"
                      onClick={() => {
                        setShowMore(!showMore);
                      }}
                    >
                      En savoir moins
                    </button>
                  ) : (
                    <button
                      className="btn-show-more-less"
                      onClick={() => {
                        setShowMore(!showMore);
                      }}
                    >
                      En savoir plus
                    </button>
                  )}

                  {/* CHOIX DE LA COULEUR */}
                  {pack.colors.length !== 0 && (
                    <div className="tee-shirt-color">
                      <fieldset>
                        {!errorMessage || selectedColor ? (
                          <legend>
                            Choix de votre couleur : {selectedColor}
                          </legend>
                        ) : (
                          <p className="error-message">{errorMessage}</p>
                        )}

                        {pack.colors.map((color) => (
                          <label key={color} className="color-option">
                            <input
                              type="radio"
                              name="color"
                              value={color}
                              checked={selectedColor === color}
                              onChange={() => onColorChange(color)}
                            />

                            <span
                              className="color-radio"
                              style={{
                                backgroundColor:
                                  selectedColor === color ? color : color,
                              }}
                            />
                          </label>
                        ))}
                      </fieldset>
                    </div>
                  )}

                  {/* CHOIX DE LA TAILLE */}
                  <div className="tee-shirt-size">
                    {!errorMessage2 || selectedSize ? (
                      <label htmlFor="sizes-select">
                        Choix de votre taille : {selectedSize}
                      </label>
                    ) : (
                      <label htmlFor="sizes-select">
                        <p className="error-message">{errorMessage2}</p>
                      </label>
                    )}

                    <select
                      name="sizes"
                      className="sizes-select"
                      value={selectedSize}
                      onChange={handleSizeChange}
                    >
                      <option value="">Selectionner</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>
                      <option value="XXXL">XXXL</option>
                    </select>
                  </div>

                  {pack.stock === 0 ? (
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
                        setDisplayCart(!displayCart);
                        itemsAddToCart(pack);
                      }}
                    >
                      Ajouter au panier
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <section className="section-store-bis">
        <span>
          <h2>Articles similaires</h2>
        </span>

        <div className="carousel-packs">
          <carousel className="carousel-packs">
            {store.packs.map((pack) => {
              if (pack.id !== id) {
                return (
                  <>
                    <div className="one-project-carousel">
                      <Link
                        to={`/store/packs/${pack.id}`}
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                      >
                        <img
                          className="img-project-carousel"
                          src={pack.picture1}
                          alt="Visuel de l'album"
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
                            <div className="all-album-prices">
                              <p className="album-price">
                                <s>{pack.price} €</s>
                              </p>
                              <p className="album-solde">{pack.solde} €</p>
                            </div>
                          ) : (
                            <p className="album-price">{pack.price} €</p>
                          )}
                        </div>
                      )}

                      <p className="tva">{pack.tva}</p>
                      <p className="tva">{pack.subscriber}</p>

                      {pack.stock === 0 && (
                        <p className="outStock">{pack.outStock}</p>
                      )}

                      {pack.new && <p className="outNew">{pack.new}</p>}
                    </div>
                  </>
                );
              }
              return null;
            })}
          </carousel>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section4">
        <Newsletter />
      </section>
    </>
  );
};

export default Packs;
