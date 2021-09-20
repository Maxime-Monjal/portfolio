import React, { useEffect } from "react";
import style from "./Skills.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className={style.Skills} id="Skills">
      <div className={style.paralax}>
        <div
          className={style.container}
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <h2 className={style.titleSkills}>Compétences</h2>
          <div className={style.descriptionWild}>
            <p>
              Après 5 mois(700h) de formation à la Wild Code School de Nantes (3
              projets + 2 hackathons) et 4 mois de stage chez{" "}
              <a href="https://www.neuron-partners.fr/">Neuron Partners</a>,
            </p>
            <p>
              j'ai accumulé plusieurs compétences allant de la création d'une
              maquette sur Figma au déploiement sur Netlify ou Heroku.
            </p>
            <p>
              Pour avoir des informations plus détaillées je vous invite à
              consulter mon bilan de compétences ci-dessous.
            </p>
          </div>
          <a
            className={style.wildLien}
            href="https://maxime-cv.notion.site/D-veloppeur-Javascript-Fullstack-cc1bab165d4040d4b09fe129f0e1b09c"
          >
            Voir mon bilan de compétences
          </a>
        </div>
      </div>
    </section>
  );
}

export default Skills;
