import "../css/projects.css";
import { Link } from "react-router-dom";
import store from "../json/store.json";
import Newsletter from "../components/Newsletter";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Goodies = ({
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
  setErrorMessage,
  errorMessage2,
  setErrorMessage2,
}) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);

  let { id } = useParams();
  // console.log(id);

  useEffect(() => {
    const fetchDataGoodies = async () => {
      try {
        const response = await fetch(`http://localhost:3000/goodies?id=${id}`);
        const result = await response.json();
        setData(result);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchDataGoodies();
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
          {data.map((goodies) => {
            return (
              <div key={goodies.id} className="project">
                {/* VISUEL ALBUM */}
                <div className="position-outstock">
                  {goodies.picture2 &&
                  goodies.picture3 &&
                  goodies.picture4 &&
                  goodies.picture5 ? (
                    <Carousel
                      className="carousel-id-albums"
                      showThumbs={false}
                      infiniteLoop
                      autoPlay
                      interval={10000}
                    >
                      <img src={goodies.picture1} alt="Visuel de l'album" />
                      <img src={goodies.picture2} alt="Visuel de l'album" />
                      <img src={goodies.picture3} alt="Visuel de l'album" />
                      <img src={goodies.picture4} alt="Visuel de l'album" />
                      <img src={goodies.picture5} alt="Visuel de l'album" />
                    </Carousel>
                  ) : goodies.picture2 &&
                    goodies.picture3 &&
                    goodies.picture4 &&
                    !goodies.picture5 ? (
                    <Carousel
                      className="carousel-id-albums"
                      showThumbs={false}
                      infiniteLoop
                      autoPlay
                      interval={10000}
                    >
                      <img src={goodies.picture1} alt="Visuel de l'album" />
                      <img src={goodies.picture2} alt="Visuel de l'album" />
                      <img src={goodies.picture3} alt="Visuel de l'album" />
                      <img src={goodies.picture4} alt="Visuel de l'album" />
                    </Carousel>
                  ) : (
                    <img
                      className="carousel-id-albums"
                      src={goodies.picture1}
                      alt="Visuel de l'album"
                    />
                  )}

                  {goodies.stock === 0 && (
                    <p className="outStock-project"> {goodies.outStock} </p>
                  )}
                </div>

                <div className="txt-project">
                  <p className="album-type">{goodies.type}</p>
                  <h3 className="album-artist">{goodies.artist}</h3>
                  <h4 className="album-title">{goodies.name}</h4>

                  {goodies.stock === 0 ? (
                    <p className="outstock-price">00,00 €</p>
                  ) : (
                    <div>
                      {goodies.solde ? (
                        <div className="all-album-prices">
                          <p className="album-price">
                            <s>{goodies.price} €</s>
                          </p>
                          <p className="album-solde">{goodies.solde} €</p>
                        </div>
                      ) : (
                        <p className="album-price">{goodies.price} €</p>
                      )}
                    </div>
                  )}

                  <p className="album-tva">{goodies.tva}</p>
                  <p className="album-description">{goodies.description}</p>

                  {showMore && (
                    <>
                      <div className="more-less-packs">
                        <p className="album-packs-bold">{goodies.collection}</p>
                        <p className="album-packs">{goodies.severalColors}</p>
                      </div>
                      <div className="more-less-packs">
                        <p className="album-packs">{goodies.availablesizes}</p>
                        <p className="album-packs">{goodies.children}</p>
                        <p className="album-packs">{goodies.man}</p>
                        <p className="album-packs">{goodies.woman}</p>
                      </div>
                      <div className="more-less-packs">
                        <p className="album-packs">{goodies.question}</p>
                        <p className="album-packs">{goodies.contact}</p>
                        <p className="album-packs">{goodies.phone}</p>
                      </div>
                      <div className="more-less-packs">
                        <p className="album-packs">{goodies.thanks}</p>
                        <p className="album-packs">{goodies.sign}</p>
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
                  {goodies.colors.length !== 0 && (
                    <div className="tee-shirt-color">
                      <fieldset>
                        {!errorMessage || selectedColor ? (
                          <legend>
                            Choix de votre couleur : {selectedColor}
                          </legend>
                        ) : (
                          <p className="error-message">{errorMessage}</p>
                        )}

                        {goodies.colors.map((color) => (
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

                  {goodies.stock === 0 ? (
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
                        itemsAddToCart(goodies);
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

        <div className="carousel-goodies">
          <carousel className="carousel-goodies">
            {store.goodies.map((goodie) => {
              if (goodie.id !== id) {
                return (
                  <>
                    <div className="one-project-carousel">
                      <Link
                        to={`/store/goodies/${goodie.id}`}
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                      >
                        <img
                          className="img-goodies-carousel"
                          src={goodie.picture1}
                          alt="Visuel de l'album"
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
                            <div className="all-album-prices">
                              <p className="album-price">
                                <s>{goodie.price} €</s>
                              </p>
                              <p className="album-solde">{goodie.solde} €</p>
                            </div>
                          ) : (
                            <p className="album-price">{goodie.price} €</p>
                          )}
                        </div>
                      )}

                      <p className="tva">{goodie.tva}</p>
                      <p className="tva">{goodie.subscriber}</p>

                      {goodie.stock === 0 && (
                        <p className="outStock">{goodie.outStock}</p>
                      )}

                      {goodie.new && <p className="outNew">{goodie.new}</p>}
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

export default Goodies;
