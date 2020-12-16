import React, { useContext } from 'react';
import ChatContext from "../contexts/ChatContext";
import imgCake from "../images/cake.png";
const Hero = () => {

  const chatContext = useContext(ChatContext);

  const sendMessageReservation = () => {
    chatContext.toggleChatOpen(true);
    chatContext.setSending(true);
    const message = {
      text: "Hola, quiero una reservación",
      isBot: false
    };
   chatContext.setResponses(responses => [...responses, message]);
  }

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
          <button className="btn" onClick={sendMessageReservation}>Reservar ahora</button>
        </div>
        <div className="hero__image">
          <img className="float shadow-image" src={ imgCake } alt="Imagén de un pastelillo"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;