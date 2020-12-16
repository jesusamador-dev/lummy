import React, { useContext } from 'react';
import ChatContext from "../contexts/ChatContext";
import imgReservation from '../images/image_reservation.png';

const Reservation = () => {
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
    <section className="reservation">
      <div className="reservation__container">
        <div className="reservation__image">
          <img className="float shadow-image" src={  imgReservation } alt=""/>
        </div>
        <div className="reservation__content">
          <h2 className="reservation__title">Una buena experiencia se disfruta con tus amigos</h2>
          <p className="reservation__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, alias reprehenderit. Vero dolor rerum rem voluptatem
          <br /> <br /> 
              
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, alias reprehenderit. Vero dolor rerum rem voluptatem quo obcaecati cumque, ea culpa. Laborum doloremque reiciendis assumenda eum. Vero repellat officia ratione.
          </p>
          <button className="btn" onClick={sendMessageReservation}>Reservar ahora</button>
        </div>
      </div>
    </section>
  );
};

export default Reservation;