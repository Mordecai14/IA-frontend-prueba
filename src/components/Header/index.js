import "./index.scss";
import React, { useState } from "react";
import { useRive, useStateMachineInput } from "rive-react";
import Hamburguer from "../Hamburguer/Hamburguer";
import Logo from "../../assets/header/img-logo-vitalinea@2x.png";
import Menu from "./Menu";
import Facebook from "../../assets/header/img-social-facebook.svg";
import IG from "../../assets/header/img-social-instagram.svg";
import Youtube from "../../assets/header/img-social-youtube.svg";

const Header = () => {
  const [Switch, setSwitch] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const STATE_MACHINE_NAME = "Basic State Machine";
  const INPUT_NAME = "Switch";
  const { rive, RiveComponent } = useRive({
    src: "/whiteburger.riv",
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  });
  const onClickInput = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    INPUT_NAME
  );
  const handleSwitch = () => {
    setSwitch(!Switch);
    onClickInput.fire();
    setShowBurgerMenu(!showBurgerMenu);
  };

  const handleCloseMenu = () => {
    // setShowBurgerMenu(!showBurgerMenu);
    handleSwitch();
  };

  return (
    <>
      <Menu isShowing={showBurgerMenu} onClose={handleCloseMenu} />
      <div className={`Header__Container`}>
        {/* <div className={showBurgerMenu ? "Header__Hidden" : "Header__Container"}> */}
        <img className="Header__Logo" alt="logo" src={Logo}></img>
        <div className="Header__Burguer">
          <Hamburguer
            Click={handleSwitch}
            onClickInput={onClickInput}
            RiveComponent={RiveComponent}
          />
        </div>

        <div className="Header__DeskContainer">
          <label>Nuestros productos</label>
          <label>Disfruta cuidarte</label>
          <label className="HeaderDesk__link">Blog</label>
          <img className="HeaderDesk__Img" alt="facebook" src={Facebook}></img>
          <img className="HeaderDesk__Img" alt="facebook" src={IG}></img>
          <img className="HeaderDesk__Img" alt="facebook" src={Youtube}></img>
        </div>
      </div>
    </>
  );
};

export default Header;
