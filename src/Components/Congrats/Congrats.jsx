import React from "react";
import imagen from "../../assets/congratulations.png";
import './Congrats.css'

export const Congrats = (gi) => {
  return (
    <div className="congratsContainer">
      <div className="congratsImg">
        <img className="img-congrats" src={imagen} alt="congratulations" />
      </div>
      <div className="congratsText">
        <h1 className="congratsText1">¡ Enhorabuena !</h1>
        <p className="congratsText2">Acabas de registrarte en meettalent</p>
        <button className="button-white">Comenzar</button>
      </div>
    </div>
  );
};
