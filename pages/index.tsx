import React from 'react';
import { Divider } from '@chakra-ui/react';
import Hero from 'components/hero';
import Overviews from 'components/overviews';
import Pricing from 'components/pricing';
import Features from 'components/features';
import Questions from 'components/questions';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Divider w='70%' m='auto' />
      <Overviews />
      <Divider w='70%' m='auto' />
      <Features />
      <Divider w='70%' m='auto' />
      <Pricing />
      <Divider w='70%' m='auto' />
      <Questions />
    </>
  );
};

export default HomePage;
