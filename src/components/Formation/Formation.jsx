import React from "react";
import CardFormation from "./CardFormation";
import Certification from "./Certification";
import style from "./Formation.module.css";

function Formation() {
  const formations = [
    {
      name: "Wild Code School | 2020",
      description: "HTML | CSS | Javascript | React | Nodejs",
    },
    {
      name: "Retravailler dans l'Ouest | 2014",
      description: "Orientation dédiée à la filière de la vente",
    },
    {
      name: "DAEU A | 2013",
      description: "Équivalent bac",
    },
    {
      name: "CAP Mécanique Automobile | 2007-2009",
      description: "En apprentissage à la Mairie de Saumur",
    },
    {
      name: "SSL Saumur | 2004-2008",
      description: "Basket-ball en club et en section sportive au collège",
    },
  ];

  const certifications = [
    {
      name: "Free Code Camp",
      description: "Responsive Web Design (HTML, CSS, Flexbox, CSS Grid)",
      link: "https://maxime-monjal.github.io/CV/images/certifications/freecodecamp.png",
    },
    {
      name: "Google Ateliers Numériques",
      description: "Les principes fondamentaux du marketing numérique",
      link: "https://maxime-monjal.github.io/CV/images/certifications/Google%20ateliers%20num%C3%A9rique.png",
    },
  ];
  return (
    <div className={style.FormationParalax} id="Formation">
      <div className={style.Formation}>
        <h2 className={style.titleFormation}>Formations</h2>

        {formations.map((formation) => (
          <CardFormation formation={formation} key={formation.name} />
        ))}
        <h2 className={style.titleCertif}>Certifications</h2>
        {certifications.map((certification) => (
          <Certification
            certification={certification}
            key={certification.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Formation;
