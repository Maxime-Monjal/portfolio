import React from "react";
import style from "./NavBar.module.css";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <header>
      <nav>
        <ul className={style.navUl}>
          <li>
            <Link
              activeClass="active"
              to="Home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="Skills"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              Compétences
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="Projets"
              spy={true}
              smooth={true}
              offset={-55}
              duration={500}
            >
              Projets
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="Formation"
              spy={true}
              smooth={true}
              offset={-55}
              duration={500}
            >
              Formations
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
