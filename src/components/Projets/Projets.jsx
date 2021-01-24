import React from "react";
import CardProjet from "./CardProjet";
import style from "./Projets.module.css";
import magicpills from "../../image/Projet/magicpills.png";
import newHasBin from "../../image/Projet/new_has_bin.png";
import player from "../../image/Projet/player_wild.png";
import portfolio from "../../image/Projet/portfolio.png";
import epic from "../../image/Projet/epic_recipe.png";

function Projets() {
  const projet = [
    {
      name: "Magic Pills",
      image: magicpills,
      description:
        "Hackathon de 72h avec l'entreprise Search Foresight spécialisée en SEO. Vainqueur du campus de Nantes !",
      tech: "React, Node, Express, Mysql",

      intervenant: "En équipe de 5 personnes",
      link: "https://magicpills.netlify.app/",
      repoGit: "https://github.com/loicbdev/super-pouvoir-react-jwt",
    },
    {
      name: "The New Has-Bin",
      image: newHasBin,
      description:
        "The New Has-Bin est l'art de recycler en s'amusant ! Ps: Sauvez la planète, jouez à the New Has-Bin !",
      tech: "React",
      intervenant: "En équipe de 5 personnes",
      link: "https://new-has-bin.netlify.app/",
      repoGit: "https://github.com/WildCodeSchool/nts-js-202009-p2-recyclage",
    },
    {
      name: "Player Wild",
      image: player,
      description:
        "Player Wild c'est un site d'avis de passionnés de jeux de société !",
      tech: "HTML, CSS, Javascript",
      intervenant: "En équipe de 4 personnes",
      link: "https://maxime-monjal.github.io/Player-wild/",
      repoGit: "https://github.com/Maxime-Monjal/Player-wild",
    },
    {
      name: "Mon Premier Portfolio",
      image: portfolio,
      description: "Mon premier portfolio inspiré de Matt Farley.",
      tech: "HTML, CSS, Javascript",
      intervenant: "Seul",
      link: "https://maxime-monjal.github.io/CV/",
      repoGit: "https://github.com/Maxime-Monjal/CV",
    },
    {
      name: "Epic-Recipes",
      image: epic,
      description: "Hackathon de 24 heures.",
      tech: "React",
      intervenant: "En équipe de 5 personnes",
      link: "https://epicrecip.netlify.app/",
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
