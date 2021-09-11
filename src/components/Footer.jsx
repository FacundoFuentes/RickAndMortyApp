import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./Button.jsx";
import "./styles/Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Suscríbete a nuestro newsletter para obtener novedades y actualizaciones sobre la página
        </p>
        <p className="footer-subscription-text">
          Puedes darte de baja en cualquier momento.
        </p>
        <div className="input-areas">
          <form action="">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline-color2">Suscribete</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Sobre Nosotros</h2>
            <NavLink to="/sign-up">Sobre Mi</NavLink>
            <NavLink to="/sign-up">Como funciona</NavLink>
          </div>
          <div className="footer-link-items">
            <h2>Contacto</h2>
            <NavLink to="/">Contacto</NavLink>
            <NavLink to="/">Soporte</NavLink>
          </div>
        </div>
      </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <NavLink to='/' className="social-logo">
                    <i className={`fas fa-disease`}></i>
                    </NavLink>
                </div>
                <small className="website-rights">Ⓒ 2021</small>
                <div className="social-icons">
                    <NavLink className="social-icon-link instagram" to='/' target='_blank' aria-label='Instagram'>
                      <a className='a-links a-links-instagram-me' href="https://www.instagram.com/facufuentes_" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    </NavLink>
                    <NavLink className="social-icon-link twitter" to='/' target='_blank' aria-label='Twitter'> 
                    <a className='a-links a-links-twitter-me' href="https://twitter.com/facufuentes_" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>    
                    </NavLink>
                    <NavLink className="social-icon-link linkedin" to='/' target='_blank' aria-label='LinkedIn'> 
                    <a className='a-links a-links-linkedin-me' href="https://www.linkedin.com/in/facundo-fuentes/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    </NavLink>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Footer;
