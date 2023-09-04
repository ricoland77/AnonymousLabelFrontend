import "../css/cartPage.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import trashRed from "../images/trash-picto-red.svg";

const CarPage = ({
  albumAddToCart,
  albumRemoveFromCart,
  albumTrashFromCart,
  cart,
  setCart,
  displayCart,
  setDisplayCart,
  selectedCountry,
  setSelectedCountry,
  shipping,
  setShipping,
  subTotal,
  totalExpedition,
  total,
}) => {
  cart.forEach((album) => {
    totalExpedition += album.quantity;
  });

  useEffect(() => {
    if (selectedCountry === "GRATUIT") {
      setShipping(0);
    } else if (selectedCountry === "3") {
      setShipping(3);
    }
  }, [selectedCountry, setShipping]);

  return (
    <div className="container-page">
      <div className="all-cart-page">
        <div className="title-cart-modal">
          <p className="title-cart-page">Panier</p>
        </div>
        {cart.length !== 0 ? (
          <div className="list-albums">
            {cart.map((album) => {
              if (album.solde) {
                subTotal += album.solde * album.quantity;
              } else {
                subTotal += album.price * album.quantity;
              }

              total = subTotal + shipping * totalExpedition;

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
                      <span>{(album.solde * album.quantity).toFixed(2)} €</span>
                    ) : (
                      <span>{(album.price * album.quantity).toFixed(2)} €</span>
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
                    src={trashRed}
                    alt="Corbeille"
                    className="trash-cart-page"
                    onClick={() => {
                      albumTrashFromCart(album);
                    }}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="empty-cart-page">
            <p className="size-empty-cart">Le panier est vide</p>
            <Link to="/">
              <p className="visit-site">Continuer de parcourir le site</p>
            </Link>
          </div>
        )}
      </div>
      <div
        className="cart-payement"
        style={cart.length === 0 ? { display: "none" } : {}}
      >
        <div>
          <p className="title-cart-page">Résumé de la commande</p>
        </div>

        <div className="line-album-total-page">
          <span className="total-cart-page">Sous-total</span>
          <span className="total-price">{subTotal.toFixed(2)} €</span>
        </div>

        <div className="line-album-total-page">
          <span className="total-cart-page">Expédition</span>

          <span className="total-price">
            {selectedCountry === "France"
              ? "GRATUIT"
              : `${(shipping * totalExpedition).toFixed(2)} €`}
          </span>
        </div>

        <div>
          <select
            className="input-country-page"
            name="country"
            id="country"
            onChange={(e) => setSelectedCountry(e.target.value)}
            value={selectedCountry}
          >
            {/* <option value="">Sélectionnez votre pays</option> */}
            <option value="Afghanistan">Afghanistan</option>
            <option value="Afrique du Sud">Afrique du Sud</option>
            <option value="Aland">Aland</option>
            <option value="Albanie">Albanie</option>
            <option value="Algérie">Algérie</option>
            <option value="Allemagne">Allemagne</option>
            <option value="Andorre">Andorre</option>
            <option value="Angola">Angola</option>
            <option value="Anguilla">Anguilla</option>
            <option value="Antarctique">Antarctique</option>
            <option value="Antigua-et-Barbuda">Antigua-et-Barbuda</option>
            <option value="Argentine">Argentine</option>
            <option value="Arménie">Arménie</option>
            <option value="Aruba">Aruba</option>
            <option value="Australie">Australie</option>
            <option value="Autriche">Autriche</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Barbade">Barbade</option>
            <option value="Belgique">Belgique</option>
            <option value="Bélize">Bélize</option>
            <option value="Bénin">Bénin</option>
            <option value="Bermudes">Bermudes</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Biélorussie">Biélorussie</option>
            <option value="Birmanie">Birmanie</option>
            <option value="Bolivie">Bolivie</option>
            <option value="Bonaire">Bonaire</option>
            <option value="Bosnie-Herzégovine">Bosnie-Herzégovine</option>
            <option value="Botswana">Botswana</option>
            <option value="Brésil">Brésil</option>
            <option value="Brunei">Brunei</option>
            <option value="Bulgarie">Bulgarie</option>
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Burundi">Burundi</option>
            <option value="Cambodge">Cambodge</option>
            <option value="Cameroun">Cameroun</option>
            <option value="Canada">Canada</option>
            <option value="Cap-Vert">Cap-Vert</option>
            <option value="Chili">Chili</option>
            <option value="Chine">Chine</option>
            <option value="Chypre">Chypre</option>
            <option value="Cocos (Keeling) Islands">
              Cocos (Keeling) Islands
            </option>
            <option value="Colombie">Colombie</option>
            <option value="Comores">Comores</option>
            <option value="Congo (Brazzaville)">Congo (Brazzaville)</option>
            <option value="Congo (Kinshasa)">Congo (Kinshasa)</option>
            <option value="Corée du Sud">Corée du Sud</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="Croatie">Croatie</option>
            <option value="Curaçao">Curaçao</option>
            <option value="Danemark">Danemark</option>
            <option value="Djibouti">Djibouti</option>
            <option value="Dominique">Dominique</option>
            <option value="Egypte">Egypte</option>
            <option value="Émirats arabes unis">Émirats arabes unis</option>
            <option value="Équateur">Équateur</option>
            <option value="Érythrée">Érythrée</option>
            <option value="Espagne">Espagne</option>
            <option value="Estonie">Estonie</option>
            <option value="État indépendant des Samoa">
              État indépendant des Samoa
            </option>
            <option value="États-Unis">États-Unis</option>
            <option value="Éthiopie">Éthiopie</option>
            <option value="Fiji">Fiji</option>
            <option value="Finlande">Finlande</option>
            <option value="France">France</option>
            <option value="Gabon">Gabon</option>
            <option value="Gambie">Gambie</option>
            <option value="Géorgie">Géorgie</option>
            <option value="Géorgie du Sud et les Îles Sandwich du Sud">
              Géorgie du Sud et les Îles Sandwich du Sud
            </option>
            <option value="Ghana">Ghana</option>
            <option value="Gibraltar">Gibraltar</option>
            <option value="Grèce">Grèce</option>
            <option value="Grenade">Grenade</option>
            <option value="Groenland">Groenland</option>
            <option value="Guadeloupe">Guadeloupe</option>
            <option value="Guam">Guam</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Guernsey">Guernsey</option>
            <option value="Guinée">Guinée</option>
            <option value="Guinée équatoriale">Guinée équatoriale</option>
            <option value="Guinée-Bissau">Guinée-Bissau</option>
            <option value="Guyane">Guyane</option>
            <option value="Guyane Française">Guyane Française</option>
            <option value="Haïti">Haïti</option>
            <option value="Honduras">Honduras</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="Hongrie">Hongrie</option>
            <option value="Île Bouvet">Île Bouvet</option>

            <option value="3">Île Christmas</option>
            <option value="3">Ile de la Réunion</option>
            <option value="3">Île de Man</option>
            <option value="3">Ile Norfolk</option>
            <option value="3">Iles Caïmans</option>
            <option value="3">Îles Cook</option>
            <option value="3">Iles Féroé</option>
            <option value="3">Iles Heard-et-MacDonald</option>
            <option value="3">Îles Malouines</option>
            <option value="3">Îles Mariannes du Nord</option>
            <option value="3">Iles Marshall</option>
            <option value="3">Îles mineures éloignées des États-Unis</option>
            <option value="3">Îles Pitcairn</option>
            <option value="3">Îles Salomon</option>
            <option value="3">Iles Turques-et-Caïques</option>
            <option value="3">Îles Vierges britanniques</option>
            <option value="3">Îles Vierges des États-Unis</option>
            <option value="3">Inde</option>
            <option value="3">Indonésie</option>
            <option value="3">Iraq</option>
            <option value="3">Irlande</option>
            <option value="3">Islande</option>
            <option value="3">Israël</option>
            <option value="3">Italie</option>
            <option value="3">Jamaïque</option>
            <option value="3">Japon</option>
            <option value="3">Jersey</option>
            <option value="3">Jordanie</option>
            <option value="3">Kazakhstan</option>
            <option value="3">Kenya</option>
            <option value="3">Kirghizistan</option>
            <option value="3">Kiribati</option>
            <option value="3">Koweït</option>
            <option value="3">Laos</option>
            <option value="3">Lesotho</option>
            <option value="3">Lettonie</option>
            <option value="3">Liban</option>
            <option value="3">Libéria</option>
            <option value="3">Libye</option>
            <option value="3">Liechtenstein</option>
            <option value="3">Lituanie</option>
            <option value="3">Luxembourg</option>
            <option value="3">Macau</option>
            <option value="3">Macédoine</option>
            <option value="3">Madagascar</option>
            <option value="3">Malaisie</option>
            <option value="3">Malawi</option>
            <option value="3">Maloptiones</option>
            <option value="3">Mali</option>
            <option value="3">Malte</option>
            <option value="3">Maroc</option>
            <option value="3">Martinique</option>
            <option value="3">Maurice</option>
            <option value="3">Mauritanie</option>
            <option value="3">Mayotte</option>
            <option value="3">Mexique</option>
            <option value="3">Micronésie</option>
            <option value="3">Moldavie</option>
            <option value="3">Monaco</option>
            <option value="3">Mongolie</option>
            <option value="3">Monténégro</option>
            <option value="3">Montserrat</option>
            <option value="3">Mozambique</option>
            <option value="3">Namibie</option>
            <option value="3">Nauru</option>
            <option value="3">Népal</option>
            <option value="3">Nicaragua</option>
            <option value="3">Niger</option>
            <option value="3">Nigéria</option>
            <option value="3">Niue</option>
            <option value="3">Norvège</option>
            <option value="3">Nouvelle-Calédonie</option>
            <option value="3">Nouvelle-Zélande</option>
            <option value="3">Oman</option>
            <option value="3">Ouganda</option>
            <option value="3">Ouzbékistan</option>
            <option value="3">Pakistan</option>
            <option value="3">Palaos</option>
            <option value="3">Panama</option>
            <option value="3">Papouasie-Nouvelle-Guinée</option>
            <option value="3">Paraguay</option>
            <option value="3">Pays-Bas</option>
            <option value="3">Pérou</option>
            <option value="3">Philippines</option>
            <option value="3">Pologne</option>
            <option value="3">Polynésie française</option>
            <option value="3">Porto Rico</option>
            <option value="3">Portugal</option>
            <option value="3">Qatar</option>
            <option value="3">République centrafricaine</option>
            <option value="3">République de Côte d'Ivoire</option>

            <option value="République dominicaine">
              République dominicaine
            </option>
            <option value="République du Kosovo">République du Kosovo</option>
            <option value="République tchèque">République tchèque</option>
            <option value="Roumanie">Roumanie</option>
            <option value="Royaume-Uni">Royaume-Uni</option>
            <option value="Russie">Russie</option>
            <option value="Rwanda">Rwanda</option>
            <option value="Sahara occidental">Sahara occidental</option>
            <option value="Saint Martin">Saint Martin</option>
            <option value="Saint-Barthélémy">Saint-Barthélémy</option>
            <option value="Saint-Kitts-et-Nevis">Saint-Kitts-et-Nevis</option>
            <option value="Saint-Marin">Saint-Marin</option>
            <option value="Saint-Martin [Royaume des Pays-Bas]">
              Saint-Martin [Royaume des Pays-Bas]
            </option>
            <option value="Saint-Pierre-et-Miquelon">
              Saint-Pierre-et-Miquelon
            </option>
            <option value="Saint-Vincent et les Grenadines">
              Saint-Vincent et les Grenadines
            </option>
            <option value="Sainte Lucie">Sainte Lucie</option>
            <option value="Sainte-Hélène">Sainte-Hélène</option>
            <option value="Salvador">Salvador</option>
            <option value="Samoa américaines">Samoa américaines</option>
            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Sénégal">Sénégal</option>
            <option value="Serbie">Serbie</option>
            <option value="Seychelles">Seychelles</option>
            <option value="Sierra Leone">Sierra Leone</option>
            <option value="Singapour">Singapour</option>
            <option value="Slovaquie">Slovaquie</option>
            <option value="Slovénie">Slovénie</option>
            <option value="Somalie">Somalie</option>
            <option value="Soudan">Soudan</option>
            <option value="Soudan du Sud">Soudan du Sud</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="Suède">Suède</option>
            <option value="Suisse">Suisse</option>
            <option value="Suriname">Suriname</option>
            <option value="Svalbard et Jan Mayen">Svalbard et Jan Mayen</option>
            <option value="Swaziland">Swaziland</option>
            <option value="Tadjikistan">Tadjikistan</option>
            <option value="Taïwan">Taïwan</option>
            <option value="Tanzanie">Tanzanie</option>
            <option value="Tchad">Tchad</option>
            <option value="Terres australes et antarctiques françaises">
              Terres australes et antarctiques françaises
            </option>
            <option value="Territoire britannique de l'océan Indien">
              Territoire britannique de l'océan Indien
            </option>
            <option value="Thaïlande">Thaïlande</option>
            <option value="Timor oriental">Timor oriental</option>
            <option value="Togo">Togo</option>
            <option value="Tokelau">Tokelau</option>
            <option value="Tonga">Tonga</option>
            <option value="Trinité-et-Tobago">Trinité-et-Tobago</option>
            <option value="Tunisie">Tunisie</option>
            <option value="Turkménistan">Turkménistan</option>
            <option value="Turquie">Turquie</option>
            <option value="Tuvalu">Tuvalu</option>
            <option value="Ukraine">Ukraine</option>
            <option value="Uruguay">Uruguay</option>
            <option value="Vanuatu">Vanuatu</option>
            <option value="Vatican">Vatican</option>
            <option value="Venezuela">Venezuela</option>
            <option value="Vietnam">Vietnam</option>
            <option value="Wallis-et-Futuna">Wallis-et-Futuna</option>
            <option value="Yémen">Yémen</option>
            <option value="Zambie">Zambie</option>
            <option value="Zimbabwe">Zimbabwe</option>
          </select>
        </div>
        <div className="line-album-total-page">
          <span className="real-total-cart-page">Total</span>
          <span className="total-price-page">{total.toFixed(2)} €</span>
        </div>
        <Link
          to="/checkout"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <button className="btn-cart">Paiement</button>
        </Link>
      </div>
    </div>
  );
};

export default CarPage;
