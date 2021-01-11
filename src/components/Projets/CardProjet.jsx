import React from "react";
import style from "./CardProjet.module.css";

function CardProjet({ carteprojet }) {
  const { link, name, image, description, repoGit } = carteprojet;
  return (
    <div className={style.CardProjet}>
      <h3 className={style.name}>{name}</h3>
      <div className={style.image}>
        <a href={link}>
          <img className={style.img} src={image} alt={name} />
        </a>
      </div>
      <div className={style.infos}>
        <h5 className={style.titleDescription}>Description du projet:</h5>
        <p className={style.pDescription}>{description}</p>
        <div>
          <a className={style.linkGit} href={repoGit}>
            Voir le repository Github.
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardProjet;
