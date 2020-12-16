import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Speciality from '../components/Speciality';
import Reservation from '../components/Reservation';
import Menu from '../components/Menu';

const Home = () => {
  return (
    <>
      <Hero />
      <Speciality />
      <Reservation />
      <Menu />
    </>
  );
};

export default Home;