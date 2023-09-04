import "../css/checkOut.css";

const PayementForm = ({
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
  emailError,
  setEmailError,
  firstnameError,
  setFirstnameError,
  nameError,
  setNameError,
  phoneError,
  setPhoneError,
  completed,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    let isValid = true;

    if (email.trim() === "") {
      setEmailError("Veuillez saisir votre adresse e-mail.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (firstname.trim() === "") {
      setFirstnameError("Veuillez saisir votre prénom.");
      isValid = false;
    } else {
      setFirstnameError("");
    }

    if (name.trim() === "") {
      setNameError("Veuillez saisir votre nom de famille.");
      isValid = false;
    } else {
      setNameError("");
    }

    if (phone.trim() === "") {
      setPhoneError("Veuillez saisir votre numéro de téléphone.");
      isValid = false;
    } else {
      setPhoneError("");
    }

    if (isValid) {
      setEdit(!edit);
    }
  };
  return (
    <div>
      {edit ? (
        <form className="contact-form-payement" onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail pour confirmation de commande*</label>
          <input
            value={email}
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
          <span className="error-message">{emailError}</span>

          <label htmlFor="firstname">Prénom*</label>
          <input
            value={firstname}
            type="text"
            id="firstname"
            name="firstname"
            onChange={(e) => setFirstname(e.target.value)}
            required
          ></input>
          <span className="error-message">{firstnameError}</span>

          <label htmlFor="name">Nom de famille*</label>
          <input
            value={name}
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            required
          ></input>
          <span className="error-message">{nameError}</span>

          <label htmlFor="phone">Téléphone*</label>
          <input
            value={phone}
            type="tel"
            id="phone"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            required
          ></input>
          <span className="error-message">{phoneError}</span>

          <label htmlFor="company">Nom de la société</label>
          <input
            value={company}
            type="text"
            id="company"
            name="company"
            onChange={(e) => setCompany(e.target.value)}
          ></input>
          <label htmlFor="selected-country">Pays*</label>
          <select
            value={selectedCountry}
            name="selected-country"
            id="selected-country"
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            <option value="">Sélectionnez votre pays</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Afrique du Sud"> Afrique du Sud</option>
            <option value="Aland"> Aland</option>
            <option value="Albanie"> Albanie</option>
            <option value="Algérie"> Algérie</option>
            <option value="Allemagne"> Allemagne</option>
            <option value="Andorre"> Andorre</option>
            <option value="Angola"> Angola</option>
            <option value="Anguilla"> Anguilla</option>
            <option value="Antarctique"> Antarctique</option>
            <option value="Antigua-et-Barbuda">Antigua-et-Barbuda</option>
            <option value="Argentine"> Argentine</option>
            <option value="Arménie"> Arménie</option>
            <option value="Aruba"> Aruba</option>
            <option value="Australie"> Australie</option>
            <option value="Autriche"> Autriche</option>
            <option value="Azerbaijan"> Azerbaijan</option>
            <option value="Bahamas"> Bahamas</option>
            <option value="Bahrain"> Bahrain</option>
            <option value="Bangladesh"> Bangladesh</option>
            <option value="Barbade"> Barbade</option>
            <option value="Belgique"> Belgique</option>
            <option value="Bélize"> Bélize</option>
            <option value="Bénin"> Bénin</option>
            <option value="Bermudes"> Bermudes</option>
            <option value="Bhutan"> Bhutan</option>
            <option value="Biélorussie"> Biélorussie</option>
            <option value="Birmanie"> Birmanie</option>
            <option value="Bolivie"> Bolivie</option>
            <option value="Bonaire"> Bonaire</option>
            <option value="Bosnie-Herzégovine">Bosnie-Herzégovine</option>
            <option value="Botswana"> Botswana</option>
            <option value="Brésil"> Brésil</option>
            <option value="Brunei"> Brunei</option>
            <option value="Bulgarie"> Bulgarie</option>
            <option value="Burkina Faso"> Burkina Faso</option>
            <option value="Burundi"> Burundi</option>
            <option value="Cambodge"> Cambodge</option>
            <option value="Cameroun"> Cameroun</option>
            <option value="Canada"> Canada</option>
            <option value="Cap-Vert"> Cap-Vert</option>
            <option value="Chili"> Chili</option>
            <option value="Chine"> Chine</option>
            <option value="Chypre"> Chypre</option>
            <option value="Cocos (Keeling) Islands">
              Cocos (Keeling) Islands
            </option>
            <option value="Colombie"> Colombie</option>
            <option value="Comores"> Comores</option>
            <option value="Congo (Brazzaville)">Congo (Brazzaville)</option>
            <option value="Congo (Kinshasa)"> Congo (Kinshasa)</option>
            <option value="Corée du Sud"> Corée du Sud</option>
            <option value="Costa Rica"> Costa Rica</option>
            <option value="Croatie"> Croatie</option>
            <option value="Curaçao"> Curaçao</option>
            <option value="Danemark"> Danemark</option>
            <option value="Djibouti"> Djibouti</option>
            <option value="Dominique"> Dominique</option>
            <option value="Egypte"> Egypte</option>
            <option value="Émirats arabes unis">Émirats arabes unis</option>
            <option value="Équateur"> Équateur</option>
            <option value="Érythrée"> Érythrée</option>
            <option value="Espagne"> Espagne</option>
            <option value="Estonie"> Estonie</option>
            <option value="État indépendant des Samoa">
              État indépendant des Samoa
            </option>
            <option value="États-Unis"> États-Unis</option>
            <option value="Éthiopie"> Éthiopie</option>
            <option value="Fiji"> Fiji</option>
            <option value="Finlande"> Finlande</option>
            <option value="France"> France</option>
            <option value="Gabon"> Gabon</option>
            <option value="Gambie"> Gambie</option>
            <option value="Géorgie"> Géorgie</option>
            <option value="Géorgie du Sud et les Îles Sandwich du Sud">
              Géorgie du Sud et les Îles Sandwich du Sud
            </option>
            <option value="Ghana"> Ghana</option>
            <option value="Gibraltar"> Gibraltar</option>
            <option value="Grèce"> Grèce</option>
            <option value="Grenade"> Grenade</option>
            <option value="Groenland"> Groenland</option>
            <option value="Guadeloupe"> Guadeloupe</option>
            <option value="Guam"> Guam</option>
            <option value="Guatemala"> Guatemala</option>
            <option value="Guernsey"> Guernsey</option>
            <option value="Guinée"> Guinée</option>
            <option value="Guinée équatoriale"> Guinée équatoriale</option>
            <option value="Guinée-Bissau"> Guinée-Bissau</option>
            <option value="Guyane"> Guyane</option>
            <option value="Guyane Française"> Guyane Française</option>
            <option value="Haïti"> Haïti</option>
            <option value="Honduras"> Honduras</option>
            <option value="Hong Kong"> Hong Kong</option>
            <option value="Hongrie"> Hongrie</option>
            <option value="Île Bouvet"> Île Bouvet</option>
            <option value="Île Christmas"> Île Christmas</option>
            <option value="Ile de la Réunion"> Ile de la Réunion</option>
            <option value="Île de Man"> Île de Man</option>
            <option value="Ile Norfolk"> Ile Norfolk</option>
            <option value="Iles Caïmans"> Iles Caïmans</option>
            <option value="Îles Cook"> Îles Cook</option>
            <option value="Iles Féroé"> Iles Féroé</option>
            <option value="Iles Heard-et-MacDonald">
              Iles Heard-et-MacDonald
            </option>
            <option value="Îles Malouines"> Îles Malouines</option>
            <option value="Îles Mariannes du Nord">
              Îles Mariannes du Nord
            </option>
            <option value="Iles Marshall"> Iles Marshall</option>
            <option value="Îles mineures éloignées des États-Unis">
              Îles mineures éloignées des États-Unis
            </option>
            <option value="Îles Pitcairn"> Îles Pitcairn</option>
            <option value="Îles Salomon"> Îles Salomon</option>
            <option value="Iles Turques-et-Caïques">
              Iles Turques-et-Caïques
            </option>
            <option value="Îles Vierges britanniques">
              Îles Vierges britanniques
            </option>
            <option value="Îles Vierges des États-Unis">
              Îles Vierges des États-Unis
            </option>
            <option value="Inde"> Inde</option>
            <option value="Indonésie"> Indonésie</option>
            <option value="Iraq"> Iraq</option>
            <option value="Irlande"> Irlande</option>
            <option value="Islande"> Islande</option>
            <option value="Israël"> Israël</option>
            <option value="Italie"> Italie</option>
            <option value="Jamaïque"> Jamaïque</option>
            <option value="Japon"> Japon</option>
            <option value="Jersey"> Jersey</option>
            <option value="Jordanie"> Jordanie</option>
            <option value="Kazakhstan"> Kazakhstan</option>
            <option value="Kenya"> Kenya</option>
            <option value="Kirghizistan"> Kirghizistan</option>
            <option value="Kiribati"> Kiribati</option>
            <option value="Koweït"> Koweït</option>
            <option value="Laos"> Laos</option>
            <option value="Lesotho"> Lesotho</option>
            <option value="Lettonie"> Lettonie</option>
            <option value="Liban"> Liban</option>
            <option value="Libéria"> Libéria</option>
            <option value="Libye"> Libye</option>
            <option value="Liechtenstein"> Liechtenstein</option>
            <option value="Lituanie"> Lituanie</option>
            <option value="Luxembourg"> Luxembourg</option>
            <option value="Macau"> Macau</option>
            <option value="Macédoine"> Macédoine</option>
            <option value="Madagascar"> Madagascar</option>
            <option value="Malaisie"> Malaisie</option>
            <option value="Malawi"> Malawi</option>
            <option value="Maloptiones"> Maloptiones</option>
            <option value="Mali"> Mali</option>
            <option value="Malte"> Malte</option>
            <option value="Maroc"> Maroc</option>
            <option value="Martinique"> Martinique</option>
            <option value="Maurice"> Maurice</option>
            <option value="Mauritanie"> Mauritanie</option>
            <option value="Mayotte"> Mayotte</option>
            <option value="Mexique"> Mexique</option>
            <option value="Micronésie"> Micronésie</option>
            <option value="Moldavie"> Moldavie</option>
            <option value="Monaco"> Monaco</option>
            <option value="Mongolie"> Mongolie</option>
            <option value="Monténégro"> Monténégro</option>
            <option value="Montserrat"> Montserrat</option>
            <option value="Mozambique"> Mozambique</option>
            <option value="Namibie"> Namibie</option>
            <option value="Nauru"> Nauru</option>
            <option value="Népal"> Népal</option>
            <option value="Nicaragua"> Nicaragua</option>
            <option value="Niger"> Niger</option>
            <option value="Nigéria"> Nigéria</option>
            <option value="Niue"> Niue</option>
            <option value="Norvège"> Norvège</option>
            <option value="Nouvelle-Calédonie"> Nouvelle-Calédonie</option>
            <option value="Nouvelle-Zélande"> Nouvelle-Zélande</option>
            <option value="Oman"> Oman</option>
            <option value="Ouganda"> Ouganda</option>
            <option value="Ouzbékistan"> Ouzbékistan</option>
            <option value="Pakistan"> Pakistan</option>
            <option value="Palaos"> Palaos</option>
            <option value="Panama"> Panama</option>
            <option value="Papouasie-Nouvelle-Guinée">
              Papouasie-Nouvelle-Guinée
            </option>
            <option value="Paraguay"> Paraguay</option>
            <option value="Pays-Bas"> Pays-Bas</option>
            <option value="Pérou"> Pérou</option>
            <option value="Philippines"> Philippines</option>
            <option value="Pologne"> Pologne</option>
            <option value="Polynésie française"> Polynésie française</option>
            <option value="Porto Rico"> Porto Rico</option>
            <option value="Portugal"> Portugal</option>
            <option value="Qatar"> Qatar</option>
            <option value="République centrafricaine">
              République centrafricaine
            </option>
            <option value="République de Côte d'Ivoire">
              République de Côte d'Ivoire
            </option>
            <option value="République dominicaine">
              République dominicaine
            </option>
            <option value="République du Kosovo"> République du Kosovo</option>
            <option value="République tchèque"> République tchèque</option>
            <option value="Roumanie"> Roumanie</option>
            <option value="Royaume-Uni"> Royaume-Uni</option>
            <option value="Russie"> Russie</option>
            <option value="Rwanda"> Rwanda</option>
            <option value="Sahara occidental"> Sahara occidental</option>
            <option value="Saint Martin"> Saint Martin</option>
            <option value="Saint-Barthélémy"> Saint-Barthélémy</option>
            <option value="Saint-Kitts-et-Nevis"> Saint-Kitts-et-Nevis</option>
            <option value="Saint-Marin"> Saint-Marin</option>
            <option value="Saint-Martin [Royaume des Pays-Bas]">
              Saint-Martin [Royaume des Pays-Bas]
            </option>
            <option value="Saint-Pierre-et-Miquelon">
              Saint-Pierre-et-Miquelon
            </option>
            <option value="Saint-Vincent et les Grenadines">
              Saint-Vincent et les Grenadines
            </option>
            <option value="Sainte Lucie"> Sainte Lucie</option>
            <option value="Sainte-Hélène"> Sainte-Hélène</option>
            <option value="Salvador"> Salvador</option>
            <option value="Samoa américaines"> Samoa américaines</option>
            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
            <option value="Saudi Arabia"> Saudi Arabia</option>
            <option value="Sénégal"> Sénégal</option>
            <option value="Serbie"> Serbie</option>
            <option value="Seychelles"> Seychelles</option>
            <option value="Sierra Leone"> Sierra Leone</option>
            <option value="Singapour"> Singapour</option>
            <option value="Slovaquie"> Slovaquie</option>
            <option value="Slovénie"> Slovénie</option>
            <option value="Somalie"> Somalie</option>
            <option value="Soudan"> Soudan</option>
            <option value="Soudan du Sud"> Soudan du Sud</option>
            <option value="Sri Lanka"> Sri Lanka</option>
            <option value="Suède"> Suède</option>
            <option value="Suisse"> Suisse</option>
            <option value="Suriname"> Suriname</option>
            <option value="Svalbard et Jan Mayen">Svalbard et Jan Mayen</option>
            <option value="Swaziland"> Swaziland</option>
            <option value="Tadjikistan"> Tadjikistan</option>
            <option value="Taïwan"> Taïwan</option>
            <option value="Tanzanie"> Tanzanie</option>
            <option value="Tchad"> Tchad</option>
            <option value="Terres australes et antarctiques françaises">
              Terres australes et antarctiques françaises
            </option>
            <option value="Territoire britannique de l'océan Indien">
              Territoire britannique de l'océan Indien
            </option>
            <option value="Thaïlande"> Thaïlande</option>
            <option value="Timor oriental"> Timor oriental</option>
            <option value="Togo"> Togo</option>
            <option value="Tokelau"> Tokelau</option>
            <option value="Tonga"> Tonga</option>
            <option value="Trinité-et-Tobago"> Trinité-et-Tobago</option>
            <option value="Tunisie"> Tunisie</option>
            <option value="Turkménistan"> Turkménistan</option>
            <option value="Turquie"> Turquie</option>
            <option value="Tuvalu"> Tuvalu</option>
            <option value="Ukraine"> Ukraine</option>
            <option value="Uruguay"> Uruguay</option>
            <option value="Vanuatu"> Vanuatu</option>
            <option value="Vatican"> Vatican</option>
            <option value="Venezuela"> Venezuela</option>
            <option value="Vietnam"> Vietnam</option>
            <option value="Wallis-et-Futuna"> Wallis-et-Futuna</option>
            <option value="Yémen"> Yémen</option>
            <option value="Zambie"> Zambie</option>
            <option value="Zimbabwe"> Zimbabwe</option>
          </select>
          <label htmlFor="adress">Adresse*</label>
          <input
            value={adress}
            type="text"
            id="adress"
            name="adress"
            onChange={(e) => setAdress(e.target.value)}
            required
          ></input>
          <label htmlFor="postalCode">Code postal*</label>
          <input
            value={postalCode}
            type="text"
            id="postalCode"
            name="postalCode"
            onChange={(e) => setPostalCode(e.target.value)}
            required
          ></input>
          <label htmlFor="city">Ville*</label>
          <input
            value={city}
            type="text"
            id="city"
            name="city"
            onChange={(e) => setCity(e.target.value)}
            required
          ></input>

          {selectedCountry === "Afrique du Sud" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Eastern Cape">Eastern Cape</option>
                <option value="Free State">Free State</option>
                <option value="Gauteng">Gauteng</option>
                <option value="Kwazulu-Natal">Kwazulu-Natal</option>
                <option value="Limpopo">Limpopo</option>
                <option value="Mpumalanga">Mpumalanga</option>
                <option value="North-West">North-West</option>
                <option value="Northern Cape">Northern Cape</option>
                <option value="Western Cape">Western Cape</option>
              </select>
            </>
          )}

          {selectedCountry === "Allemagne" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Baden-Württemberg">Baden-Württemberg</option>
                <option value="Bayern">Bayern</option>
                <option value="Berlin">Berlin</option>
                <option value="Brandenburg">Brandenburg</option>
                <option value="Bremen">Bremen</option>
                <option value="Hamburg">Hamburg</option>
                <option value="Hessen">Hessen</option>
                <option value="Mecklenburg-Vorpommern">
                  Mecklenburg-Vorpommern
                </option>
                <option value="Niedersachsen">Niedersachsen</option>
                <option value="Nordrhein-Westfalen">Nordrhein-Westfalen</option>
                <option value="Rheinland-Pfalz">Rheinland-Pfalz</option>
                <option value="Saarland">Saarland</option>
                <option value="Sachsen">Sachsen</option>
                <option value="Sachsen-Anhalt">Sachsen-Anhalt</option>
                <option value="Schleswig-Holstein">Schleswig-Holstein</option>
                <option value="Thüringen">Thüringen</option>
              </select>
            </>
          )}

          {selectedCountry === "Argentine" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Buenos Aires">Buenos Aires</option>
                <option value="Catamarca">Catamarca</option>
                <option value="Chaco">Chaco</option>
                <option value="Chubut">Chubut</option>
                <option value="Córdoba">Córdoba</option>
                <option value="Corrientes">Corrientes</option>
                <option value="Entre Ríos">Entre Ríos</option>
                <option value="Formosa">Formosa</option>
                <option value="Jujuy">Jujuy</option>
                <option value="La Pampa">La Pampa</option>
                <option value="La Rioja">La Rioja</option>
                <option value="Mendoza">Mendoza</option>
                <option value="Misiones">Misiones</option>
                <option value="Neuquén">Neuquén</option>
                <option value="Río Negro">Río Negro</option>
                <option value="Salta">Salta</option>
                <option value="San Juan">San Juan</option>
                <option value="San Luis">San Luis</option>
                <option value="Santa Cruz">Santa Cruz</option>
                <option value="Santa Fe">Santa Fe</option>
                <option value="Santiago del Estero">Santiago del Estero</option>
                <option value="Tierra del Fuego">Tierra del Fuego</option>
                <option value="Tucumán">Tucumán</option>
              </select>
            </>
          )}

          {selectedCountry === "Australie" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Australian Capital Territory">
                  Australian Capital Territory
                </option>
                <option value="New South Wales">New South Wales</option>
                <option value="Northern Territory">Northern Territory</option>
                <option value="Queensland">Queensland</option>
                <option value="South Australia">South Australia</option>
                <option value="Tasmania">Tasmania</option>
                <option value="Victoria">Victoria</option>
                <option value="Western Australia">Western Australia</option>
              </select>
            </>
          )}

          {selectedCountry === "Autriche" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Burgenland">Burgenland</option>
                <option value="Kärnten">Kärnten</option>
                <option value="Niederösterreich">Niederösterreich</option>
                <option value="Oberösterreich">Oberösterreich</option>
                <option value="Salzburg">Salzburg</option>
                <option value="Steiermark">Steiermark</option>
                <option value="Tirol">Tirol</option>
                <option value="Vorarlberg">Vorarlberg</option>
                <option value="Wien">Wien</option>
              </select>
            </>
          )}

          {selectedCountry === "Bahamas" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Freeport">Freeport</option>
                <option value="Fresh Creek">Fresh Creek</option>
                <option value="Harbour Island">Harbour Island</option>
                <option value="High Rock">High Rock</option>
                <option value="Long Island">Long Island</option>
                <option value="Marsh Harbour">Marsh Harbour</option>
                <option value="New Providence">New Providence</option>
                <option value="Rock Sound">Rock Sound</option>
              </select>
            </>
          )}

          {selectedCountry === "Belgique" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Antwerpen">Antwerpen</option>
                <option value="Brabant wallon">Brabant wallon</option>
                <option value="Hainaut">Hainaut</option>
                <option value="Liège">Liège</option>
                <option value="Limburg">Limburg</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Namur">Namur</option>
                <option value="Oost-Vlaanderen">Oost-Vlaanderen</option>
                <option value="Région de Bruxelles-Capitale">
                  Région de Bruxelles-Capitale
                </option>
                <option value="Vlaams Gewest">Vlaams Gewest</option>
                <option value="Vlaams-Brabant">Vlaams-Brabant</option>
                <option value="Wallonie">Wallonie</option>
                <option value="West-Vlaanderen">West-Vlaanderen</option>
              </select>
            </>
          )}

          {selectedCountry === "Brésil" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Acre">Acre</option>
                <option value="Alagoas">Alagoas</option>
                <option value="Amapa">Amapa</option>
                <option value="Amazonas">Amazonas</option>
                <option value="Bahia">Bahia</option>
                <option value="Ceara">Ceara</option>
                <option value="Distrito Federal">Distrito Federal</option>
                <option value="Espirito Santo">Espirito Santo</option>
                <option value="Goias">Goias</option>
                <option value="Maranhao">Maranhao</option>
                <option value="Mato Grosso">Mato Grosso</option>
                <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                <option value="Minas Gerais">Minas Gerais</option>
                <option value="Para">Para</option>
                <option value="Paraiba">Paraiba</option>
                <option value="Parana">Parana</option>
                <option value="Pernambuco">Pernambuco</option>
                <option value="Piaui">Piaui</option>
                <option value="Rio de Janeiro">Rio de Janeiro</option>
                <option value="Rio Grande do Norte">Rio Grande do Norte</option>
                <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                <option value="Rondonia">Rondonia</option>
                <option value="Roraima">Roraima</option>
                <option value="Santa Catarina">Santa Catarina</option>
                <option value="Sao Paulo">Sao Paulo</option>
                <option value="Sergipe">Sergipe</option>
                <option value="Tocantins">Tocantins</option>
              </select>
            </>
          )}

          {selectedCountry === "Bulgarie" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Blagoevgrad">Blagoevgrad</option>
                <option value="Bourgas">Bourgas</option>
                <option value="Choumen">Choumen</option>
                <option value="Dobritch">Dobritch</option>
                <option value="Gabrovo">Gabrovo</option>
                <option value="Haskovo">Haskovo</option>
                <option value="Kardjali">Kardjali</option>
                <option value="Kyoustendil">Kyoustendil</option>
                <option value="Lovetch">Lovetch</option>
                <option value="Montana">Montana</option>
                <option value="Pazardjik">Pazardjik</option>
                <option value="Pernik">Pernik</option>
                <option value="Pleven">Pleven</option>
                <option value="Plovdiv">Plovdiv</option>
                <option value="Razgrad">Razgrad</option>
                <option value="Ruse">Ruse</option>
                <option value="Silistra">Silistra</option>
                <option value="Sliven">Sliven</option>
                <option value="Smolyan">Smolyan</option>
                <option value="Sofia (province)">Sofia (province)</option>
                <option value="Stara Zagora">Stara Zagora</option>
                <option value="Targovichté">Targovichté</option>
                <option value="Varna">Varna</option>
                <option value="Veliko Tarnovo">Veliko Tarnovo</option>
                <option value="Vidin">Vidin</option>
                <option value="Ville de Sofia">Ville de Sofia</option>
                <option value="Vratsa">Vratsa</option>
                <option value="Yambol">Yambol</option>
              </select>
            </>
          )}

          {selectedCountry === "Canada" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Alberta">Alberta</option>
                <option value="British Columbia">British Columbia</option>
                <option value="Manitoba">Manitoba</option>
                <option value="New Brunswick">New Brunswick</option>
                <option value="Newfoundland and Labrador">
                  Newfoundland and Labrador
                </option>
                <option value="Northwest Territories">
                  Northwest Territories
                </option>
                <option value="Nova Scotia">Nova Scotia</option>
                <option value="Nunavut">Nunavut</option>
                <option value="Ontario">Ontario</option>
                <option value="Prince Edward Island">
                  Prince Edward Island
                </option>
                <option value="Québec">Québec</option>
                <option value="Saskatchewan">Saskatchewan</option>
                <option value="Yukon Territory">Yukon Territory</option>
              </select>
            </>
          )}

          {selectedCountry === "Chili" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Aisén del General Carlos Ibáñez del Campo">
                  Aisén del General Carlos Ibáñez del Campo
                </option>
                <option value="Antofagasta">Antofagasta</option>
                <option value="Araucanía">Araucanía</option>
                <option value="Arica y Parinacota">Arica y Parinacota</option>
                <option value="Atacama">Atacama</option>
                <option value="Bío-Bío">Bío-Bío</option>
                <option value="Coquimbo">Coquimbo</option>
                <option value="Libertador General Bernardo O'Higgins">
                  Libertador General Bernardo O'Higgins
                </option>
                <option value="Los Lagos">Los Lagos</option>
                <option value="Los Ríos">Los Ríos</option>
                <option value="Magallanes">Magallanes</option>
                <option value="Maule">Maule</option>
                <option value="Nuble">Nuble</option>
                <option value="Región Metropolitana de Santiago">
                  Región Metropolitana de Santiago
                </option>
                <option value="Tarapacá">Tarapacá</option>
                <option value="Valparaíso">Valparaíso</option>
              </select>
            </>
          )}

          {selectedCountry === "Chine" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Anhui">Anhui</option>
                <option value="Beijing">Beijing</option>
                <option value="Chongqing">Chongqing</option>
                <option value="Fujian">Fujian</option>
                <option value="Gansu">Gansu</option>
                <option value="Guangdong">Guangdong</option>
                <option value="Guangxi">Guangxi</option>
                <option value="Guizhou">Guizhou</option>
                <option value="Hainan">Hainan</option>
                <option value="Hebei">Hebei</option>
                <option value="Heilongjiang">Heilongjiang</option>
                <option value="Henan">Henan</option>
                <option value="Hubei">Hubei</option>
                <option value="Hunan">Hunan</option>
                <option value="Jiangsu">Jiangsu</option>
                <option value="Jiangxi">Jiangxi</option>
                <option value="Jilin">Jilin</option>
                <option value="Liaoning">Liaoning</option>
                <option value="Nei Mongol">Nei Mongol</option>
                <option value="Ningxia">Ningxia</option>
                <option value="Qinghai">Qinghai</option>
                <option value="Shaanxi">Shaanxi</option>
                <option value="Shandong">Shandong</option>
                <option value="Shanghai">Shanghai</option>
                <option value="Shanxi">Shanxi</option>
                <option value="Sichuan">Sichuan</option>
                <option value="Tianjin">Tianjin</option>
                <option value="Xinjiang">Xinjiang</option>
                <option value="Xizang">Xizang</option>
                <option value="Yunnan">Yunnan</option>
                <option value="Zhejiang">Zhejiang</option>
              </select>
            </>
          )}

          {selectedCountry === "Chypre" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Famagouste">Famagouste</option>
                <option value="Kyrenia">Kyrenia</option>
                <option value="Larnaca">Larnaca</option>
                <option value="Limassol">Limassol</option>
                <option value="Nicosie">Nicosie</option>
                <option value="Paphos">Paphos</option>
              </select>
            </>
          )}

          {selectedCountry === "Colombie" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Amazonas">Amazonas</option>
                <option value="Antioquia">Antioquia</option>
                <option value="Arauca">Arauca</option>
                <option value="Atlántico">Atlántico</option>
                <option value="Bolívar">Bolívar</option>
                <option value="Boyacá">Boyacá</option>
                <option value="Caldas">Caldas</option>
                <option value="Caquetá">Caquetá</option>
                <option value="Casanare">Casanare</option>
                <option value="Cauca">Cauca</option>
                <option value="Cesar">Cesar</option>
                <option value="Chocó">Chocó</option>
                <option value="Córdoba">Córdoba</option>
                <option value="Cundinamarca">Cundinamarca</option>
                <option value="Distrito Capital de Bogotá">
                  Distrito Capital de Bogotá
                </option>
                <option value="Guainía">Guainía</option>
                <option value="Guaviare">Guaviare</option>
                <option value="Huila">Huila</option>
                <option value="La Guajira">La Guajira</option>
                <option value="Magdalena">Magdalena</option>
                <option value="Meta">Meta</option>
                <option value="Nariño">Nariño</option>
                <option value="Norte de Santander">Norte de Santander</option>
                <option value="Putumayo">Putumayo</option>
                <option value="Quindío">Quindío</option>
                <option value="Risaralda">Risaralda</option>
                <option value="San Andrés, Providencia y Santa Catalina">
                  San Andrés, Providencia y Santa Catalina
                </option>
                <option value="Santander">Santander</option>
                <option value="Sucre">Sucre</option>
                <option value="Tolima">Tolima</option>
                <option value="Valle del Cauca">Valle del Cauca</option>
                <option value="Vaupés">Vaupés</option>
                <option value="Vichada">Vichada</option>
              </select>
            </>
          )}

          {selectedCountry === "Corée du Sud" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Busan">Busan</option>
                <option value="Chungcheongbuk-do">Chungcheongbuk-do</option>
                <option value="Chungcheongnam-do">Chungcheongnam-do</option>
                <option value="Daegu">Daegu</option>
                <option value="Daejeon">Daejeon</option>
                <option value="Gangwon-do">Gangwon-do</option>
                <option value="Gwangju">Gwangju</option>
                <option value="Gyeonggi-do">Gyeonggi-do</option>
                <option value="Gyeongsangbuk-do">Gyeongsangbuk-do</option>
                <option value="Gyeongsangnam-do">Gyeongsangnam-do</option>
                <option value="Incheon">Incheon</option>
                <option value="Jeju-do">Jeju-do</option>
                <option value="Jeollabuk-do">Jeollabuk-do</option>
                <option value="Jeollanam-do">Jeollanam-do</option>
                <option value="Seoul">Seoul</option>
                <option value="Ulsan">Ulsan</option>
              </select>
            </>
          )}

          {selectedCountry === "Costa Rica" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Alajuela">Alajuela</option>
                <option value="Cartago">Cartago</option>
                <option value="Guanacaste">Guanacaste</option>
                <option value="Heredia">Heredia</option>
                <option value="Limón">Limón</option>
                <option value="Puntarenas">Puntarenas</option>
                <option value="San José">San José</option>
              </select>
            </>
          )}

          {selectedCountry === "Croatie" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Bjelovarsko-Bilogorska">
                  Bjelovarsko-Bilogorska
                </option>
                <option value="Brodsko-Posavska">Brodsko-Posavska</option>
                <option value="Dubrovacko-Neretvanska">
                  Dubrovacko-Neretvanska
                </option>
                <option value="Grad Zagreb">Grad Zagreb</option>
                <option value="Istarska">Istarska</option>
                <option value="Karlovacka">Karlovacka</option>
                <option value="Koprivnicko-Krizevacka">
                  Koprivnicko-Krizevacka
                </option>
                <option value="Krapinsko-Zagorska">Krapinsko-Zagorska</option>
                <option value="Licko-Senjska">Licko-Senjska</option>
                <option value="Medimurska">Medimurska</option>
                <option value="Osjecko-Baranjska">Osjecko-Baranjska</option>
                <option value="Pozesko-Slavonska">Pozesko-Slavonska</option>
                <option value="Primorsko-Goranska">Primorsko-Goranska</option>
                <option value="Sibensko-Kninska">Sibensko-Kninska</option>
                <option value="Sisacko-Moslavacka">Sisacko-Moslavacka</option>
                <option value="Splitsko-Dalmatinska">
                  Splitsko-Dalmatinska
                </option>
                <option value="Varazdinska">Varazdinska</option>
                <option value="Viroviticko-Podravska">
                  Viroviticko-Podravska
                </option>
                <option value="Vukovarsko-Srijemska">
                  Vukovarsko-Srijemska
                </option>
                <option value="Zadarska">Zadarska</option>
                <option value="Zagrebacka">Zagrebacka</option>
              </select>
            </>
          )}

          {selectedCountry === "Danemark" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Hovedstaden">Hovedstaden</option>
                <option value="Midtjylland">Midtjylland</option>
                <option value="Nordjylland">Nordjylland</option>
                <option value="Sjælland">Sjælland</option>
                <option value="Syddanmark">Syddanmark</option>
              </select>
            </>
          )}

          {selectedCountry === "Egypte" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Al Minya">Al Minya</option>
                <option value="Al-Minufiyah">Al-Minufiyah</option>
                <option value="Alexandrie">Alexandrie</option>
                <option value="Ash-Sharqiyah">Ash-Sharqiyah</option>
                <option value="Assiout">Assiout</option>
                <option value="Assouan">Assouan</option>
                <option value="Beheira">Beheira</option>
                <option value="Beni Suef">Beni Suef</option>
                <option value="Dakhleya">Dakhleya</option>
                <option value="Damiette">Damiette</option>
                <option value="Fayoum">Fayoum</option>
                <option value="Gharbeya">Gharbeya</option>
                <option value="Gizeh">Gizeh</option>
                <option value="Ismaïlia">Ismaïlia</option>
                <option value="Kafr el-Cheik">Kafr el-Cheik</option>
                <option value="Le Caire">Le Caire</option>
                <option value="Louxor">Louxor</option>
                <option value="Marsa Matruh">Marsa Matruh</option>
                <option value="Mer Rouge">Mer Rouge</option>
                <option value="New Valley">New Valley</option>
                <option value="Port Sa'id">Port Sa'id</option>
                <option value="Qalyubia">Qalyubia</option>
                <option value="Qena">Qena</option>
                <option value="Sinai du Nord">Sinai du Nord</option>
                <option value="Sinai du Sud">Sinai du Sud</option>
                <option value="Sohag">Sohag</option>
                <option value="Suez">Suez</option>
              </select>
            </>
          )}

          {selectedCountry === "Émirats arabes unis" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Abu Dhabi">Abu Dhabi</option>
                <option value="Ajman">Ajman</option>
                <option value="Dubai">Dubai</option>
                <option value="Fujairah">Fujairah</option>
                <option value="Ras al Khaimah">Ras al Khaimah</option>
                <option value="Sharjah">Sharjah</option>
                <option value="Umm Al Quawain">Umm Al Quawain</option>
              </select>
            </>
          )}

          {selectedCountry === "Espagne" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Andalucía">Andalucía</option>
                <option value="Aragón">Aragón</option>
                <option value="Asturias, Principado de">
                  Asturias, Principado de
                </option>
                <option value="Canarias">Canarias</option>
                <option value="Cantabria">Cantabria</option>
                <option value="Castilla y León">Castilla y León</option>
                <option value="Castilla-La Mancha">Castilla-La Mancha</option>
                <option value="Cataluña">Cataluña</option>
                <option value="Ceuta">Ceuta</option>
                <option value="Comunidad Valenciana">
                  Comunidad Valenciana
                </option>
                <option value="Extremadura">Extremadura</option>
                <option value="Galicia">Galicia</option>
                <option value="Islas Baleares">Islas Baleares</option>
                <option value="La Rioja">La Rioja</option>
                <option value="Madrid, Comunidad de">
                  Madrid, Comunidad de
                </option>
                <option value="Melilla">Melilla</option>
                <option value="Murcia, Región de">Murcia, Región de</option>
                <option value="Navarra">Navarra</option>
                <option value="Pais Vasco">Pais Vasco</option>
              </select>
            </>
          )}

          {selectedCountry === "États-Unis" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
                <option value="Connecticut">Connecticut</option>
                <option value="Delaware">Delaware</option>
                <option value="District of Columbia">
                  District of Columbia
                </option>
                <option value="Florida">Florida</option>
                <option value="Forces armées des États-Unis">
                  Forces armées des États-Unis
                </option>
                <option value="Forces armées du Pacifique">
                  Forces armées du Pacifique
                </option>
                <option value="Forces armées Europe">
                  Forces armées Europe
                </option>
                <option value="Géorgie">Géorgie</option>
                <option value="Hawai">Hawai</option>
                <option value="Idaho">Idaho</option>
                <option value="Illinois">Illinois</option>
                <option value="Indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
                <option value="Kansas">Kansas</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Louisiana">Louisiana</option>
                <option value="Maine">Maine</option>
                <option value="Maryland">Maryland</option>
                <option value="Massachusetts">Massachusetts</option>
                <option value="Michigan">Michigan</option>
                <option value="Minnesota">Minnesota</option>
                <option value="Mississippi">Mississippi</option>
                <option value="Missouri">Missouri</option>
                <option value="Montana">Montana</option>
                <option value="Nebraska">Nebraska</option>
                <option value="Nevada">Nevada</option>
                <option value="New Hampshire">New Hampshire</option>
                <option value="New Jersey">New Jersey</option>
                <option value="New Mexico">New Mexico</option>
                <option value="New York">New York</option>
                <option value="North Carolina">North Carolina</option>
                <option value="North Dakota">North Dakota</option>
                <option value="Ohio">Ohio</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Rhode Island">Rhode Island</option>
                <option value="South Carolina">South Carolina</option>
                <option value="South Dakota">South Dakota</option>
                <option value="Tennessee">Tennessee</option>
                <option value="Texas">Texas</option>
                <option value="Utah">Utah</option>
                <option value="Vermont">Vermont</option>
                <option value="Virginia">Virginia</option>
                <option value="Washington">Washington</option>
                <option value="West Virginia">West Virginia</option>
                <option value="Wisconsin">Wisconsin</option>
                <option value="Wyoming">Wyoming</option>
              </select>
            </>
          )}

          {selectedCountry === "France" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Auvergne-Rhône-Alpes">
                  Auvergne-Rhône-Alpes
                </option>
                <option value="Bourgogne-Franche-Comté">
                  Bourgogne-Franche-Comté
                </option>

                <option value="Bretagne">Bretagne</option>
                <option value="Centre-Val-de-Loire">Centre Val-de-Loire</option>
                <option value="Corse">Corse</option>
                <option value="Grand-Est">Grand-Est</option>
                <option value="Hauts-de-France">Hauts-de-France</option>
                <option value="Île-de-France">Île-de-France</option>
                <option value="La-Réunion">La Réunion</option>
                <option value="Normandie">Normandie</option>
                <option value="Nouvelle-Aquitaine">Nouvelle-Aquitaine</option>
                <option value="Occitanie">Occitanie</option>
                <option value="Pays-de-la-Loire">Pays-de-la-Loire</option>
                <option value="Provence-Alpes-Côte-d’Azur">
                  Provence-Alpes-Côte-d’Azur
                </option>
                <option value="Saint-Barthélemy">Saint-Barthélemy</option>
                <option value="Terres australes françaises">
                  Terres australes françaises
                </option>
              </select>
            </>
          )}

          {selectedCountry === "Grèce" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Aitolia Kai Akarnania">
                  Aitolia Kai Akarnania
                </option>
                <option value="Akhaia">Akhaia</option>
                <option value="Argolis">Argolis</option>
                <option value="Arkadhia">Arkadhia</option>
                <option value="Arta">Arta</option>
                <option value="Attiki">Attiki</option>
                <option value="Chania">Chania</option>
                <option value="Chios">Chios</option>
                <option value="Dhodhekanisos">Dhodhekanisos</option>
                <option value="Drama">Drama</option>
                <option value="Evritania">Evritania</option>
                <option value="Evros">Evros</option>
                <option value="Evvoia">Evvoia</option>
                <option value="Florina">Florina</option>
                <option value="Fokis">Fokis</option>
                <option value="Fthiotis">Fthiotis</option>
                <option value="Grevena">Grevena</option>
                <option value="Icaria">Icaria</option>
                <option value="Ilia">Ilia</option>
                <option value="Imathia">Imathia</option>
                <option value="Ioannina">Ioannina</option>
                <option value="Iraklion">Iraklion</option>
                <option value="Kardhitsa">Kardhitsa</option>
                <option value="Kastoria">Kastoria</option>
                <option value="Kavala">Kavala</option>
                <option value="Kefallinia">Kefallinia</option>
                <option value="Kerkira">Kerkira</option>
                <option value="Kikladhes">Kikladhes</option>
                <option value="Kilkis">Kilkis</option>
                <option value="Korinthia">Korinthia</option>
                <option value="Kozani">Kozani</option>
                <option value="Lakonia">Lakonia</option>
                <option value="Larisa">Larisa</option>
                <option value="Lasithi">Lasithi</option>
                <option value="Lemnos">Lemnos</option>
                <option value="Lesvos">Lesvos</option>
                <option value="Magnisia">Magnisia</option>
                <option value="Messinia">Messinia</option>
                <option value="Pella">Pella</option>
                <option value="Pieria">Pieria</option>
                <option value="Preveza">Preveza</option>
                <option value="Psara">Psara</option>
                <option value="Rethimni">Rethimni</option>
                <option value="Rodhopi">Rodhopi</option>
                <option value="Samos">Samos</option>
                <option value="Serrai">Serrai</option>
                <option value="Thesprotia">Thesprotia</option>
                <option value="Thessaloniki">Thessaloniki</option>
                <option value="Trikala">Trikala</option>
                <option value="Voiotia">Voiotia</option>
                <option value="Xanthi">Xanthi</option>
                <option value="Zakinthos">Zakinthos</option>
              </select>
            </>
          )}

          {selectedCountry === "Hongrie" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Bacs-Kiskun">Bacs-Kiskun</option>
                <option value="Baranya">Baranya</option>
                <option value="Bekes">Bekes</option>
                <option value="Borsod-Abauj-Zemplen">
                  Borsod-Abauj-Zemplen
                </option>
                <option value="Budapest">Budapest</option>
                <option value="Csongrad">Csongrad</option>
                <option value="Fejer">Fejer</option>
                <option value="Gyor-Moson-Sopron">Gyor-Moson-Sopron</option>
                <option value="Hajdu-Bihar">Hajdu-Bihar</option>
                <option value="Heves">Heves</option>
                <option value="Jasz-Nagykun-Szolnok">
                  Jasz-Nagykun-Szolnok
                </option>
                <option value="Komarom-Esztergom">Komarom-Esztergom</option>
                <option value="Nograd">Nograd</option>
                <option value="Pest">Pest</option>
                <option value="Somogy">Somogy</option>
                <option value="Szabolcs-Szatmar-Bereg">
                  Szabolcs-Szatmar-Bereg
                </option>
                <option value="Tolna">Tolna</option>
                <option value="Vas">Vas</option>
                <option value="Veszprem">Veszprem</option>
                <option value="Zala">Zala</option>
              </select>
            </>
          )}

          {selectedCountry === "Iles Marshall" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Ailinglaplap Atoll">Ailinglaplap Atoll</option>
                <option value="Ailuk Atoll">Ailuk Atoll</option>
                <option value="Arno Atoll">Arno Atoll</option>
                <option value="Aur Atoll">Aur Atoll</option>
                <option value="Ebon Atoll">Ebon Atoll</option>
                <option value="Enewetak Atoll">Enewetak Atoll</option>
                <option value="Jabat Island">Jabat Island</option>
                <option value="Jaluit Atoll">Jaluit Atoll</option>
                <option value="Kili Island">Kili Island</option>
                <option value="Kwajalein Atoll">Kwajalein Atoll</option>
                <option value="Lae Atoll">Lae Atoll</option>
                <option value="Lib Island">Lib Island</option>
                <option value="Likiep Atoll">Likiep Atoll</option>
                <option value="Majuro Atoll">Majuro Atoll</option>
                <option value="Maloelap Atoll">Maloelap Atoll</option>
                <option value="Mejit Island">Mejit Island</option>
                <option value="Mili Atoll">Mili Atoll</option>
                <option value="Namdrik Atoll">Namdrik Atoll</option>
                <option value="Namu Atoll">Namu Atoll</option>
                <option value="Rongelap Atoll">Rongelap Atoll</option>
                <option value="Ujae Atoll">Ujae Atoll</option>
                <option value="Utrik Atoll">Utrik Atoll</option>
                <option value="Wotho Atoll">Wotho Atoll</option>
                <option value="Wotje Atoll">Wotje Atoll</option>
              </select>
            </>
          )}

          {selectedCountry === "Îles Salomon" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Central">Central</option>
                <option value="Guadalcanal">Guadalcanal</option>
                <option value="Isabel">Isabel</option>
                <option value="Makira">Makira</option>
                <option value="Malaita">Malaita</option>
                <option value="Western">Western</option>
              </select>
            </>
          )}

          {selectedCountry === "Inde" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Andaman and Nicobar Islands">
                  Andaman and Nicobar Islands
                </option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadra and Nagar Haveli">
                  Dadra and Nagar Haveli
                </option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Ladakh">Ladakh</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Orissa">Orissa</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </>
          )}

          {selectedCountry === "Indonésie" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Aceh">Aceh</option>
                <option value="Bali">Bali</option>
                <option value="Banten">Banten</option>
                <option value="Bengkulu">Bengkulu</option>
                <option value="Gorontalo">Gorontalo</option>
                <option value="Îles Bangka Belitung">
                  Îles Bangka Belitung
                </option>
                <option value="Iles Riau">Iles Riau</option>
                <option value="Jambi">Jambi</option>
                <option value="Java Central">Java Central</option>
                <option value="Java Est">Java Est</option>
                <option value="Java Ouest">Java Ouest</option>
                <option value="Kalimantan Central">Kalimantan Central</option>
                <option value="Kalimantan du Nord">Kalimantan du Nord</option>
                <option value="Kalimantan du Sud">Kalimantan du Sud</option>
                <option value="Kalimantan Est">Kalimantan Est</option>
                <option value="Kalimantan Ouest">Kalimantan Ouest</option>
                <option value="Lampung">Lampung</option>
                <option value="Maluku">Maluku</option>
                <option value="Maluku du Nord">Maluku du Nord</option>
                <option value="Nusa Tenggara Est">Nusa Tenggara Est</option>
                <option value="Nusa Tenggara Ouest">Nusa Tenggara Ouest</option>
                <option value="Papouasie">Papouasie</option>
                <option value="Papouasie occidentale">
                  Papouasie occidentale
                </option>
                <option value="Région spéciale de Jakarta Capitale">
                  Région spéciale de Jakarta Capitale
                </option>
                <option value="Région spéciale de Yogyakarta">
                  Région spéciale de Yogyakarta
                </option>
                <option value="Riau">Riau</option>
                <option value="Sud Sumatra">Sud Sumatra</option>
                <option value="Sulawesi Central">Sulawesi Central</option>
                <option value="Sulawesi du Nord">Sulawesi du Nord</option>
                <option value="Sulawesi du Sud">Sulawesi du Sud</option>
                <option value="Sulawesi du Sud-Est">Sulawesi du Sud-Est</option>
                <option value="Sulawesi Ouest">Sulawesi Ouest</option>
                <option value="Sumatra Nord">Sumatra Nord</option>
                <option value="Sumatra Ouest">Sumatra Ouest</option>
              </select>
            </>
          )}

          {selectedCountry === "Irlande" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Carlow">Carlow</option>
                <option value="Cavan">Cavan</option>
                <option value="Clare">Clare</option>
                <option value="Cork">Cork</option>
                <option value="Donegal">Donegal</option>
                <option value="Dublin">Dublin</option>
                <option value="Galway">Galway</option>
                <option value="Kerry">Kerry</option>
                <option value="Kildare">Kildare</option>
                <option value="Kilkenny">Kilkenny</option>
                <option value="Laois">Laois</option>
                <option value="Leitrim">Leitrim</option>
                <option value="Limerick">Limerick</option>
                <option value="Longford">Longford</option>
                <option value="Louth">Louth</option>
                <option value="Mayo">Mayo</option>
                <option value="Meath">Meath</option>
                <option value="Monaghan">Monaghan</option>
                <option value="Offaly">Offaly</option>
                <option value="Roscommon">Roscommon</option>
                <option value="Sligo">Sligo</option>
                <option value="Tipperary">Tipperary</option>
                <option value="Waterford">Waterford</option>
                <option value="Westmeath">Westmeath</option>
                <option value="Wexford">Wexford</option>
                <option value="Wicklow">Wicklow</option>
              </select>
            </>
          )}

          {selectedCountry === "Italie" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Austurland">Austurland</option>
                <option value="Höfuðborgarsvæðið">Höfuðborgarsvæðið</option>
                <option value="Norðurland Eystra">Norðurland Eystra</option>
                <option value="Norðurland Vestra">Norðurland Vestra</option>
                <option value="Suðurland">Suðurland</option>
                <option value="Suðurnes">Suðurnes</option>
                <option value="Vestfirðir">Vestfirðir</option>
                <option value="Vesturland">Vesturland</option>
              </select>
            </>
          )}

          {selectedCountry === "Islande" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Abruzzo">Abruzzo</option>
                <option value="Basilicata">Basilicata</option>
                <option value="Calabria">Calabria</option>
                <option value="Campania">Campania</option>
                <option value="Emilia-Romagna">Emilia-Romagna</option>
                <option value="Friuli-Venezia Giulia">
                  Friuli-Venezia Giulia
                </option>
                <option value="Lazio">Lazio</option>
                <option value="Liguria">Liguria</option>
                <option value="Lombardia">Lombardia</option>
                <option value="Marche">Marche</option>
                <option value="Molise">Molise</option>
                <option value="Piemonte">Piemonte</option>
                <option value="Puglia">Puglia</option>
                <option value="Sardegna">Sardegna</option>
                <option value="Sicilia">Sicilia</option>
                <option value="Toscana">Toscana</option>
                <option value="Trentino-Südtirol">Trentino-Südtirol</option>
                <option value="Umbria">Umbria</option>
                <option value="Valle d'Aosta">Valle d'Aosta</option>
                <option value="Veneto">Veneto</option>
              </select>
            </>
          )}

          {selectedCountry === "Japon" && (
            <>
              <label htmlFor="country-select">Préfecture*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Aichi">Aichi</option>
                <option value="Akita">Akita</option>
                <option value="Aomori">Aomori</option>
                <option value="Chiba">Chiba</option>
                <option value="Ehime">Ehime</option>
                <option value="Fukui">Fukui</option>
                <option value="Fukuoka">Fukuoka</option>
                <option value="Fukushima">Fukushima</option>
                <option value="Gifu">Gifu</option>
                <option value="Gumma">Gumma</option>
                <option value="Hiroshima">Hiroshima</option>
                <option value="Hokkaido">Hokkaido</option>
                <option value="Hyogo">Hyogo</option>
                <option value="Ibaraki">Ibaraki</option>
                <option value="Ishikawa">Ishikawa</option>
                <option value="Iwate">Iwate</option>
                <option value="Kagawa">Kagawa</option>
                <option value="Kagoshima">Kagoshima</option>
                <option value="Kanagawa">Kanagawa</option>
                <option value="Kouchi">Kouchi</option>
                <option value="Kumamoto">Kumamoto</option>
                <option value="Kyoto">Kyoto</option>
                <option value="Mie">Mie</option>
                <option value="Miyagi">Miyagi</option>
                <option value="Miyazaki">Miyazaki</option>
                <option value="Nagano">Nagano</option>
                <option value="Nagasaki">Nagasaki</option>
                <option value="Nara">Nara</option>
                <option value="Niigata">Niigata</option>
                <option value="Oita">Oita</option>
                <option value="Okayama">Okayama</option>
                <option value="Okinawa">Okinawa</option>
                <option value="Osaka">Osaka</option>
                <option value="Saga">Saga</option>
                <option value="Saitama">Saitama</option>
                <option value="Shiga">Shiga</option>
                <option value="Shimane">Shimane</option>
                <option value="Shizuoka">Shizuoka</option>
                <option value="Tochigi">Tochigi</option>
                <option value="Tokushima">Tokushima</option>
                <option value="Tokyo">Tokyo</option>
                <option value="Tottori">Tottori</option>
                <option value="Toyama">Toyama</option>
                <option value="Wakayama">Wakayama</option>
                <option value="Yamagata">Yamagata</option>
                <option value="Yamaguchi">Yamaguchi</option>
                <option value="Yamanashi">Yamanashi</option>
              </select>
            </>
          )}

          {selectedCountry === "Malaisie" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Johor">Johor</option>
                <option value="Kedah">Kedah</option>
                <option value="Kelantan">Kelantan</option>
                <option value="Melaka">Melaka</option>
                <option value="Negeri Sembilan">Negeri Sembilan</option>
                <option value="Pahang">Pahang</option>
                <option value="Perak">Perak</option>
                <option value="Perlis">Perlis</option>
                <option value="Pulau Pinang">Pulau Pinang</option>
                <option value="Sabah">Sabah</option>
                <option value="Sarawak">Sarawak</option>
                <option value="Selangor">Selangor</option>
                <option value="Terengganu">Terengganu</option>
                <option value="Wilayah Persekutuan Kuala Lumpur">
                  Wilayah Persekutuan Kuala Lumpur
                </option>
                <option value="Wilayah Persekutuan Labuan">
                  Wilayah Persekutuan Labuan
                </option>
                <option value="Wilayah Persekutuan Putrajaya">
                  Wilayah Persekutuan Putrajaya
                </option>
              </select>
            </>
          )}

          {selectedCountry === "Mexique" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Aguascalientes">Aguascalientes</option>
                <option value="Baja California">Baja California</option>
                <option value="Baja California Sur">Baja California Sur</option>
                <option value="Campeche">Campeche</option>
                <option value="Chiapas">Chiapas</option>
                <option value="Chihuahua">Chihuahua</option>
                <option value="Coahuila">Coahuila</option>
                <option value="Colima">Colima</option>
                <option value="Durango">Durango</option>
                <option value="Guanajuato">Guanajuato</option>
                <option value="Guerrero">Guerrero</option>
                <option value="Hidalgo">Hidalgo</option>
                <option value="Jalisco">Jalisco</option>
                <option value="Mexico">Mexico</option>
                <option value="Mexique">Mexique</option>
                <option value="Michoacan">Michoacan</option>
                <option value="Morelos">Morelos</option>
                <option value="Nayarit">Nayarit</option>
                <option value="Nuevo Leon">Nuevo Leon</option>
                <option value="Oaxaca">Oaxaca</option>
                <option value="Puebla">Puebla</option>
                <option value="Queretaro">Queretaro</option>
                <option value="Quintana Roo">Quintana Roo</option>
                <option value="San Luis Potosi">San Luis Potosi</option>
                <option value="Sinaloa">Sinaloa</option>
                <option value="Sonora">Sonora</option>
                <option value="Tabasco">Tabasco</option>
                <option value="Tamaulipas">Tamaulipas</option>
                <option value="Tlaxcala">Tlaxcala</option>
                <option value="Veracruz">Veracruz</option>
                <option value="Yucatan">Yucatan</option>
                <option value="Zacatecas">Zacatecas</option>
              </select>
            </>
          )}

          {selectedCountry === "Nigéria" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Abia">Abia</option>
                <option value="Adamawa">Adamawa</option>
                <option value="Akwa Ibom">Akwa Ibom</option>
                <option value="Anambra">Anambra</option>
                <option value="Bauchi">Bauchi</option>
                <option value="Bayelsa">Bayelsa</option>
                <option value="Benue">Benue</option>
                <option value="Borno">Borno</option>
                <option value="Cross River">Cross River</option>
                <option value="Delta">Delta</option>
                <option value="Ebonyi">Ebonyi</option>
                <option value="Edo">Edo</option>
                <option value="Ekiti">Ekiti</option>
                <option value="Enugu">Enugu</option>
                <option value="Gombe">Gombe</option>
                <option value="Imo">Imo</option>
                <option value="Jigawa">Jigawa</option>
                <option value="Kaduna">Kaduna</option>
                <option value="Kano">Kano</option>
                <option value="Katsina">Katsina</option>
                <option value="Kebbi">Kebbi</option>
                <option value="Kogi">Kogi</option>
                <option value="Kwara">Kwara</option>
                <option value="Lagos">Lagos</option>
                <option value="Nasarawa">Nasarawa</option>
                <option value="Niger">Niger</option>
                <option value="Ogun">Ogun</option>
                <option value="Ondo">Ondo</option>
                <option value="Osun">Osun</option>
                <option value="Oyo">Oyo</option>
                <option value="plateau">Plateau</option>
                <option value="Rivers">Rivers</option>
                <option value="Sokoto">Sokoto</option>
                <option value="Taraba">Taraba</option>
                <option value="Territoire de la capitale fédérale d'Abuja">
                  Territoire de la capitale fédérale d'Abuja
                </option>
                <option value="Yobe">Yobe</option>
                <option value="Zamfara">Zamfara</option>
              </select>
            </>
          )}

          {selectedCountry === "Norvège" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Akershus">Akershus</option>
                <option value="Aust-Agder">Aust-Agder</option>
                <option value="Buskerud">Buskerud</option>
                <option value="Finnmark">Finnmark</option>
                <option value="Hedmark">Hedmark</option>
                <option value="Hordaland">Hordaland</option>
                <option value="Møre og Romsdal">Møre og Romsdal</option>
                <option value="Nord-Trøndelag">Nord-Trøndelag</option>
                <option value="Nordland">Nordland</option>
                <option value="Oppland">Oppland</option>
                <option value="Oslo">Oslo</option>
                <option value="Østfold">Østfold</option>
                <option value="Rogaland">Rogaland</option>
                <option value="Sogn og Fjordane">Sogn og Fjordane</option>
                <option value="Sør-Trøndelag">Sør-Trøndelag</option>
                <option value="Telemark">Telemark</option>
                <option value="Troms">Troms</option>
                <option value="Vest-Agder">Vest-Agder</option>
                <option value="Vestfold">Vestfold</option>
              </select>
            </>
          )}

          {selectedCountry === "Nouvelle-Zélande" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Auckland">Auckland</option>
                <option value="Bay Of Plenty">Bay Of Plenty</option>
                <option value="Canterbury">Canterbury</option>
                <option value="Chatham Islands Territory">
                  Chatham Islands Territory
                </option>
                <option value="Gisborne">Gisborne</option>
                <option value="Hawke's Bay">Hawke's Bay</option>
                <option value="Manawatu-Wanganui">Manawatu-Wanganui</option>
                <option value="Marlborough">Marlborough</option>
                <option value="Nelson">Nelson</option>
                <option value="Northland">Northland</option>
                <option value="Otago">Otago</option>
                <option value="Southland">Southland</option>
                <option value="Taranaki">Taranaki</option>
                <option value="Tasman">Tasman</option>
                <option value="Waikato">Waikato</option>
                <option value="Wellington">Wellington</option>
                <option value="West Coast">West Coast</option>
              </select>
            </>
          )}

          {selectedCountry === "Pakistan" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Azad Kashmir">Azad Kashmir</option>
                <option value="Balochistan">Balochistan</option>
                <option value="Islamabad">Islamabad</option>
                <option value="locale-dataset.states.PAK.GB">
                  locale-dataset.states.PAK.GB
                </option>
                <option value="locale-dataset.states.PAK.KP">
                  locale-dataset.states.PAK.KP
                </option>
                <option value="Punjab">Punjab</option>
                <option value="Sindh">Sindh</option>
              </select>
            </>
          )}

          {selectedCountry === "Panama" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Bocas del Toro">Bocas del Toro</option>
                <option value="Chiriquí">Chiriquí</option>
                <option value="Coclé">Coclé</option>
                <option value="Colón">Colón</option>
                <option value="Darién">Darién</option>
                <option value="Embera">Embera</option>
                <option value="Guna Yala">Guna Yala</option>
                <option value="Herrera">Herrera</option>
                <option value="Los Santos">Los Santos</option>
                <option value="Ngäbe-Buglé">Ngäbe-Buglé</option>
                <option value="Panama">Panama</option>
                <option value="Panamá Oeste">Panamá Oeste</option>
                <option value="Veraguas">Veraguas</option>
              </select>
            </>
          )}

          {selectedCountry === "Paraguay" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Alto Paraguay">Alto Paraguay</option>
                <option value="Alto Parana">Alto Parana</option>
                <option value="Amambay">Amambay</option>
                <option value="Asuncion">Asuncion</option>
                <option value="Boqueron">Boqueron</option>
                <option value="Caaguazu">Caaguazu</option>
                <option value="Caazapa">Caazapa</option>
                <option value="Canindeyu">Canindeyu</option>
                <option value="Central">Central</option>
                <option value="Concepcion">Concepcion</option>
                <option value="Cordillera">Cordillera</option>
                <option value="Guaira">Guaira</option>
                <option value="Itapua">Itapua</option>
                <option value="Misiones">Misiones</option>
                <option value="Neembucu">Neembucu</option>
                <option value="Paraguari">Paraguari</option>
                <option value="Presidente Hayes">Presidente Hayes</option>
                <option value="San Pedro">San Pedro</option>
              </select>
            </>
          )}

          {selectedCountry === "Pays-Bas" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Curaçao">Curaçao</option>
                <option value="Drenthe">Drenthe</option>
                <option value="Flevoland">Flevoland</option>
                <option value="Fryslân">Fryslân</option>
                <option value="Gelderland">Gelderland</option>
                <option value="Groningen">Groningen</option>
                <option value="Limburg">Limburg</option>
                <option value="Noord-Brabant">Noord-Brabant</option>
                <option value="Noord-Holland">Noord-Holland</option>
                <option value="Overijssel">Overijssel</option>
                <option value="Saint-Martin [Royaume des Pays-Bas]">
                  Saint-Martin [Royaume des Pays-Bas]
                </option>
                <option value="Utrecht">Utrecht</option>
                <option value="Zeeland">Zeeland</option>
                <option value="Zuid-Holland">Zuid-Holland</option>
              </select>
            </>
          )}

          {selectedCountry === "Pérou" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Amazonas">Amazonas</option>
                <option value="Ancash">Ancash</option>
                <option value="Apurimac">Apurimac</option>
                <option value="Arequipa">Arequipa</option>
                <option value="Ayacucho">Ayacucho</option>
                <option value="Cajamarca">Cajamarca</option>
                <option value="Callao">Callao</option>
                <option value="Cusco">Cusco</option>
                <option value="Huancavelica">Huancavelica</option>
                <option value="Huanuco">Huanuco</option>
                <option value="Ica">Ica</option>
                <option value="Junin">Junin</option>
                <option value="La Libertad">La Libertad</option>
                <option value="Lambayeque">Lambayeque</option>
                <option value="Lima">Lima</option>
                <option value="Loreto">Loreto</option>
                <option value="Madre de Dios">Madre de Dios</option>
                <option value="Moquegua">Moquegua</option>
                <option value="Pasco">Pasco</option>
                <option value="Piura">Piura</option>
                <option value="Puno">Puno</option>
                <option value="San Martin">San Martin</option>
                <option value="Tacna">Tacna</option>
                <option value="Tumbes">Tumbes</option>
                <option value="Ucayali">Ucayali</option>
              </select>
            </>
          )}

          {selectedCountry === "Philippines" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Autonomous Region in Muslim Mindanao ">
                  Autonomous Region in Muslim Mindanao{" "}
                </option>
                <option value="Bicol Region">Bicol Region</option>
                <option value="Cagayan Valley ">Cagayan Valley </option>
                <option value="Calabarzon">Calabarzon</option>
                <option value="Caraga">Caraga</option>
                <option value="Central Luzon">Central Luzon</option>
                <option value="Central Visayas">Central Visayas</option>
                <option value="Cordillera Administrative Region">
                  Cordillera Administrative Region
                </option>
                <option value="Davao Region">Davao Region</option>
                <option value="Eastern Visayas">Eastern Visayas</option>
                <option value="Ilocos Region">Ilocos Region</option>
                <option value="Mimaropa">Mimaropa</option>
                <option value="National Capital Region">
                  National Capital Region
                </option>
                <option value="Northern Mindanao">Northern Mindanao</option>
                <option value="Soccsksargen">Soccsksargen</option>
                <option value="Western Visayas">Western Visayas</option>
                <option value="Zamboanga Peninsula">Zamboanga Peninsula</option>
              </select>
            </>
          )}

          {selectedCountry === "Pologne" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Dolnośląskie">Dolnośląskie</option>
                <option value="Kujawsko-pomorskie">Kujawsko-pomorskie</option>
                <option value="Łódzkie">Łódzkie</option>
                <option value="Lubelskie">Lubelskie</option>
                <option value="Lubuskie">Lubuskie</option>
                <option value="Małopolskie">Małopolskie</option>
                <option value="Mazowieckie">Mazowieckie</option>
                <option value="Opolskie">Opolskie</option>
                <option value="Podkarpackie">Podkarpackie</option>
                <option value="Podlaskie">Podlaskie</option>
                <option value="Pomorskie">Pomorskie</option>
                <option value="Śląskie">Śląskie</option>
                <option value="Świętokrzyskie">Świętokrzyskie</option>
                <option value="Warmińsko-mazurskie">Warmińsko-mazurskie</option>
                <option value="Wielkopolskie">Wielkopolskie</option>
                <option value="Zachodniopomorskie">Zachodniopomorskie</option>
              </select>
            </>
          )}

          {selectedCountry === "Portugal" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Aveiro">Aveiro</option>
                <option value="Beja">Beja</option>
                <option value="Braga">Braga</option>
                <option value="Bragança">Bragança</option>
                <option value="Castelo Branco">Castelo Branco</option>
                <option value="Coimbra">Coimbra</option>
                <option value="Évora">Évora</option>
                <option value="Faro">Faro</option>
                <option value="Guarda">Guarda</option>
                <option value="Leiria">Leiria</option>
                <option value="Lisboa">Lisboa</option>
                <option value="Portalegre">Portalegre</option>
                <option value="Porto">Porto</option>
                <option value="Região Autónoma da Madeira">
                  Região Autónoma da Madeira
                </option>
                <option value="Região Autónoma dos Açores">
                  Região Autónoma dos Açores
                </option>
                <option value="Santarém">Santarém</option>
                <option value="Setúbal">Setúbal</option>
                <option value="Viana do Castelo">Viana do Castelo</option>
                <option value="Vila Real">Vila Real</option>
                <option value="Viseu">Viseu</option>
              </select>
            </>
          )}

          {selectedCountry === "République centrafricaine" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Bamingui-Bangoran">Bamingui-Bangoran</option>
                <option value="Bangui">Bangui</option>
                <option value="Basse-Kotto">Basse-Kotto</option>
                <option value="Haut-Mbomou">Haut-Mbomou</option>
                <option value="Haute-Kotto">Haute-Kotto</option>
                <option value="Kemo">Kemo</option>
                <option value="Lobaye">Lobaye</option>
                <option value="Mambere-Kadei">Mambere-Kadei</option>
                <option value="Mbomou">Mbomou</option>
                <option value="Nana-Mambere">Nana-Mambere</option>
                <option value="Ombella-Mpoko">Ombella-Mpoko</option>
                <option value="Ouaka">Ouaka</option>
                <option value="Ouham">Ouham</option>
                <option value="Ouham-Pende">Ouham-Pende</option>
                <option value="Sangha-Mbaere">Sangha-Mbaere</option>
              </select>
            </>
          )}

          {selectedCountry === "République de Côte d'Ivoire" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Agneby">Agneby</option>
                <option value="Bafing">Bafing</option>
                <option value="Bas-Sassandra">Bas-Sassandra</option>
                <option value="Denguele">Denguele</option>
                <option value="Fromager">Fromager</option>
                <option value="Haut-Sassandra">Haut-Sassandra</option>
                <option value="Lacs">Lacs</option>
                <option value="Lagunes">Lagunes</option>
                <option value="Marahoue">Marahoue</option>
                <option value="Moyen-Cavally">Moyen-Cavally</option>
                <option value="Moyen-Comoe">Moyen-Comoe</option>
                <option value="N'zi-Comoe">N'zi-Comoe</option>
                <option value="Savanes">Savanes</option>
                <option value="Sud-Bandama">Sud-Bandama</option>
                <option value="Sud-Comoe">Sud-Comoe</option>
                <option value="Vallée Du Bandama">Vallée Du Bandama</option>
                <option value="Worodougou">Worodougou</option>
                <option value="Zanzan">Zanzan</option>
              </select>
            </>
          )}

          {selectedCountry === "République dominicaine" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Azua">Azua</option>
                <option value="Baoruco">Baoruco</option>
                <option value="Barahona">Barahona</option>
                <option value="Dajabon">Dajabon</option>
                <option value="Distrito Nacional">Distrito Nacional</option>
                <option value="Duarte">Duarte</option>
                <option value="El Seibo">El Seibo</option>
                <option value="Elias Pina">Elias Pina</option>
                <option value="Espaillat">Espaillat</option>
                <option value="Hato Mayor">Hato Mayor</option>
                <option value="Independencia">Independencia</option>
                <option value="La Altagracia">La Altagracia</option>
                <option value="La Romana">La Romana</option>
                <option value="La Vega">La Vega</option>
                <option value="Maria Trinidad Sanchez">
                  Maria Trinidad Sanchez
                </option>
                <option value="Monsenor Nouel">Monsenor Nouel</option>
                <option value="Monte Cristi">Monte Cristi</option>
                <option value="Monte Plata">Monte Plata</option>
                <option value="Pedernales">Pedernales</option>
                <option value="Peravia">Peravia</option>
                <option value="Puerto Plata">Puerto Plata</option>
                <option value="Salcedo">Salcedo</option>
                <option value="Samana">Samana</option>
                <option value="San Cristobal">San Cristobal</option>
                <option value="San Juan">San Juan</option>
                <option value="San Pedro De Macoris">
                  San Pedro De Macoris
                </option>
                <option value="Sanchez Ramirez">Sanchez Ramirez</option>
                <option value="Santiago">Santiago</option>
                <option value="Santiago Rodriguez">Santiago Rodriguez</option>
                <option value="Valverde">Valverde</option>
              </select>
            </>
          )}

          {selectedCountry === "République tchèque" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Jihočeský kraj">Jihočeský kraj</option>
                <option value="Jihomoravský kraj">Jihomoravský kraj</option>
                <option value="Karlovarský kraj">Karlovarský kraj</option>
                <option value="Královéhradecký kraj">
                  Královéhradecký kraj
                </option>
                <option value="Liberecký kraj">Liberecký kraj</option>
                <option value="Moravskoslezský kraj">
                  Moravskoslezský kraj
                </option>
                <option value="Olomoucký kraj">Olomoucký kraj</option>
                <option value="Pardubický kraj">Pardubický kraj</option>
                <option value="Plzeňský kraj">Plzeňský kraj</option>
                <option value="Praha, hlavní město">Praha, hlavní město</option>
                <option value="Středočeský kraj">Středočeský kraj</option>
                <option value="Ústecký kraj">Ústecký kraj</option>
                <option value="Vysočina">Vysočina</option>
                <option value="Zlínský kraj">Zlínský kraj</option>
              </select>
            </>
          )}

          {selectedCountry === "Roumanie" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Alba">Alba</option>
                <option value="Arad">Arad</option>
                <option value="Argeș">Argeș</option>
                <option value="Bacău">Bacău</option>
                <option value="Bihor">Bihor</option>
                <option value="Bistrița-Năsăud">Bistrița-Năsăud</option>
                <option value="Botoșani">Botoșani</option>
                <option value="Brăila">Brăila</option>
                <option value="Brașov">Brașov</option>
                <option value="Bucarest">Bucarest</option>
                <option value="Buzău">Buzău</option>
                <option value="Călărași">Călărași</option>
                <option value="Caraș-Severin">Caraș-Severin</option>
                <option value="Cluj">Cluj</option>
                <option value="Constanța">Constanța</option>
                <option value="Covasna">Covasna</option>
                <option value="Dâmbovița">Dâmbovița</option>
                <option value="Dolj">Dolj</option>
                <option value="Galați">Galați</option>
                <option value="Giurgiu">Giurgiu</option>
                <option value="Gorj">Gorj</option>
                <option value="Harghita">Harghita</option>
                <option value="Hunedoara">Hunedoara</option>
                <option value="Ialomița">Ialomița</option>
                <option value="Iași">Iași</option>
                <option value="Ilfov">Ilfov</option>
                <option value="Maramureș">Maramureș</option>
                <option value="Mehedinți">Mehedinți</option>
                <option value="Mureș">Mureș</option>
                <option value="Neamț">Neamț</option>
                <option value="Olt">Olt</option>
                <option value="Prahova">Prahova</option>
                <option value="Sălaj">Sălaj</option>
                <option value="Satu Mare">Satu Mare</option>
                <option value="Sibiu">Sibiu</option>
                <option value="Suceava">Suceava</option>
                <option value="Teleorman">Teleorman</option>
                <option value="Timiș">Timiș</option>
                <option value="Tulcea">Tulcea</option>
                <option value="Vâlcea">Vâlcea</option>
                <option value="Vaslui">Vaslui</option>
                <option value="Vrancea">Vrancea</option>
              </select>
            </>
          )}

          {selectedCountry === "Royaume-Uni" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Angleterre">Angleterre</option>
                <option value="Écosse">Écosse</option>
                <option value="Irlande du Nord">Irlande du Nord</option>
                <option value="Pays de Galles">Pays de Galles</option>
              </select>
            </>
          )}

          {selectedCountry === "Russie" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Adygeya, Respublika">Adygeya, Respublika</option>
                <option value="Altay">Altay</option>
                <option value="Altayskiy kray">Altayskiy kray</option>
                <option value="Amurskaya oblast '">Amurskaya oblast '</option>
                <option value="Arkhangel'skaya oblast '">
                  Arkhangel'skaya oblast '
                </option>
                <option value="Astrakhan '">Astrakhan '</option>
                <option value="Belgorod '">Belgorod '</option>
                <option value="Briansk '">Briansk '</option>
                <option value="Buryatiya, Respublika">
                  Buryatiya, Respublika
                </option>
                <option value="Cheljabinskaya oblast '">
                  Cheljabinskaya oblast '
                </option>
                <option value="Chukotskiy avtonomnyy okrug">
                  Chukotskiy avtonomnyy okrug
                </option>
                <option value="Dagestan, Respublika">
                  Dagestan, Respublika
                </option>
                <option value="Irkutskaya oblast '">Irkutskaya oblast '</option>
                <option value="Ivanovo '">Ivanovo '</option>
                <option value="Jaroslavskaya oblast'">
                  Jaroslavskaya oblast'
                </option>
                <option value="Kabardino-Balkarskaya Respublika">
                  Kabardino-Balkarskaya Respublika
                </option>
                <option value="Kaluzhskaya oblast'">Kaluzhskaya oblast'</option>
                <option value="Kamchatka">Kamchatka</option>
                <option value="Karachayevo-Cherkesskaya Respublika">
                  Karachayevo-Cherkesskaya Respublika
                </option>
                <option value="Kareliya, Respublika">
                  Kareliya, Respublika
                </option>
                <option value="Kemerovo '">Kemerovo '</option>
                <option value="Khabarovskiy kray">Khabarovskiy kray</option>
                <option value="Khanty-Mansiyskiy avtonomnyy okrug">
                  Khanty-Mansiyskiy avtonomnyy okrug
                </option>
                <option value="Kirovskaya oblast'">Kirovskaya oblast'</option>
                <option value="Komi, Respublika">Komi, Respublika</option>
                <option value="Kostroma '">Kostroma '</option>
                <option value="Krasnodarskiy kray">Krasnodarskiy kray</option>
                <option value="Krasnojarskiy kray">Krasnojarskiy kray</option>
                <option value="Kurganskaya oblast'">Kurganskaya oblast'</option>
                <option value="Kurskaya oblast'">Kurskaya oblast'</option>
                <option value="Leningradskaya oblast'">
                  Leningradskaya oblast'
                </option>
                <option value="Lipeckaya oblast'">Lipeckaya oblast'</option>
                <option value="Magadanskaya oblast '">
                  Magadanskaya oblast '
                </option>
                <option value="Mariy El, Respublika">
                  Mariy El, Respublika
                </option>
                <option value="Mordoviya, Respublika">
                  Mordoviya, Respublika
                </option>
                <option value="Moscow">Moscow</option>
                <option value="Moskovskaya Oblast '">
                  Moskovskaya Oblast '
                </option>
                <option value="Nenetskiy avtonomnyy okrug">
                  Nenetskiy avtonomnyy okrug
                </option>
                <option value="Nizhegorodskaya oblast'">
                  Nizhegorodskaya oblast'
                </option>
                <option value="Novgorodskaya oblast'">
                  Novgorodskaya oblast'
                </option>
                <option value="Novosibirskaya Oblast '">
                  Novosibirskaya Oblast '
                </option>
                <option value="Omskaya Oblast '">Omskaya Oblast '</option>
                <option value="Orenburgskaya oblast'">
                  Orenburgskaya oblast'
                </option>
                <option value="Orlovskaya oblast'">Orlovskaya oblast'</option>
                <option value="Permskiy kray">Permskiy kray</option>
                <option value="Primorskiy kraj">Primorskiy kraj</option>
                <option value="Pskovskaya oblast'">Pskovskaya oblast'</option>
                <option value="Région de Kaliningrad '">
                  Région de Kaliningrad '
                </option>
                <option value="Région de Mourmansk '">
                  Région de Mourmansk '
                </option>
                <option value="Région de Penza '">Région de Penza '</option>
                <option value="Région de Samara '">Région de Samara '</option>
                <option value="Région de Vologda '">Région de Vologda '</option>
                <option value="République d'Ingouchie">
                  République d'Ingouchie
                </option>
                <option value="République de Bachkirie">
                  République de Bachkirie
                </option>
                <option value="République de Chuvashskaya">
                  République de Chuvashskaya
                </option>
                <option value="République de Hakasiya">
                  République de Hakasiya
                </option>
                <option value="République de Kalmoukie">
                  République de Kalmoukie
                </option>
                <option value="Rostovskaya oblast'">Rostovskaya oblast'</option>
                <option value="Ryazanskaya oblast'">Ryazanskaya oblast'</option>
                <option value="Saha, Respublika">Saha, Respublika</option>
                <option value="Sahalinskaya oblast'">
                  Sahalinskaya oblast'
                </option>
                <option value="Sankt-Peterburg">Sankt-Peterburg</option>
                <option value="Saratov '">Saratov '</option>
                <option value="Severnaya Osetiya, Respublika">
                  Severnaya Osetiya, Respublika
                </option>
                <option value="Smolenskaya oblast'">Smolenskaya oblast'</option>
                <option value="Stavropol'skiy kray">Stavropol'skiy kray</option>
                <option value="Sverdlovskaya oblast '">
                  Sverdlovskaya oblast '
                </option>
                <option value="Tambov '">Tambov '</option>
                <option value="Tatarstan, Respublika">
                  Tatarstan, Respublika
                </option>
                <option value="Tchétchénie">Tchétchénie</option>
                <option value="Tomskaya Oblast '">Tomskaya Oblast '</option>
                <option value="Tul'skaya oblast'">Tul'skaya oblast'</option>
                <option value="Tverskaya oblast'">Tverskaya oblast'</option>
                <option value="Tyumenskaya oblast '">
                  Tyumenskaya oblast '
                </option>
                <option value="Tyva, Respublika">Tyva, Respublika</option>
                <option value="Udmurtskaya Respublika">
                  Udmurtskaya Respublika
                </option>
                <option value="Ul'janovskaya oblast'">
                  Ul'janovskaya oblast'
                </option>
                <option value="Vladimirskaya oblast '">
                  Vladimirskaya oblast '
                </option>
                <option value="Volgogradskaya oblast'">
                  Volgogradskaya oblast'
                </option>
                <option value="Voronezhskaya oblast'">
                  Voronezhskaya oblast'
                </option>
                <option value="Yamalo-Neneckiy avtonomnyy okrug">
                  Yamalo-Neneckiy avtonomnyy okrug
                </option>
                <option value="Yevreyskaya avtonomnaya oblast '">
                  Yevreyskaya avtonomnaya oblast '
                </option>
                <option value="Zabaykal'skiy kray">Zabaykal'skiy kray</option>
              </select>
            </>
          )}

          {selectedCountry === "Sénégal" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Dakar">Dakar</option>
                <option value="Diourbel">Diourbel</option>
                <option value="Fatick">Fatick</option>
                <option value="Kaffrine">Kaffrine</option>
                <option value="Kaolack">Kaolack</option>
                <option value="Kédougou">Kédougou</option>
                <option value="Kolda">Kolda</option>
                <option value="Louga">Louga</option>
                <option value="Matam">Matam</option>
                <option value="Saint-Louis">Saint-Louis</option>
                <option value="Sédhiou">Sédhiou</option>
                <option value="Tambacounda">Tambacounda</option>
                <option value="Thiès">Thiès</option>
                <option value="Ziguinchor">Ziguinchor</option>
              </select>
            </>
          )}

          {selectedCountry === "Serbie" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Belgrade">Belgrade</option>
                <option value="District de Bačka méridionale">
                  District de Bačka méridionale
                </option>
                <option value="District de Bačka Nord">
                  District de Bačka Nord
                </option>
                <option value="District de Bačka Ouest">
                  District de Bačka Ouest
                </option>
                <option value="District de Bor">District de Bor</option>
                <option value="District de Braničevo">
                  District de Braničevo
                </option>
                <option value="District de Jablanica">
                  District de Jablanica
                </option>
                <option value="District de Kolubara">
                  District de Kolubara
                </option>
                <option value="District de Kosovo-Pomoravlje">
                  District de Kosovo-Pomoravlje
                </option>
                <option value="District de Kosovska Mitrovica">
                  District de Kosovska Mitrovica
                </option>
                <option value="District de Mačva">District de Mačva</option>
                <option value="District de Moravica">
                  District de Moravica
                </option>
                <option value="District de Nišava">District de Nišava</option>
                <option value="District de Pčinja">District de Pčinja</option>
                <option value="District de Peć">District de Peć</option>
                <option value="District de Pirot">District de Pirot</option>
                <option value="District de Podunavlje">
                  District de Podunavlje
                </option>
                <option value="District de Pomoravlje">
                  District de Pomoravlje
                </option>
                <option value="District de Prizren">District de Prizren</option>
                <option value="District de Rasina">District de Rasina</option>
                <option value="District de Raška">District de Raška</option>
                <option value="District de Srem">District de Srem</option>
                <option value="District de Šumadija">
                  District de Šumadija
                </option>
                <option value="District de Toplica">District de Toplica</option>
                <option value="District de Zaječar">District de Zaječar</option>
                <option value="District de Zlatibor">
                  District de Zlatibor
                </option>
                <option value="District du Banat Central">
                  District du Banat Central
                </option>
                <option value="District du Banat Nord">
                  District du Banat Nord
                </option>
                <option value="District du Banat Sud">
                  District du Banat Sud
                </option>
                <option value="District du Kosovo">District du Kosovo</option>
              </select>
            </>
          )}

          {selectedCountry === "Singapour" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Central Singapore">Central Singapore</option>
                <option value="North East">North East</option>
                <option value="North West">North West</option>
                <option value="South East">South East</option>
                <option value="South West">South West</option>
              </select>
            </>
          )}

          {selectedCountry === "Slovaquie" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Banska Bystrica">Banska Bystrica</option>
                <option value="Bratislava">Bratislava</option>
                <option value="Kosice">Kosice</option>
                <option value="Nitra">Nitra</option>
                <option value="Presov">Presov</option>
                <option value="Trencin">Trencin</option>
                <option value="Trnava">Trnava</option>
                <option value="Zilina">Zilina</option>
              </select>
            </>
          )}

          {selectedCountry === "Slovénie" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Ajdovscina">Ajdovscina</option>
                <option value="Bled">Bled</option>
                <option value="Bohinj">Bohinj</option>
                <option value="Borovnica">Borovnica</option>
                <option value="Bovec">Bovec</option>
                <option value="Brezice">Brezice</option>
                <option value="Brezovica">Brezovica</option>
                <option value="Celje">Celje</option>
                <option value="Cerknica">Cerknica</option>
                <option value="Cerkno">Cerkno</option>
                <option value="Črenšovci">Črenšovci</option>
                <option value="Črnomelj">Črnomelj</option>
                <option value="Destrnik">Destrnik</option>
                <option value="Divača">Divača</option>
                <option value="Domžale">Domžale</option>
                <option value="Dravograd">Dravograd</option>
                <option value="Gornja Radgona">Gornja Radgona</option>
                <option value="Grosuplje">Grosuplje</option>
                <option value="Hoče-Slivnica">Hoče-Slivnica</option>
                <option value="Horjul">Horjul</option>
                <option value="Hrastnik">Hrastnik</option>
                <option value="Idrija">Idrija</option>
                <option value="Ig">Ig</option>
                <option value="Ilirska Bistrica">Ilirska Bistrica</option>
                <option value="Ivančna Gorica">Ivančna Gorica</option>
                <option value="Izola-Isola">Izola-Isola</option>
                <option value="Jesenice">Jesenice</option>
                <option value="Kamnik">Kamnik</option>
                <option value="Kanal ob Soči">Kanal ob Soči</option>
                <option value="Kidričevo">Kidričevo</option>
                <option value="Kobarid">Kobarid</option>
                <option value="Kočevje">Kočevje</option>
                <option value="Koper-Capodistria">Koper-Capodistria</option>
                <option value="Kranj">Kranj</option>
                <option value="Kranjska Gora">Kranjska Gora</option>
                <option value="Krško">Krško</option>
                <option value="Laško">Laško</option>
                <option value="Lenart">Lenart</option>
                <option value="Lendava">Lendava</option>
                <option value="Litija">Litija</option>
                <option value="Ljubljana">Ljubljana</option>
                <option value="Ljutomer">Ljutomer</option>
                <option value="Log-Dragomer">Log-Dragomer</option>
                <option value="Logatec">Logatec</option>
                <option value="Lovrenc Na Pohorju">Lovrenc Na Pohorju</option>
                <option value="Maribor">Maribor</option>
                <option value="Medvode">Medvode</option>
                <option value="Mengeš">Mengeš</option>
                <option value="Metlika">Metlika</option>
                <option value="Mežica">Mežica</option>
                <option value="Miklavž na Dravskem Polju">
                  Miklavž na Dravskem Polju
                </option>
                <option value="Miren-Kostanjevica">Miren-Kostanjevica</option>
                <option value="Mislinja">Mislinja</option>
                <option value="Mozirje">Mozirje</option>
                <option value="Murska Sobota">Murska Sobota</option>
                <option value="Muta">Muta</option>
                <option value="Nova Gorica">Nova Gorica</option>
                <option value="Novo Mesto">Novo Mesto</option>
                <option value="Odranci">Odranci</option>
                <option value="Oplotnica">Oplotnica</option>
                <option value="Ormož">Ormož</option>
                <option value="Piran">Piran</option>
                <option value="Pivka">Pivka</option>
                <option value="Poljčane">Poljčane</option>
                <option value="Polzela">Polzela</option>
                <option value="Postojna">Postojna</option>
                <option value="Prebold">Prebold</option>
                <option value="Prevalje">Prevalje</option>
                <option value="Ptuj">Ptuj</option>
                <option value="Rače-Fram">Rače-Fram</option>
                <option value="Radeče">Radeče</option>
                <option value="Radenci">Radenci</option>
                <option value="Radlje Ob Dravi">Radlje Ob Dravi</option>
                <option value="Radovljica">Radovljica</option>
                <option value="Ravne na Koroškem">Ravne na Koroškem</option>
                <option value="Ribnica">Ribnica</option>
                <option value="Rogaška Slatina">Rogaška Slatina</option>
                <option value="Ruše">Ruše</option>
                <option value="Šempeter-Vrtojba">Šempeter-Vrtojba</option>
                <option value="Šenčur">Šenčur</option>
                <option value="Šentilj">Šentilj</option>
                <option value="Šentjur">Šentjur</option>
                <option value="Sevnica">Sevnica</option>
                <option value="Sežana">Sežana</option>
                <option value="Škofja Loka">Škofja Loka</option>
                <option value="Škofljica">Škofljica</option>
                <option value="Slovenj Gradec">Slovenj Gradec</option>
                <option value="Slovenska Bistrica">Slovenska Bistrica</option>
                <option value="Slovenske Konjice">Slovenske Konjice</option>
                <option value="Šoštanj">Šoštanj</option>
                <option value="Štore">Štore</option>
                <option value="Straža">Straža</option>
                <option value="Tolmin">Tolmin</option>
                <option value="Trbovlje">Trbovlje</option>
                <option value="Trebnje">Trebnje</option>
                <option value="Tržič">Tržič</option>
                <option value="Trzin">Trzin</option>
                <option value="Turnišče">Turnišče</option>
                <option value="Velenje">Velenje</option>
                <option value="Vipava">Vipava</option>
                <option value="Vodice">Vodice</option>
                <option value="Vojnik">Vojnik</option>
                <option value="Vrhnika">Vrhnika</option>
                <option value="Vuzenica">Vuzenica</option>
                <option value="Zagorje Ob Savi">Zagorje Ob Savi</option>
                <option value="Zalec">Zalec</option>
                <option value="Zelezniki">Zelezniki</option>
                <option value="Ziri">Ziri</option>
                <option value="Zrece">Zrece</option>
                <option value="Zuzemberk">Zuzemberk</option>
              </select>
            </>
          )}

          {selectedCountry === "Soudan" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Blue Nile">Blue Nile</option>
                <option value="Gedarif">Gedarif</option>
                <option value="Gezira">Gezira</option>
                <option value="Kassala">Kassala</option>
                <option value="Khartoum">Khartoum</option>
                <option value="North Darfur">North Darfur</option>
                <option value="North Kordufan">North Kordufan</option>
                <option value="Northern">Northern</option>
                <option value="Red Sea">Red Sea</option>
                <option value="River Nile">River Nile</option>
                <option value="Sennar">Sennar</option>
                <option value="South Darfur">South Darfur</option>
                <option value="South Kordufan">South Kordufan</option>
                <option value="West Darfur">West Darfur</option>
                <option value="White Nile">White Nile</option>
              </select>
            </>
          )}

          {selectedCountry === "Suède" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Comté de Blekinge">Comté de Blekinge</option>
                <option value="Comté de Värmland">Comté de Värmland</option>
                <option value="Comté de Västmanland">
                  Comté de Västmanland
                </option>
                <option value="Dalarnas län">Dalarnas län</option>
                <option value="Gavleborgs Lan">Gavleborgs Lan</option>
                <option value="Gotlands Lan">Gotlands Lan</option>
                <option value="Hallands län">Hallands län</option>
                <option value="Jamtlands Lan">Jamtlands Lan</option>
                <option value="Jonkopings Lan">Jonkopings Lan</option>
                <option value="Kalmar län">Kalmar län</option>
                <option value="Kronobergs Lan">Kronobergs Lan</option>
                <option value="Norrbottens län">Norrbottens län</option>
                <option value="Örebro län">Örebro län</option>
                <option value="Ostergotlands Lan">Ostergotlands Lan</option>
                <option value="Scanie">Scanie</option>
                <option value="Sodermanlands Lan">Sodermanlands Lan</option>
                <option value="Stockholms län">Stockholms län</option>
                <option value="Uppsala Lan">Uppsala Lan</option>
                <option value="Vasterbottens Lan">Vasterbottens Lan</option>
                <option value="Vasternorrlands Lan">Vasternorrlands Lan</option>
                <option value="Västra Götaland">Västra Götaland</option>
              </select>
            </>
          )}

          {selectedCountry === "Suisse" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Aargau">Aargau</option>
                <option value="Appenzell Ausserrhoden">
                  Appenzell Ausserrhoden
                </option>
                <option value="Appenzell Innerrhoden">
                  Appenzell Innerrhoden
                </option>
                <option value="Basel-Landschaft">Basel-Landschaft</option>
                <option value="Basel-Stadt">Basel-Stadt</option>
                <option value="Bern">Bern</option>
                <option value="Freiburg">Freiburg</option>
                <option value="Genève">Genève</option>
                <option value="Glarus">Glarus</option>
                <option value="Grigioni">Grigioni</option>
                <option value="Jura">Jura</option>
                <option value="Luzern">Luzern</option>
                <option value="Neuchâtel">Neuchâtel</option>
                <option value="Nidwalden">Nidwalden</option>
                <option value="Obwalden">Obwalden</option>
                <option value="Sankt Gallen">Sankt Gallen</option>
                <option value="Schaffhausen">Schaffhausen</option>
                <option value="Schwyz">Schwyz</option>
                <option value="Solothurn">Solothurn</option>
                <option value="Thurgau">Thurgau</option>
                <option value="Ticino">Ticino</option>
                <option value="Uri">Uri</option>
                <option value="Valais">Valais</option>
                <option value="Vaud">Vaud</option>
                <option value="Zug">Zug</option>
                <option value="Zürich">Zürich</option>
              </select>
            </>
          )}

          {selectedCountry === "Swaziland" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Hhohho">Hhohho</option>
                <option value="Lubombo">Lubombo</option>
                <option value="Manzini">Manzini</option>
                <option value="Shiselweni">Shiselweni</option>
              </select>
            </>
          )}

          {selectedCountry === "Thaïlande" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Amnat Charoen">Amnat Charoen</option>
                <option value="Ang Thong">Ang Thong</option>
                <option value="Bangkok">Bangkok</option>
                <option value="Bueng Kan">Bueng Kan</option>
                <option value="Buri Ram">Buri Ram</option>
                <option value="Chachoengsao">Chachoengsao</option>
                <option value="Chai Nat">Chai Nat</option>
                <option value="Chaiyaphum">Chaiyaphum</option>
                <option value="Chanthaburi">Chanthaburi</option>
                <option value="Chiang Mai">Chiang Mai</option>
                <option value="Chiang Rai">Chiang Rai</option>
                <option value="Chon Buri">Chon Buri</option>
                <option value="Chumphon">Chumphon</option>
                <option value="Kalasin">Kalasin</option>
                <option value="Kamphaeng Phet">Kamphaeng Phet</option>
                <option value="Kanchanaburi">Kanchanaburi</option>
                <option value="Khon Kaen">Khon Kaen</option>
                <option value="Krabi">Krabi</option>
                <option value="Lampang">Lampang</option>
                <option value="Lamphun">Lamphun</option>
                <option value="Loei">Loei</option>
                <option value="Lop Buri">Lop Buri</option>
                <option value="Mae Hong Son">Mae Hong Son</option>
                <option value="Maha Sarakham">Maha Sarakham</option>
                <option value="Mukdahan">Mukdahan</option>
                <option value="Nakhon Nayok">Nakhon Nayok</option>
                <option value="Nakhon Pathom">Nakhon Pathom</option>
                <option value="Nakhon Phanom">Nakhon Phanom</option>
                <option value="Nakhon Ratchasima">Nakhon Ratchasima</option>
                <option value="Nakhon Sawan">Nakhon Sawan</option>
                <option value="Nakhon Si Thammarat">Nakhon Si Thammarat</option>
                <option value="Nan">Nan</option>
                <option value="Narathiwat">Narathiwat</option>
                <option value="Nong Bua Lam Phu">Nong Bua Lam Phu</option>
                <option value="Nong Khai">Nong Khai</option>
                <option value="Nonthaburi">Nonthaburi</option>
                <option value="Pathum Thani">Pathum Thani</option>
                <option value="Pattani">Pattani</option>
                <option value="Phangnga">Phangnga</option>
                <option value="Phatthalung">Phatthalung</option>
                <option value="Phayao">Phayao</option>
                <option value="Phetchabun">Phetchabun</option>
                <option value="Phetchaburi">Phetchaburi</option>
                <option value="Phichit">Phichit</option>
                <option value="Phitsanulok">Phitsanulok</option>
                <option value="Phra Nakhon Si Ayutthaya">
                  Phra Nakhon Si Ayutthaya
                </option>
                <option value="Phrae">Phrae</option>
                <option value="Phuket">Phuket</option>
                <option value="Prachin Buri">Prachin Buri</option>
                <option value="Prachuap Khiri Khan">Prachuap Khiri Khan</option>
                <option value="Ranong">Ranong</option>
                <option value="Ratchaburi">Ratchaburi</option>
                <option value="Rayong">Rayong</option>
                <option value="Roi Et">Roi Et</option>
                <option value="Sa Kaeo">Sa Kaeo</option>
                <option value="Sakon Nakhon">Sakon Nakhon</option>
                <option value="Samut Prakan">Samut Prakan</option>
                <option value="Samut Sakhon">Samut Sakhon</option>
                <option value="Samut Songkhram">Samut Songkhram</option>
                <option value="Saraburi">Saraburi</option>
                <option value="Satun">Satun</option>
                <option value="Si Sa Ket">Si Sa Ket</option>
                <option value="Sing Buri">Sing Buri</option>
                <option value="Songkhla">Songkhla</option>
                <option value="Sukhothai">Sukhothai</option>
                <option value="Suphan Buri">Suphan Buri</option>
                <option value="Surat Thani">Surat Thani</option>
                <option value="Surin">Surin</option>
                <option value="Tak">Tak</option>
                <option value="Trang">Trang</option>
                <option value="Trat">Trat</option>
                <option value="Ubon Ratchathani">Ubon Ratchathani</option>
                <option value="Udon Thani">Udon Thani</option>
                <option value="Uthai Thani">Uthai Thani</option>
                <option value="Uttaradit">Uttaradit</option>
                <option value="Yala">Yala</option>
                <option value="Yasothon">Yasothon</option>
              </select>
            </>
          )}

          {selectedCountry === "Turquie" && (
            <>
              <label htmlFor="country-select">District*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Adana">Adana</option>
                <option value="Adıyaman">Adıyaman</option>
                <option value="Afyonkarahisar">Afyonkarahisar</option>
                <option value="Ağrı">Ağrı</option>
                <option value="Aksaray">Aksaray</option>
                <option value="Amasya">Amasya</option>
                <option value="Ankara">Ankara</option>
                <option value="Antalya">Antalya</option>
                <option value="Ardahan">Ardahan</option>
                <option value="Artvin">Artvin</option>
                <option value="Aydın">Aydın</option>
                <option value="Balıkesir">Balıkesir</option>
                <option value="Bartın">Bartın</option>
                <option value="Batman">Batman</option>
                <option value="Bayburt">Bayburt</option>
                <option value="Bilecik">Bilecik</option>
                <option value="Bingöl">Bingöl</option>
                <option value="Bitlis">Bitlis</option>
                <option value="Bolu">Bolu</option>
                <option value="Burdur">Burdur</option>
                <option value="Bursa">Bursa</option>
                <option value="Çanakkale">Çanakkale</option>
                <option value="Çankırı">Çankırı</option>
                <option value="Çorum">Çorum</option>
                <option value="Denizli">Denizli</option>
                <option value="Diyarbakır">Diyarbakır</option>
                <option value="Düzce">Düzce</option>
                <option value="Edirne">Edirne</option>
                <option value="Elazığ">Elazığ</option>
                <option value="Erzincan">Erzincan</option>
                <option value="Erzurum">Erzurum</option>
                <option value="Eskişehir">Eskişehir</option>
                <option value="Gaziantep">Gaziantep</option>
                <option value="Giresun">Giresun</option>
                <option value="Gümüşhane">Gümüşhane</option>
                <option value="Hakkâri">Hakkâri</option>
                <option value="Hatay">Hatay</option>
                <option value="Iğdır">Iğdır</option>
                <option value="Isparta">Isparta</option>
                <option value="İstanbul">İstanbul</option>
                <option value="İzmir">İzmir</option>
                <option value="Kahramanmaraş">Kahramanmaraş</option>
                <option value="Karabük">Karabük</option>
                <option value="Karaman">Karaman</option>
                <option value="Kars">Kars</option>
                <option value="Kastamonu">Kastamonu</option>
                <option value="Kayseri">Kayseri</option>
                <option value="Kilis">Kilis</option>
                <option value="Kırıkkale">Kırıkkale</option>
                <option value="Kırklareli">Kırklareli</option>
                <option value="Kırşehir">Kırşehir</option>
                <option value="Kocaeli">Kocaeli</option>
                <option value="Konya">Konya</option>
                <option value="Kütahya">Kütahya</option>
                <option value="Malatya">Malatya</option>
                <option value="Manisa">Manisa</option>
                <option value="Mardin">Mardin</option>
                <option value="Mersin">Mersin</option>
                <option value="Muğla">Muğla</option>
                <option value="Muş">Muş</option>
                <option value="Nevşehir">Nevşehir</option>
                <option value="Niğde">Niğde</option>
                <option value="Ordu">Ordu</option>
                <option value="Osmaniye">Osmaniye</option>
                <option value="Rize">Rize</option>
                <option value="Sakarya">Sakarya</option>
                <option value="Samsun">Samsun</option>
                <option value="Şanlıurfa">Şanlıurfa</option>
                <option value="Siirt">Siirt</option>
                <option value="Sinop">Sinop</option>
                <option value="Sivas">Sivas</option>
                <option value="Şırnak">Şırnak</option>
                <option value="Tekirdağ">Tekirdağ</option>
                <option value="Tokat">Tokat</option>
                <option value="Trabzon">Trabzon</option>
                <option value="Tunceli"></option>
                <option value="Uşak">Uşak</option>
                <option value="Van">Van</option>
                <option value="Yalova">Yalova</option>
                <option value="Yozgat">Yozgat</option>
                <option value="Zonguldak">Zonguldak</option>
              </select>
            </>
          )}

          {selectedCountry === "Uruguay" && (
            <>
              <label htmlFor="country-select">État/Région*</label>
              <select
                value={regionSelect}
                name="region-select"
                id="region-select"
                onChange={(e) => setRegionSelect(e.target.value)}
              >
                <option value="select">Sélectionnez votre État/Région</option>
                <option value="Artigas">Artigas</option>
                <option value="Canelones">Canelones</option>
                <option value="Cerro Largo">Cerro Largo</option>
                <option value="Colonia">Colonia</option>
                <option value="Durazno">Durazno</option>
                <option value="Flores">Flores</option>
                <option value="Florida">Florida</option>
                <option value="Lavalleja">Lavalleja</option>
                <option value="Maldonado">Maldonado</option>
                <option value="Montevideo">Montevideo</option>
                <option value="Paysandu">Paysandu</option>
                <option value="Rio Negro">Rio Negro</option>
                <option value="Rivera">Rivera</option>
                <option value="Rocha">Rocha</option>
                <option value="Salto">Salto</option>
                <option value="San Jose">San Jose</option>
                <option value="Soriano">Soriano</option>
                <option value="Tacuarembo">Tacuarembo</option>
                <option value="Treinta Y Tres">Treinta Y Tres</option>
              </select>
            </>
          )}

          <button
            className="btn-continue"
            type="submit"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Continuer
          </button>
        </form>
      ) : (
        !completed && (
          <div>
            <p className="infos-text">
              {firstname} {name}
            </p>
            <p className="infos-text">{company}</p>
            <p className="infos-text">{email}</p>
            <p className="infos-text">{adress}</p>
            <p className="infos-text">
              {postalCode} {city}
            </p>
            <p className="infos-text">{regionSelect}</p>
          </div>
        )
      )}
    </div>
  );
};

export default PayementForm;
