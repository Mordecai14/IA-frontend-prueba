import React from "react";
import "./index.scss";
import Fresa1 from "../../assets/Fresas/img-fresas-6@2x.png";
import Fresa2 from "../../assets/Fresas/img-fresas-7@2x.png";

const Information = () => {
  return (
    <>
      <div className="Container__Info">
        <img alt="fresa 1" className="Info__Fresa1" src={Fresa1}></img>
        <img alt="fresa 1" className="Info__Fresa2" src={Fresa2}></img>
        <label className="Info__Title">Información nutrimental</label>
        <div className="Info__Content">
          <p>
            <strong>
              Vitalínea® Bebible Guayaba 217gr
              <br />
              Valor promedio por porción de 217gr
              <br />
              Porciones por envase: 1
            </strong>
          </p>
        </div>
        <div>
          <p className="Info__Description-description">
            <strong>Ingredientes:</strong> <br />
            Leche descremada pasteurizada y/o reconstituida pasteurizada de
            vaca. 3.5% preparado de fruta guayaba (acesulfame K y sucralosa
            (27.2mg/100g)), crema, almidón modificado, maltodextrina y cultivos
            lácticos.
          </p>
        </div>

        <div className="Info__Table">
          <table className="Info__Table-tabla">
            <tr>
              <td> Contenido energético kJ/kcal</td>
              <td> 413,2/97,9</td>
            </tr>
            <tr>
              <td>Proteínas (g) </td>
              <td>5.3</td>
            </tr>
            <tr>
              <td>Grasas (lípidos) (g)</td>
              <td>2.1</td>
            </tr>
            <tr>
              <td>Grasas saturadas (g)</td>
              <td>1.4</td>
            </tr>
            <tr>
              <td>Carbohidratos (Hidratos de carbono) (g) </td>
              <td>12.4</td>
            </tr>
            <tr>
              <td>Azúcares (g)</td>
              <td>7.7</td>
            </tr>
            <tr>
              <td>Azúcares añadidos (g) </td>
              <td>0.1</td>
            </tr>
            <tr>
              <td>Fibra dietética (g) </td>
              <td>0.0</td>
            </tr>
            <tr>
              <td>Sodio (mg)</td>
              <td>92.7</td>
            </tr>
            <tr>
              <td>Calcio (mg)</td>
              <td>199.6</td>
            </tr>
            <tr>
              <td>%VNR*</td>
              <td>22</td>
            </tr>
            <tr></tr>
          </table>
        </div>
      </div>

      <div className="Info__Desk">
        <label className="Info__Title">Información nutrimental</label>

        <section className="InfoDesk__Container">
          <div className="InfoDesk__Left">
            <div className="Info__Content">
              <p>
                <strong>
                  Vitalínea® Bebible Guayaba 217gr
                  <br />
                  Valor promedio por porción de 217gr
                  <br />
                  Porciones por envase: 1
                </strong>
              </p>
            </div>
            <div>
              <p className="Info__Description-description">
                <strong>Ingredientes:</strong> <br />
                Leche descremada pasteurizada y/o reconstituida pasteurizada de
                vaca. 3.5% preparado de fruta guayaba (acesulfame K y sucralosa
                (27.2mg/100g)), crema, almidón modificado, maltodextrina y
                cultivos lácticos.
              </p>
            </div>
          </div>
          <div className="InfoDesk_Right">
            <div className="Info__Table">
              <table className="Info__Table-tabla">
                <tr>
                  <td> Contenido energético kJ/kcal</td>
                  <td> 413,2/97,9</td>
                </tr>
                <tr>
                  <td>Proteínas (g) </td>
                  <td>5.3</td>
                </tr>
                <tr>
                  <td>Grasas (lípidos) (g)</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>Grasas saturadas (g)</td>
                  <td>1.4</td>
                </tr>
                <tr>
                  <td>Carbohidratos (Hidratos de carbono) (g) </td>
                  <td>12.4</td>
                </tr>
                <tr>
                  <td>Azúcares (g)</td>
                  <td>7.7</td>
                </tr>
                <tr>
                  <td>Azúcares añadidos (g) </td>
                  <td>0.1</td>
                </tr>
                <tr>
                  <td>Fibra dietética (g) </td>
                  <td>0.0</td>
                </tr>
                <tr>
                  <td>Sodio (mg)</td>
                  <td>92.7</td>
                </tr>
                <tr>
                  <td>Calcio (mg)</td>
                  <td>199.6</td>
                </tr>
                <tr>
                  <td>%VNR*</td>
                  <td>22</td>
                </tr>
                <tr></tr>
              </table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Information;
