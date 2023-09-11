import "../css/projects.css";
import axios from "axios";
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
  const [, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);

  let { id } = useParams();
  // console.log(id);
  const article = store.goodies.find((goodie) => goodie.id === id);

  useEffect(() => {
    const fetchDataProjects = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_ADDRESS}/store/goodies?id=${id}`
        );
        const result = response.data;
        console.log("result=>", result);
        setData(result);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchDataProjects();
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
          <div key={article.id} className="project">
            {/* VISUEL ALBUM */}
            <div className="position-outstock">
              {article.picture2 &&
              article.picture3 &&
              article.picture4 &&
              article.picture5 ? (
                <Carousel
                  className="carousel-id-albums"
                  showThumbs={false}
                  infiniteLoop
                  autoPlay
                  interval={10000}
                >
                  <img src={article.picture1} alt="Visuel de l'album" />
                  <img src={article.picture2} alt="Visuel de l'album" />
                  <img src={article.picture3} alt="Visuel de l'album" />
                  <img src={article.picture4} alt="Visuel de l'album" />
                  <img src={article.picture5} alt="Visuel de l'album" />
                </Carousel>
              ) : article.picture2 &&
                article.picture3 &&
                article.picture4 &&
                !article.picture5 ? (
                <Carousel
                  className="carousel-id-albums"
                  showThumbs={false}
                  infiniteLoop
                  autoPlay
                  interval={10000}
                >
                  <img src={article.picture1} alt="Visuel de l'album" />
                  <img src={article.picture2} alt="Visuel de l'album" />
                  <img src={article.picture3} alt="Visuel de l'album" />
                  <img src={article.picture4} alt="Visuel de l'album" />
                </Carousel>
              ) : (
                <img
                  className="carousel-id-albums"
                  src={article.picture1}
                  alt="Visuel de l'album"
                />
              )}

              {article.stock === 0 && (
                <p className="outStock-project"> {article.outStock} </p>
              )}
            </div>

            <div className="txt-project">
              <p className="album-type">{article.type}</p>
              <h3 className="album-artist">{article.artist}</h3>
              <h4 className="album-title">{article.name}</h4>

              {article.stock === 0 ? (
                <p className="outstock-price">00,00 €</p>
              ) : (
                <div>
                  {article.solde ? (
                    <div className="all-album-prices">
                      <p className="album-price">
                        <s>{article.price} €</s>
                      </p>
                      <p className="album-solde">{article.solde} €</p>
                    </div>
                  ) : (
                    <p className="album-price">{article.price} €</p>
                  )}
                </div>
              )}

              <p className="album-tva">{article.tva}</p>
              <p className="album-description">{article.description}</p>

              {showMore && (
                <>
                  <div className="more-less-packs">
                    <p className="album-packs-bold">{article.collection}</p>
                    <p className="album-packs">{article.severalColors}</p>
                  </div>
                  <div className="more-less-packs">
                    <p className="album-packs">{article.availablesizes}</p>
                    <p className="album-packs">{article.children}</p>
                    <p className="album-packs">{article.man}</p>
                    <p className="album-packs">{article.woman}</p>
                  </div>
                  <div className="more-less-packs">
                    <p className="album-packs">{article.question}</p>
                    <p className="album-packs">{article.contact}</p>
                    <p className="album-packs">{article.phone}</p>
                  </div>
                  <div className="more-less-packs">
                    <p className="album-packs">{article.thanks}</p>
                    <p className="album-packs">{article.sign}</p>
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
              {article.colors.length !== 0 && (
                <div className="tee-shirt-color">
                  <fieldset>
                    {!errorMessage || selectedColor ? (
                      <legend>Choix de votre couleur : {selectedColor}</legend>
                    ) : (
                      <p className="error-message">{errorMessage}</p>
                    )}

                    {article.colors.map((color) => (
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

              {article.stock === 0 ? (
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
                    itemsAddToCart(article);
                  }}
                >
                  Ajouter au panier
                </button>
              )}
            </div>
          </div>
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
