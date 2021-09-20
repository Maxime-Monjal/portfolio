import React, { useEffect } from "react";
import style from "./Certification.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Certification({ certification }) {
  const { name, description, link } = certification;
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className={style.Certification}
      data-aos="zoom-out"
      data-aos-duration="1000"
    >
      <h4 className={style.title}>{name}</h4>
      <p className={style.description}>{description}</p>
      <a className={style.linkCertif} href={link}>
        Voir la certification
      </a>
    </div>
  );
}

export default Certification;
