'use client';
import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import * as G from '../../styles/homeStyles';
import Header from '../../components/header';
import About from '../../components/about';
import Footer from '../../components/footer';

const Home: NextPage = () => {
  return (
    <G.HomeBackground>
      <Head>
        <title>Home - Mikael</title>
      </Head>
      <Header />
      <About />
      <Footer />
    </G.HomeBackground>
  );
};

export default Home;
