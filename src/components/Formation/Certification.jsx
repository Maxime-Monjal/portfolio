import React from "react";
import style from "./Certification.module.css";

function Certification({ certification }) {
  const { name, description, link } = certification;
  return (
    <div className={style.Certification}>
      <h4 className={style.title}>{name}</h4>
      <p className={style.description}>{description}</p>
      <a className={style.linkCertif} href={link}>
        Voir la certification
      </a>
    </div>
  );
}

export default Certification;
