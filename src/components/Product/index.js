import React from "react";
import "./index.scss";
import ProductImage from "../../assets/product/img-bote-fresa@2x.png";
import Logo1 from "../../assets/product/img-sello-avalado@2x.png";
import Logo2 from "../../assets/product/img-100-kcal@2x.png";
import Arrow from "../../assets/product/flecha.svg";
import Fresa1 from "../../assets/Fresas/img-fresas-2@2x.png";
import Fresa2 from "../../assets/Fresas/img-fresas-5@2x.png";
import Fresa3 from "../../assets/Fresas/img-fresas-4@2x.png";
import Fresa4 from "../../assets/Fresas/img-fresas-9@2x.png";
import Fresa5 from "../../assets/Fresas/img-fresas-5@2x.png";
import Fresa6 from "../../assets/Fresas/img-fresas-6@2x.png";
import Fresa7 from "../../assets/Fresas/img-fresas-7@2x.png";
import Fresa8 from "../../assets/Fresas/img-fresas-9@2x.png";
import Fresa9 from "../../assets/Fresas/img-fresas-8@2x.png";

const Product = () => {
  return (
    <div className="Product">
      <img alt="fresa 1" className="Product__Fresa1" src={Fresa1}></img>
      <img alt="fresa 1" className="Product__Fresa2" src={Fresa2}></img>

      <img alt="fresa" className="Product__Fresa3-desk" src={Fresa3}></img>
      <img alt="fresa" className="Product__Fresa4-desk" src={Fresa4}></img>
      <img alt="fresa" className="Product__Fresa5-desk" src={Fresa5}></img>
      <img alt="fresa" className="Product__Fresa6-desk" src={Fresa6}></img>
      <img alt="fresa" className="Product__Fresa7-desk" src={Fresa7}></img>
      <img alt="fresa" className="Product__Fresa8-desk" src={Fresa8}></img>
      <img alt="fresa" className="Product__Fresa9-desk" src={Fresa9}></img>

      <div className="Product__container">
        <img src={ProductImage} className="Product__image" alt="producto" />
        <section className="Product__Contenido">
          <nav className="Product__types">
            <label className="Product__picker">Sabor:</label>
            <label className="Product__picker-selected">Fresa</label>
            <label className="Product__picker-sabor">Guayaba</label>
            <label className="Product__picker-sabor">Toronja</label>
          </nav>
          <div>
            <label className="Product__title">
              Vitalínea® Bebible Fresa 217 gr.
            </label>
            <p className="Product__description">
              ¡La presentación ideal para llevar contigo! Vitalínea bebible es
              la opción si eres de las personas que siempre están activas y
              quieren probar algo sano, rico y práctico.
            </p>
          </div>
          <div className="Product__Button">
            <button className="Product__buttonShop">Comprar en Walmart</button>
          </div>
          <div className="Product__stamp">
            <img
              src={Logo1}
              className="Product__stamp-endorse"
              alt="logo1"
            ></img>
            <img
              src={Logo2}
              className="Product__stamp-noSugar"
              alt="logo1"
            ></img>
          </div>
          <div className="Product__arrow">
            <img src={Arrow} alt="flecha" className="Product__arrow-img"></img>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product;
