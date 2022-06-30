import React from "react";
import "./index.scss";

const Hamburguer = ({ Click, RiveComponent, onClickInput }) => {
  return (
    <div className="whiteBurguer" onClick={Click}>
      <RiveComponent
        style={{ cursor: "pointer" }}
        onClick={() => onClickInput.fire()}
      />
    </div>
  );
};

export default Hamburguer;
