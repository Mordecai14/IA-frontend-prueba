import React from "react";
import "./index.scss";
import Danone from "../../assets/footer/img-logo-danone@2x.png";
import LogoVita from "../../assets/footer/img-logo-footer@2x.png";

const Footer = () => {
  return (
    <>
      <footer className="Footer__Container">
        <div className="Footer__Logos">
          <img className="Footer__Logos-danone" alt="logo" src={Danone}></img>
          <img className="Footer__Logos-vita" alt="logo" src={LogoVita}></img>
        </div>
        <div className="Footer__Content">
          <p>
            Términos y condiciones| Políticas de privacidad | Aviso de
            privacidad
            <br />
            Danone de México 2017 ©. Todos los derechos reservados <br />
            2017
          </p>
        </div>
      </footer>

      <footer className="Footer__Desk">
        <div className="FooterDesk__Left">
          <img className="Footer__Logos-danone" alt="logo" src={Danone}></img>
          <div className="Footer__Content">
            <p>
              Términos y condiciones| Políticas de privacidad | Aviso de
              privacidad
              <br />
              <br />
              Danone de México 2017 ©. Todos los derechos reservados 2017
            </p>
          </div>
        </div>
        <div className="FooterDesk__Right">
          <img className="Footer__Logos-vita" alt="logo" src={LogoVita}></img>
        </div>
      </footer>
    </>
  );
};

export default Footer;
