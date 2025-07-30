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
        <h2 className={style.titleSkills}>À propos</h2>
<div className={style.descriptionWild}>
  <p>
    Je suis actuellement développeur SPFx chez {" "}
    <a href="https://www.asi.fr/societe/partenaires/partenaire-microsoft" target="_blank" rel="noopener noreferrer">
      Moca By ASI
    </a>, où je conçois et personnalise des solutions collaboratives basées sur SharePoint Online, Microsoft 365 et Powell Software.
  </p>
 <p>
  Mon expertise inclut le développement d’applications et de composants via SPFx et l’automatisation de tâches grâce à PowerShell.
</p>

</div>

          <a
            className={style.wildLien}
            rel="noopener noreferrer"
            target="_blank"
            href="https://maxime-cv.notion.site/D-veloppeur-SharePoint-SPFx-240dd57f12bf8023bc4cd61fb51aea94"
          >
            Voir mon CV 
          </a>
        </div>
      </div>
    </section>
  );
}

export default Skills;
