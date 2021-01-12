import React from "react";
import style from "./Skills.module.css";
import sql from "../../image/icons/mysql-logo.svg";
import css from "../../image/icons/css-3.svg";
import html from "../../image/icons/html5.svg";
import js from "../../image/icons/javascript.png";
import node from "../../image/icons/nodeJS.png";
import react from "../../image/icons/react.png";

function Skills() {
  return (
    <section className={style.Skills} id="Skills">
      <div className={style.paralax}>
        <div className={style.container}>
          <h2 className={style.titleSkills}>Compétences</h2>
          <div className={style.img}>
            <img className={style.css} src={css} alt="css3" />
            <img className={style.html} src={html} alt="html" />
            <img className={style.js} src={js} alt="javascript" />
            <img className={style.react} src={react} alt="react" />
            <img className={style.node} src={node} alt="node" />
            <img className={style.mysql} src={sql} alt="mysql" />
          </div>
          <h3 className={style.wild}>Wild code school</h3>
          <p className={style.descriptionWild}>
            5 mois (700h) de formation à la Wild Code School de Nantes, 4 mois
            de stage (du 15 février au 11 juin 2021), 3 projets + 2 hackathons
            et 257 thé vert 🍵.
          </p>
          <a
            className={style.wildLien}
            href="https://www.wildcodeschool.com/fr-FR/formations/developpeur-web?campus=nantes"
          >
            Le site de la Wild
          </a>
        </div>
      </div>
    </section>
  );
}

export default Skills;
