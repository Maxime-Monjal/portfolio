import React from "react";
import style from "./CardFormation.module.css";

function CardFormation({ formation }) {
  const { name, description } = formation;
  return (
    <div className={style.CardFormation}>
      <h4 className={style.title}>{name}</h4>
      <p className={style.description}>{description}</p>
    </div>
  );
}

export default CardFormation;
