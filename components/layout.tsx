import Head from 'next/head';
import Header from './header';
import { Box } from '@chakra-ui/react';
import Footer from './footer';

const Main = ({ children }) => {
  return (
    <Box>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content=' Vue Tech Academy' />
        <meta name='author' content='Yuto Nakamura' />
        <title>Vue Tech Academy</title>
      </Head>
      <Header />
      <Box bg='#FFFEFC'>{children}</Box>
      <Footer />
    </Box>
  );
};

export default Main;
