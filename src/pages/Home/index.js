import React from 'react';
import Helmet from 'react-helmet';

import MainContainer from '../../components/MainContainer';
import Example from '../../components/Example';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet" />
      </Helmet>

      <MainContainer>
        <Example />
      </MainContainer>
    </>
  );
}
