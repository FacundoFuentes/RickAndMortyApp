import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/AboutMe.css";
import Footer from "../Footer.jsx";
import img from "../../media/images/me.png";

export default function AboutMe() {
  return (
    <>
      <div className="about-container">
        <div className="outer-border">
          <img className="myImg" src={img} alt="Not found" />
          <div className="text-container">
            <div className="about-me-text">
              <h1 className="inline hola-text">Hola, </h1>
              <p className="inline">
                Mi nombre es Facundo, estudio Ciencias de la Computación en la
                Universidad Nacional de Córdoba, Argentina. Actualmente me encuentro en el
                camino de formarme como Fullstack Developer en{" "}
                <strong>
                  <a
                    className="a-soyhenry"
                    href="https://www.soyhenry.com"
                    target="_blank"
                  >
                    SoyHenry
                  </a>
                </strong>{". "}
                Esta página la desarrollé con Javascript y React como proyecto
                personal para potenciar mi aprendizaje, para afianzar los
                conocimientos que vengo adquiriendo en el Bootcamp
              </p>
            </div>
            <div className="social-media">
              <NavLink
                className="social-icon-link instagram"
                to="/"
                target="_blank"
                aria-label="Instagram"
              >
                <a
                  className="a-links a-links-instagram-me"
                  href="https://www.instagram.com/facufuentes_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </NavLink>
              <NavLink
                className="social-icon-link twitter"
                to="/"
                target="_blank"
                aria-label="Twitter"
              >
                <a
                  className="a-links a-links-twitter-me"
                  href="https://twitter.com/facufuentes_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </NavLink>
              <NavLink
                className="social-icon-link linkedin"
                to="/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <a
                  className="a-links a-links-linkedin-me"
                  href="https://www.linkedin.com/in/facundo-fuentes/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
