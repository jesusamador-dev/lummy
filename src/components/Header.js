import React,  { useState } from 'react';
import imgLogo from '../images/logo.svg';
import imgMancha from '../images/mancha-1.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  return (
    <>
      <nav className="nav-bar">
        <div className="nav-container">
          <div className="brand">
            <img src={ imgLogo } alt="Logotipo de Lummy, Repostería"/>
          </div>
          <div className="nav__button" onClick={ toggleMenu }>
          button
          </div>
          <ul className="nav">
            <li className="nav__item"><a className="nav__link" href="#">Inicio</a></li>
            <li className="nav__item"><a className="nav__link" href="#">Sobre nosotros</a></li>
            <li className="nav__item"><a className="nav__link" href="#">Equipo</a></li>
            <li className="nav__item"><a className="nav__link" href="#">Menú</a></li>
          </ul>
        </div>
      </nav>
      <img className="mancha-1" src={ imgMancha } alt="Solo es una mancha" />
      <div className={`menu__mobile ${ menuOpen ? 'menu__open' : ''}`}>
      <ul className="nav__mobile">
        <li className="nav__item"><a className="nav__link" href="#">Inicio</a></li>
        <li className="nav__item"><a className="nav__link" href="#">Sobre nosotros</a></li>
        <li className="nav__item"><a className="nav__link" href="#">Equipo</a></li>
        <li className="nav__item"><a className="nav__link" href="#">Menú</a></li>
      </ul>
      </div>
    </>
  );
};

export default Header;