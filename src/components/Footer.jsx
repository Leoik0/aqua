import React from "react";
import "./Footer.css";
import Pix from "../assets/pix.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fot-box">
        <div className="map-footer">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.265096502104!2d-51.07313576642273!3d-30.004059102563218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519743d2d7125%3A0xc2fd3b2f1a33302!2sR.%20E%C3%A7a%20de%20Queir%C3%B3s%20-%20Maring%C3%A1%2C%20Alvorada%20-%20RS!5e0!3m2!1spt-BR!2sbr"
            width="250"
            height="250"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="fot-content">
          <img className="pix" src={Pix} alt="" />

          <div className="footer-links">
            <a href="#">Home</a>
            <a href="#">Serviços</a>
            <a href="#">Galeria</a>
            <a href="#">Contato</a>
          </div>

          <div className="footer-contacts">
            <div className="fot icon1">
              <a href="#" className="fot1 contact">
                <FontAwesomeIcon icon={faArrowUp} />
              </a>
            </div>
            <div className="fot icon2">
              <a
                href="https://api.whatsapp.com/send?phone=555193518729"
                className="fot1 contact"
              >
                <FontAwesomeIcon icon={faPhone} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="copy">
        <p>&copy; 2023 - Aqua Lavagem</p>
      </div>
    </div>
  );
};

export default Footer;
