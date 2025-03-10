import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import packageJson from '../package.json';
import GlobalStyle from '../styles/globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  const version = `${packageJson.name.toUpperCase()}${packageJson.version}`;

  return (
    <>
      <GlobalStyle />

      <Head>
        <title>Mikael</title>
        <meta name="description" content="Mikael - Portfolio" />
        <link rel="icon" href="/m-solid.svg" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
