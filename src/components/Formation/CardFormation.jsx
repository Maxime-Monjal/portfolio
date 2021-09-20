import React, { useEffect } from "react";
import style from "./CardFormation.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function CardFormation({ formation }) {
  const { name, description } = formation;
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className={style.CardFormation}
      data-aos="zoom-out"
      data-aos-duration="1000"
    >
      <h4 className={style.title}>{name}</h4>
      <p className={style.description}>{description}</p>
    </div>
  );
}

export default CardFormation;
