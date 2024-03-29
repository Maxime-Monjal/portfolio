import React, { useEffect } from "react";
import style from "./Home.module.css";
import Max from "../../image/Maxime_profil.png";
import NavBar from "../NavBar/NavBar";
import Github from "../../image/icons/Github-icon.svg";
import Linkedin from "../../image/icons/Linkedin-icon.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className={style.Home} id="Home">
      <NavBar />
      <div className={style.divPresentation}>
        <h1 className={style.name}>Maxime Monjal</h1>
        <h2 className={style.emploi}>Développeur Web</h2>
        <img
          className={style.max}
          data-aos="flip-right"
          data-aos-duration="1000"
          src={Max}
          alt="Maxime"
        />
        <div>
          <p className={style.description}>
            De formation mécanicien automobile, je me suis reconverti. Pourquoi
            ? Parce que pour moi c’est la version 2.0 de mon ancien métier. J’ai
            toujours aimé résoudre des problèmes ... Maintenant je peux
            continuer à le faire et sans l’huile de vidange.
          </p>
        </div>

        <div className={style.contact}>
          <a href="https://www.linkedin.com/in/maximemonjal/">
            <img
              className={style.linkedinIcon}
              src={Linkedin}
              alt="Linkedin-icon"
            />
          </a>
        
          <a href="https://github.com/Maxime-Monjal">
            <img className={style.githubIcon} src={Github} alt="Github-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
