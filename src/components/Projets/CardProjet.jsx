import React, { useEffect } from "react";
import style from "./CardProjet.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function CardProjet({ carteprojet }) {
  const {
    link,
    name,
    image,
    description,
    tech,
    intervenant,
    repoGit,
  } = carteprojet;
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className={style.CardProjet}
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <h3 className={style.name}>{name}</h3>
      <div className={style.image}>
        <a href={link}>
          <img className={style.img} src={image} alt={name} />
        </a>
      </div>
      <div className={style.infos}>
        <h5 className={style.titleDescription}>Description du projet</h5>
        <p className={style.pDescription}>{description}</p>
        <h5 className={style.titleDescription}>Technologie utilisé</h5>
        <p className={style.pIntervenant}>{tech}</p>
        <h5 className={style.titleDescription}>Réalisé</h5>
        <p className={style.pIntervenant}>{intervenant}</p>
        <div>
          <a className={style.linkGit} href={repoGit}>
            Voir le repository Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardProjet;
