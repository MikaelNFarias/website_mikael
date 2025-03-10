'use client';
import React from 'react';
import type { NextPage } from 'next';
import * as G from '../../styles/homeStyles';
import Header from '../../components/header';
import About from '../../components/about';
import Footer from '../../components/footer';

const Home: NextPage = () => {
  return (
    <G.HomeBackground>
      <Header />
      <About />
      <Footer />
    </G.HomeBackground>
  );
};

export default Home;
