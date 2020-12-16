import React, { useContext } from 'react';
import ChatContext from "../contexts/ChatContext";
import imgItem1 from '../images/item1.png';
import imgItem2 from '../images/item2.png';
import imgItem3 from '../images/item3.png';
import imgItem4 from '../images/item4.png';
import imgItem5 from '../images/item5.png';
import imgItem6 from '../images/item6.png';

const Menu = () => {
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
    <section className="menu">
      <div className="menu__container">
        <div className="menu__content">
          <h3 className="menu__title">Nuestro menú</h3>
          <p className="menu__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus maxime esse qui harum doloremque amet, error pariatur sunt ipsam suscipit soluta, quaerat omnis, accusamus fugit non porro tenetur ea voluptas.
          </p>
        </div>
        <div className="menu__items">
          <div className="card">
            <div className="card__header">
              <img src={imgItem1} alt="" />
            </div>
            <div className="card__body">
              <h4 className="card__title">Crepas</h4>
            </div>
            <div className="card__footer">
              <p className="card__price">$75.00</p>
              <button onClick={() => { sendMessageOrder("crepas") }} className="btn btn-price">Ordenar</button>
            </div>
          </div>
          <div className="card">
            <div className="card__header">
              <img src={imgItem2} alt="" />
            </div>
            <div className="card__body">
              <h4 className="card__title">Cupcake</h4>
            </div>
            <div className="card__footer">
              <p className="card__price">$15.00</p>
              <button onClick={() => { sendMessageOrder("cupcake") }} className="btn btn-price">Ordenar</button>
            </div>
          </div>
          <div className="card">
            <div className="card__header">
              <img src={imgItem3} alt="" />
            </div>
            <div className="card__body">
              <h4 className="card__title">Brownies</h4>
            </div>
            <div className="card__footer">
              <p className="card__price">$20.00</p>
              <button onClick={() => { sendMessageOrder("brownies") }} className="btn btn-price">Ordenar</button>
            </div>
          </div>
          <div className="card">
            <div className="card__header">
              <img src={imgItem4} alt="" />
            </div>
            <div className="card__body">
              <h4 className="card__title">Helado</h4>
            </div>
            <div className="card__footer">
              <p className="card__price">$25.00</p>
              <button onClick={() => { sendMessageOrder("helado") }} className="btn btn-price">Ordenar</button>
            </div>
          </div>
          <div className="card">
            <div className="card__header">
              <img src={imgItem5} alt="" />
            </div>
            <div className="card__body">
              <h4 className="card__title">Hamburguesa</h4>
            </div>
            <div className="card__footer">
              <p className="card__price">$85.00</p>
              <button onClick={() => { sendMessageOrder("hamburguesa") }} className="btn btn-price">Ordenar</button>
            </div>
          </div>
          <div className="card">
            <div className="card__header">
              <img src={imgItem6} alt="" />
            </div>
            <div className="card__body">
              <h4 className="card__title">Pizza</h4>
            </div>
            <div className="card__footer">
              <p className="card__price">$150.00</p>
              <button onClick={() => { sendMessageOrder("pizza") }} className="btn btn-price">Ordenar</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;