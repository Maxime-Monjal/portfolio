import React from "react";
import CardProjet from "./CardProjet";
import style from "./Projets.module.css";
import newHasBin from "../../image/Projet/new_has_bin.png";
import player from "../../image/Projet/player_wild.png";
import portfolio from "../../image/Projet/portfolio.png";
import epic from "../../image/Projet/epic_recipe.png";

function Projets() {
  const projet = [
    {
      name: "The New Has-Bin",
      image: newHasBin,
      description:
        "The New Has-Bin est l'art de recycler en s'amusant ! Ps: Sauver la planète, jouer à the new Has-Bin !",
      link: "https://new-has-bin.netlify.app/",
      repoGit: "https://github.com/WildCodeSchool/nts-js-202009-p2-recyclage",
    },
    {
      name: "Player Wild",
      image: player,
      description:
        "Player Wild c'est un site d'avis de passionnés de jeu de société !",
      link: "https://maxime-monjal.github.io/Player-wild/",
      repoGit: "https://github.com/Maxime-Monjal/Player-wild",
    },
    {
      name: "Mon Premier Portfolio",
      image: portfolio,
      description: "Mon premier portfolio inspiré de Matt farley.",
      link: "https://maxime-monjal.github.io/CV/",
      repoGit: "https://github.com/Maxime-Monjal/CV",
    },
    {
      name: "Epic-Recipes",
      image: epic,
      description: "Hackathon de 24 heures réalisé en équipe de 5 personnes.",
      link: "https://epic-recipe.netlify.app/",
      repoGit: "https://github.com/Maxime-Monjal/epic-recip",
    },
  ];
  return (
    <section className={style.Projets} id="Projets">
      <h2 className={style.titleProjet}>Projets</h2>
      <div className={style.container}>
        {projet.map((carteprojet) => (
          <CardProjet carteprojet={carteprojet} key={carteprojet.name} />
        ))}
      </div>
    </section>
  );
}

export default Projets;
