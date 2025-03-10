import React from 'react';
import type { NextPage } from 'next';
import * as G from '../styles/homeStyles';
import Home from './home';

const MyApp: NextPage = () => {
  return (
    <G.HomeBackground>
      <Home />
    </G.HomeBackground>
  );
};

export default MyApp;
