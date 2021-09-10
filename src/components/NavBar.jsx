import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "./Button.jsx";
import "./styles/NavBar.css";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const [colorChange, setColorChange] = useState(false);

  function handleColorChange() {
    if (window.scrollY >= 627) setColorChange(true);
    else setColorChange(false);
  }

  window.addEventListener("scroll", handleColorChange);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) setButton(false);
    else setButton(true);
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink
            to="/"
            className={colorChange ? "navbar-logo-color2" : "navbar-logo"}
            onClick={closeMobileMenu}
          >
            <i className={`fas fa-disease`}></i>
          </NavLink>
          <div className="menu-icon" onClick={handleClick}>
            {colorChange ? (
              <p className={"bars-color2"}>O</p>
            ) : (
              <p className={"bars"}>O</p>
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                className={colorChange ? "nav-links-color2" : "nav-links"}
                onClick={closeMobileMenu}
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={colorChange ? "nav-links-color2" : "nav-links"}
                onClick={closeMobileMenu}
              >
                Sobre Mi
              </Link>
            </li>
            <li>
            <a
              className={colorChange ? "nav-links-mobile-color2" : "nav-links-mobile"}
              href="https://github.com/FacundoFuentes/RickAndMortyApp"
              target="_blank"
              onClick={closeMobileMenu}
            >
              <i class="fab fa-github"></i>
            </a>
            </li>
          </ul>
          {button && (
            <a
              className={colorChange ? "nav-links-color2" : "nav-links"}
              href="https://github.com/FacundoFuentes/RickAndMortyApp"
              target="_blank"
            >
              <i class="fab fa-github"></i>
            </a>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
