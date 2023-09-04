import "../css/footer.css";
import React from "react";
import { Link } from "react-router-dom";

import youtube from "../images/youtube.png";
import instagram from "../images/instagram.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";

const Footer = () => {
  return (
    <div className="all-footer">
      <div className="container txt-footer">
        <p className="footer-tittle">ANONYMOUS LABEL</p>
        <p className="footer-baseline">Développement d'artistes</p>
        <p>Les Lilas 93260</p>
        <p>
          <a
            className="email-footer"
            href="mailto:contactanonymouslabel@gmail.com"
          >
            contactanonymouslabel@gmail.com
          </a>
        </p>
        <p>06 14 47 13 58</p>

        <div className="network-logos">
          <Link
            to="https://www.youtube.com/channel/UCvESjnkNe9EFwqvOukAdTwQ"
            target="_blank"
          >
            <img src={youtube} alt="logo youtube" />
          </Link>
          <Link
            to="https://instagram.com/anonymous_label?igshid=YmMyMTA2M2Y="
            target="_blank"
          >
            <img src={instagram} alt="logo instagram" />
          </Link>
          <Link to="https://www.facebook.com/anonymouslabel" target="_blank">
            <img src={facebook} alt="logo facebook" />
          </Link>
          <Link to="https://twitter.com/LabelAnonymous?s=04" target="_blank">
            <img src={twitter} alt="logo twitter" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
