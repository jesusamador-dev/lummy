import React from 'react';
import imgLogo from '../images/logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__item footer__brand">
          <img src={ imgLogo } alt="Logotipo de Lummy"/>
        </div>
        <div className="footer__item footer__links">
          <h3 className="footer__title">Horario</h3>
          <ul className="timetable">
            <li>
              <span>Lunes</span>
              <span> 8:00am - 7:00pm </span>
            </li>
            <li>
              <span>Martes</span>
              <span> 8:00am - 7:00pm </span>
            </li>
            <li>
              <span>Miércoles</span>
              <span> 8:00am - 7:00pm </span>
            </li>
            <li>
              <span>Jueves</span>
              <span> 8:00am - 7:00pm </span>
            </li>
            <li>
              <span>Viernes</span>
              <span> 8:00am - 7:00pm </span>
            </li>
            <li>
              <span>Sábado</span>
              <span> 10:00am - 9:00pm </span>
            </li>
            <li>
              <span>Domingo</span>
              <span> 10:00am - 6:00pm </span>
            </li>
          </ul>
        </div>
        <div className="footer__item footer__social">
          <h3 className="footer__title">Ponte en contacto</h3>
          <div className="footer__contact">
            <a className="footer__link" href="mailto:hola@lummy.com">hola@lummy.com</a>
            <a className="footer__link" href="tel:+528331234567">+52 833 123 4567</a>
          </div>
          <hr />
          
        </div>
      </div>
      <hr />
      <div className="footer__copyright">
      <p>Jesús Amador ©</p>
      </div>
    </footer>
  );
};

export default Footer;
