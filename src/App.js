import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { React, useState } from "react";

// import artits
import Mezur from "./pages/Mezur";
import Berlan from "./pages/Berlan";
import Degy from "./pages/Degy";
import DrRMrM from "./pages/DrRMrM";
import EvilVenom from "./pages/EvilVenom";
import Lascaride from "./pages/Lascaride";
import LesAlphas from "./pages/LesAlphas";
import Maelyss from "./pages/Maelyss";
import Oner from "./pages/Oner";
import SafNoruff from "./pages/SafNoruff";
import ScamLeon from "./pages/ScamLeon";
import Skiizo from "./pages/Skiizo";
import Slim from "./pages/Slim";

// import pages
import Realisations from "./pages/Realisations";
import News from "./pages/News";
import Artists from "./pages/Artists";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Studio from "./pages/Studio";
import Store from "./pages/Store";
import Signup from "./pages/Signup";
import Reservation from "./pages/Reservation";
import InfoRecording from "./pages/InfoRecording";
import InfoMix from "./pages/InfoMix";
import InfoDistanceMix from "./pages/InfoDistanceMix";
import InfoMastering from "./pages/InfoMastering";
import BookRecording from "./pages/BookRecording";
import BookRecordingForm from "./pages/BookRecordingForm";
import Project from "./pages/Project";
import Packs from "./pages/packs";
import Goodies from "./pages/goodies";
import CartPage from "./pages/cartPage";
import CheckOut from "./pages/checkOut";

// import components
import Footer from "./components/Footer";
import Header from "./components/Header";
import MenuBurger from "./components/MenuBurger";
import CartModal from "./components/CartModal";

function App() {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [displayCart, setDisplayCart] = useState(false);
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [cart, setCart] = useState([]);
  const [selectedColor, setSelectedColor] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessage2, setErrorMessage2] = useState("");

  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("GRATUIT");
  const [adress, setAdress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [regionSelect, setRegionSelect] = useState("");
  const [shipping, setShipping] = useState(0);
  const [edit, setEdit] = useState(true);
  const [edit2, setEdit2] = useState(true);
  const [edit3, setEdit3] = useState(true);
  const [tva, setTva] = useState(0);
  const [isFixed, setIsFixed] = useState(true);

  const [emailError, setEmailError] = useState("");
  const [firstnameError, setFirstnameError] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [subTotal, setSubTotal] = useState(0);
  const [totalExpedition, setTotalExpedition] = useState(0);
  const [total, setTotal] = useState(0);
  const [completed, setCompleted] = useState(false);

  const setUser = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("token", token, { expires: 7 });
    } else {
      setToken(null);
      Cookies.remove("token");
    }
  };

  const albumAddToCart = (album) => {
    const newCart = [...cart];
    const albumPresent = newCart.find((elem) => elem.id === album.id);
    if (albumPresent) {
      albumPresent.quantity++;
    } else {
      newCart.push({ ...album, quantity: 1 });
    }
    setCart(newCart);
  };

  const itemsAddToCart = (item) => {
    const newCart = [...cart];
    const itemPresent = newCart.find((elem) => elem.id === item.id);
    if (!selectedColor) {
      setErrorMessage("Veuillez sélectionner une couleur :");
      setDisplayCart(false);
    }
    if (!selectedSize) {
      setErrorMessage2("Veuillez sélectionner une taille :");
      setDisplayCart(false);
    }

    if (itemPresent) {
      itemPresent.quantity++;
    } else if (selectedColor && selectedSize) {
      newCart.push({ ...item, quantity: 1 });
    }
    setCart(newCart);
  };

  const albumRemoveFromCart = (album) => {
    const newCart = [...cart];
    const albumPresent = newCart.find((elem) => elem.id === album.id);
    if (albumPresent.quantity === 1) {
      const index = newCart.indexOf(albumPresent);
      newCart.splice(index, 1);
    } else {
      albumPresent.quantity--;
    }
    setCart(newCart);
  };

  const albumTrashFromCart = (album) => {
    const newCart = [...cart];

    const albumPresent = newCart.find((elem) => elem.id === album.id);
    if (albumPresent) {
      // Je cherche l'index de l'objet dans mon mon tableau
      const index = newCart.indexOf(albumPresent);
      // console.log(index);
      newCart.splice(index, 1);
    }
    setCart(newCart);
  };

  return (
    <Router>
      <Header
        cart={cart}
        setCart={setCart}
        displayMenu={displayMenu}
        setDisplayMenu={setDisplayMenu}
        setUser={setUser}
        token={token}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signup"
          element={<Signup setUser={setUser} token={token} />}
        />
        <Route
          path="/login"
          element={<Login setUser={setUser} token={token} />}
        />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artist/2mezur" element={<Mezur />} />
        <Route path="/artist/berlan" element={<Berlan />} />
        <Route path="/artist/degy" element={<Degy />} />
        <Route path="/artist/docrmisterm" element={<DrRMrM />} />
        <Route path="/artist/evilvenom" element={<EvilVenom />} />
        <Route path="/artist/lascaride" element={<Lascaride />} />
        <Route path="/artist/lesalphas" element={<LesAlphas />} />
        <Route path="/artist/maelyss" element={<Maelyss />} />
        <Route path="/artist/oner" element={<Oner />} />
        <Route path="/artist/safnoruff" element={<SafNoruff />} />
        <Route path="/artist/scamleon" element={<ScamLeon />} />
        <Route path="/artist/skiizo" element={<Skiizo />} />
        <Route path="/artist/slim" element={<Slim />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/news" element={<News />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/studio/reservation" element={<Reservation />} />
        <Route path="/informations/recording" element={<InfoRecording />} />
        <Route path="/informations/mix" element={<InfoMix />} />
        <Route
          path="/informations/mixadistance"
          element={<InfoDistanceMix />}
        />
        <Route path="/informations/mastering" element={<InfoMastering />} />
        <Route path="/booking/enregistrement" element={<BookRecording />} />
        <Route
          path="/booking/enregistrement/formulaire"
          element={<BookRecordingForm setUser={setUser} token={token} />}
        />
        <Route
          path="/store"
          element={
            <Store
              albumAddToCart={albumAddToCart}
              cart={cart}
              setCart={setCart}
              displayCart={displayCart}
              setDisplayCart={setDisplayCart}
            />
          }
        />
        <Route
          path="/store/projects/:id"
          element={
            <Project
              albumAddToCart={albumAddToCart}
              cart={cart}
              setCart={setCart}
              displayCart={displayCart}
              setDisplayCart={setDisplayCart}
            />
          }
        />
        <Route
          path="/store/packs/:id"
          element={
            <Packs
              itemsAddToCart={itemsAddToCart}
              cart={cart}
              setCart={setCart}
              displayCart={displayCart}
              setDisplayCart={setDisplayCart}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
              errorMessage2={errorMessage2}
              setErrorMessage2={setErrorMessage2}
            />
          }
        />
        <Route
          path="/store/goodies/:id"
          element={
            <Goodies
              itemsAddToCart={itemsAddToCart}
              cart={cart}
              setCart={setCart}
              displayCart={displayCart}
              setDisplayCart={setDisplayCart}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
              errorMessage2={errorMessage2}
              setErrorMessage2={setErrorMessage2}
            />
          }
        />
        <Route
          path="/cart-page"
          element={
            <CartPage
              albumTrashFromCart={albumTrashFromCart}
              albumAddToCart={albumAddToCart}
              albumRemoveFromCart={albumRemoveFromCart}
              cart={cart}
              setCart={setCart}
              setDisplayCart={setDisplayCart}
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
              shipping={shipping}
              setShipping={setShipping}
              subTotal={subTotal}
              setSubTotal={setSubTotal}
              totalExpedition={totalExpedition}
              setTotalExpedition={setTotalExpedition}
              total={total}
              setTotal={setTotal}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <CheckOut
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
              setSubTotal={setSubTotal}
              totalExpedition={totalExpedition}
              setTotalExpedition={setTotalExpedition}
              total={total}
              setTotal={setTotal}
              completed={completed}
              setCompleted={setCompleted}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      {displayMenu && <MenuBurger setDisplayMenu={setDisplayMenu} />}
      {displayCart && (
        <CartModal
          albumTrashFromCart={albumTrashFromCart}
          albumAddToCart={albumAddToCart}
          albumRemoveFromCart={albumRemoveFromCart}
          cart={cart}
          setCart={setCart}
          setDisplayCart={setDisplayCart}
        />
      )}
    </Router>
  );
}

export default App;
