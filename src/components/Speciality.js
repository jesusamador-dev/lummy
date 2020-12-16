import React, { useContext } from 'react';
import ChatContext from "../contexts/ChatContext";
import imgDonuts from '../images/donouts.png';
import imgPay from '../images/pay.png';
import imgMacarons from '../images/macarons.png';

const Speciality = () => {
  const chatContext = useContext(ChatContext);
  const sendMessageOrder = (product) => {
    chatContext.toggleChatOpen(true);
    chatContext.setSending(true);
    const message = {
      text: `Hola, deseo ordenar: ${product}`,
      isBot: false
    };
    chatContext.setResponses(responses => [...responses, message]);
  }
  return (
    <section className="speciality">
      <div className="speciality__header">
        <h2 className="speciality__title">Nuestras especialidades</h2>
        <p className="speciality__description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates expedita totam, nam reprehenderit quibusdam suscipit quia voluptatibus ipsum, in amet inventore vel 
        </p>
      </div>
      <div className="speciality__container">
        <div className="speciality__item">
          <img className="float shadow-image" src={ imgDonuts }  alt="" />
          <h3 className="speciality__subtitle">Donas</h3>
          <p className="speciality__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, pariatur?
          </p>
          <button onClick={() => { sendMessageOrder("donas") }} className="btn">Ordenar ahora</button>
        </div>
        <div className="speciality__item">
          <img className="float shadow-image" src={imgPay} alt="" />
          <h3 className="speciality__subtitle">Pay</h3>
          <p className="speciality__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, pariatur?
          </p>
          <button onClick={() => { sendMessageOrder("pay") }} className="btn">Ordenar ahora</button>
        </div>
        <div className="speciality__item">
          <img className="float shadow-image" src={imgMacarons} alt="" />
          <h3 className="speciality__subtitle">Macarons</h3>
          <p className="speciality__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, pariatur?
          </p>
          <button onClick={() => { sendMessageOrder("macarons") }} className="btn">Ordenar ahora</button>
        </div>
      </div>
    </section>
  );
};

export default Speciality;