import React from 'react';
import imgCake from "../images/cake.png";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero__content">
          <h2 className="hero__title">
            La comida sabe mejor cuando la comes con tu familia
          </h2>
          <p className="hero__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci architecto consequuntur quo nihil consectetur
          </p>
          <button className="btn">Ordenar ahora</button>
        </div>
        <div className="hero__image">
          <img className="float shadow-image" src={ imgCake } alt="Imagén de un pastelillo"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;