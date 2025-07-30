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
            Développeur Front-End SPFx sur SharePoint / Powell, je conçois
des solutions en React et TypeScript adaptées à l’écosystème
M365, avec une attention particulière à la performance et à la
maintenabilité.
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
