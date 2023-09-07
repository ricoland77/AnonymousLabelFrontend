import "../css/projects.css";
import { Link } from "react-router-dom";
import store from "../json/store.json";

import Newsletter from "../components/Newsletter";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Project = ({
  albumAddToCart,
  albumRemoveFromCart,
  cart,
  setCart,
  displayCart,
  setDisplayCart,
}) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);

  let { id } = useParams();
  // console.log(id);

  // `http://localhost:3000/projects?id=${id}`

  useEffect(() => {
    const fetchDataProjects = async () => {
      try {
        const response = await fetch(`http://localhost:3000/projects?id=${id}`);
        const result = await response.json();
        setData(result);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchDataProjects();
  }, [id]);

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
          {data.map((album) => {
            return (
              <div key={album.id} className="project">
                {/* VISUEL ALBUM */}
                <div className="position-outstock">
                  {album.picture2 ? (
                    <Carousel
                      className="carousel-id-albums"
                      showThumbs={false}
                      infiniteLoop
                      autoPlay
                      interval={10000}
                    >
                      <img src={album.picture1} alt="Visuel de l'album" />
                      <img src={album.picture2} alt="Visuel de l'album" />
                    </Carousel>
                  ) : (
                    <img
                      className="carousel-id-albums"
                      src={album.picture1}
                      alt="Visuel de l'album"
                    />
                  )}

                  {album.stock === 0 && (
                    <p className="outStock-project"> {album.outStock} </p>
                  )}
                </div>

                <div className="txt-project">
                  <p className="album-type">{album.type}</p>
                  <h3 className="album-artist">{album.artist}</h3>
                  <h4 className="album-title">{album.name}</h4>

                  {album.stock === 0 ? (
                    <p className="outstock-price">00,00 €</p>
                  ) : (
                    <div>
                      {album.solde ? (
                        <div className="all-album-prices">
                          <p className="album-price">
                            <s>{album.price} €</s>
                          </p>
                          <p className="album-solde">{album.solde} €</p>
                        </div>
                      ) : (
                        <p className="album-price">{album.price} €</p>
                      )}
                    </div>
                  )}

                  <p className="album-tva">{album.tva}</p>
                  <p className="album-description">{album.description}</p>
                  {showMore && (
                    <>
                      <div>
                        {album.titles.map((title, index) => {
                          return (
                            <div key={index}>
                              <p className="album-titles-cart">{title}</p>
                            </div>
                          );
                        })}
                      </div>
                      <div>
                        <p className="album-availability-cart">
                          {album.availability}
                        </p>
                        <p className="album-copyright-cart">
                          {album.copyright}
                        </p>
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

                  {album.stock === 0 ? (
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
                        albumAddToCart(album);
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

        <div className="carousel-project">
          <div className="carousel-project">
            {store.projects.map((project) => {
              if (project.id !== id) {
                return (
                  <div key={project.id} className="one-project-carousel">
                    <Link
                      to={`/store/projects/${project.id}`}
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      <img
                        className="img-project-carousel"
                        src={project.picture1}
                        alt="Visuel de l'album"
                      />
                    </Link>

                    <p className="project-type">{project.type}</p>
                    <h3 className="artist-album">{project.artist}</h3>
                    <h4 className="title-album">{project.name}</h4>

                    {project.stock === 0 ? (
                      <p className="price-outstock">00,00 €</p>
                    ) : (
                      <div>
                        {project.solde ? (
                          <div className="all-album-prices">
                            <p className="album-price">
                              <s>{project.price} €</s>
                            </p>
                            <p className="album-solde">{project.solde} €</p>
                          </div>
                        ) : (
                          <p className="album-price">{project.price} €</p>
                        )}
                      </div>
                    )}

                    <p className="tva">{project.tva}</p>
                    <p className="tva">{project.subscriber}</p>

                    {project.stock === 0 && (
                      <p className="outStock">{project.outStock}</p>
                    )}

                    {project.new && <p className="outNew">{project.new}</p>}
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section4">
        <Newsletter />
      </section>
    </>
  );
};

export default Project;
