import React from 'react';
import imgDonouts from '../images/donouts.png';
import imgPay from '../images/pay.png';
import imgMacarons from '../images/macarons.png';

const Speciality = () => {
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
          <img className="float shadow-image" src={ imgDonouts }  alt="" />
          <h3 className="speciality__subtitle">Donouts</h3>
          <p className="speciality__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, pariatur?
          </p>
        </div>
        <div className="speciality__item">
          <img className="float shadow-image" src={imgPay} alt="" />
          <h3 className="speciality__subtitle">Pay</h3>
          <p className="speciality__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, pariatur?
          </p>
        </div>
        <div className="speciality__item">
          <img className="float shadow-image" src={imgMacarons} alt="" />
          <h3 className="speciality__subtitle">Macarons</h3>
          <p className="speciality__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, pariatur?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Speciality;