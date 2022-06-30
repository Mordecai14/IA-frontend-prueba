import React from "react";
import "./Menu.scss";

const Menu = (props) => {
  return (
    <div className="Menu">
      <div
        className="Menu__Container"
        style={{ height: props.isShowing ? "100vh" : "0" }}
      >
        {/* <div className="Menu__Contenido">Menu {":)"}</div> */}
      </div>
    </div>
  );
};

export default Menu;
