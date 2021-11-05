import React from "react";
import CardProjet from "./CardProjet";
import style from "./Projets.module.css";
import vueMovie from "../../image/Projet/vue_movie.png";
import magicpills from "../../image/Projet/magicpills.png";
import newHasBin from "../../image/Projet/new_has_bin.png";
import player from "../../image/Projet/player_wild.png";
import portfolio from "../../image/Projet/portfolio.png";
import epic from "../../image/Projet/epic_recipe.png";

function Projets() {
  const projet = [
    {
      name: "Vue Movie (en cours)",
      image: vueMovie,
      description:
        "Qu'allez-vous regarder comme film ce soir ? Vue Movie a pour but de résoudre ce problème. Vous avez une description détaillée d'une multitude de films. Lorsque vous cliquez sur un film vous avez la possibilité de voir des films similaires. Tous ces films sont récupéré via l'API The Movie DB (TMDB). Ce projet est en cours de construction. ",
      tech: "Vue, Axios, TailwindCSS, Node/Express, Netlify, Heroku, API",
      intervenant: "En autonomie",
      link: "https://vue-movie-max.netlify.app/",
      repoGit: "https://github.com/Maxime-Monjal/vue-movie",
    },
    {
      name: "Magic Pills",
      image: magicpills,
      description:
        "Voici le résultat d'un Hackathon de 72h. Le thème était de créer un site e-commerce original et fun avec un très bon référencement, on a donc opté pour un site vendant des super pouvoirs. On a eu la chance d'avoir les conseils de l'entreprise Search Foresight, spécialisée en SEO. Nous avons été nommés vainqueurs du campus de Nantes !",
      tech: "React, Node, Express, Mysql",
      intervenant: "En équipe de 5 personnes",
      link: "https://magicpills.netlify.app/",
      repoGit: "https://github.com/loicbdev/super-pouvoir-react-jwt",
    },
    {
      name: "The New Has-Bin",
      image: newHasBin,
      description:
        "Ce site a pour objectif de rendre le recyclage ludique. Vous pouvez accepter ou non des missions pour gagner des points. Nous avons utilisé 3 APIs de Nantes, le localStorage pour la partie profil et Leaflet pour la carte. The New Has-Bin, c'est l'art de recycler en s'amusant ! Ps: Sauvez la planète, jouez à the New Has-Bin !",
      tech: "React",
      intervenant: "En équipe de 5 personnes",
      link: "https://new-has-bin.netlify.app/",
      repoGit: "https://github.com/WildCodeSchool/nts-js-202009-p2-recyclage",
    },
    {
      name: "Player Wild",
      image: player,
      description:
        "Pour ce premier projet réalisé en équipe, le seul impératif était de rendre ce site responsive, pour le reste nous avions carte blanche pour le thème. Étant tous passionnés de jeux, le choix s'est fait naturellement. Player Wild est donc un site d'avis de passionnés de jeux de société ! Nous avions 10 jours pour mener à bien ce projet.",
      tech: "HTML, CSS, Javascript",
      intervenant: "En équipe de 4 personnes",
      link: "https://maxime-monjal.github.io/Player-wild/",
      repoGit: "https://github.com/Maxime-Monjal/Player-wild",
    },
    {
      name: "Mon Premier Portfolio",
      image: portfolio,
      description:
        "Mon premier portfolio est inspiré de Matt Farley. Je l'ai réalisé au tout début de ma formation à la Wild Code School de Nantes. Cela m'a permis de mettre en pratique mes connaissances en HTML, CSS et Javascript. J'ai notamment porté une attention toute particulière à la partie responsive du site.",
      tech: "HTML, CSS, Javascript",
      intervenant: "En autonomie",
      link: "https://maxime-monjal.github.io/CV/",
      repoGit: "https://github.com/Maxime-Monjal/CV",
    },
    {
      name: "Epic-Recipe",
      image: epic,
      description:
        "Epic-Recipe est l'aboutissement d'un Hackathon de 24 heures. La thématique était de réaliser un site en rapport avec une époque particulière. Nous avons décidé de choisir le Moyen Âge et de créer un jeu de troc avec un tavernier fort sympathique ! Il est jouable seulement en version desktop.",
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
