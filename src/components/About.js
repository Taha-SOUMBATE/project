import React from "react";

import html from "../assets/html-5.png";
import css from "../assets/css-3.png";
import js from "../assets/js.png";
import react from "../assets/react.png";

import cv from "../assets/cvdetaha.pdf";

const About = () => {
  return (
    <div className="container  pt-5 d-flex flex-column align-items-center min-vh-100">
      <p className="text-center lead m-4">
        Bonjour, je m'appelle Taha Soumbate et je suis un développeur Full Stack junior avec une passion pour la création de sites Web conviviaux et
        fonctionnels. Je suis expérimenté dans les langages de programmation tels que HTML, CSS, JS, ainsi que dans les outils de développement
        modernes tels que Bootstrap et React. J'aime travailler en équipe et je suis toujours prêt à apprendre de nouvelles technologies pour
        améliorer mes compétences et rester à jour avec les dernières tendances. Mon objectif est de fournir des solutions technologiques innovantes
        et de qualité pour les projets sur lesquels je travaille. Si vous recherchez un développeur Full Stack motivé et passionné, n'hésitez pas à me
        contacter!
      </p>
      <a href={cv} download className="btn btn-primary mt-5 custom-btn fw-bold">
      Download my CV
      </a>
      <h3 className="pt-5 pb-2 ">Languages et technologiques que j'utilise:</h3>

      <p className="lead">
        <img className="me-2" src={html} alt="html5" width="40" height="40" />
        <img className="m-2" src={css} alt="css3" width="40" height="40" />
        <img className="m-2" src={js} alt="javascript" width="30" height="35" />
        <img className="m-2" src={react} alt="react" width="35" height="35" />
      </p>
    </div>
  );
};

export default About;
