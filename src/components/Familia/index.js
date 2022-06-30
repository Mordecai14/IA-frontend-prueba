import React from "react";
import "./index.scss";
import Griego from "../../assets/familia/img-vitalinea-griego@2x.png";
import SnAzucar from "../../assets/familia/img-vitalinea-sin-azucar@2x.png";
import Bebible from "../../assets/familia/img-vitalinea-bebible@2x.png";

const Familia = () => {
  return (
    <>
      <section className="Familia__Container">
        <div className="Familia__Contenido">
          <div className="Familia__Title">
            <label>LA FAMILIA VITALÍNEA</label>
          </div>
          <div className="Familia__Slides">
            <div className="Familia__Slides-card">
              <img
                className="Familia__Slides-griegoImg"
                alt="griego"
                src={Griego}
              ></img>
              <label>Vitalínea Griego</label>
            </div>

            <div className="Familia__Slides-card">
              <img
                className="Familia__Slides-griegoImg"
                id="griegoImg__sinAzucar"
                alt="griego"
                src={SnAzucar}
              ></img>
              <label>Vitalínea sin Azúcar</label>
            </div>

            <div className="Familia__Slides-card">
              <img
                className="Familia__Slides-griegoImg"
                id="griegoImg__bebible"
                alt="griego"
                src={Bebible}
              ></img>
              <label>Vitalínea Bebible</label>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Familia;
