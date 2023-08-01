import React from 'react';
import { Image, Stack } from '@chakra-ui/react';

export const TopDesign = () => {
  return (
    <Stack maxW='100%' position='relative' zIndex={50}>
      <Image
        src='designDiagonalLineTop.svg'
        position='absolute'
        left='0%'
        w='3000px'
        opacity='.4'
        zIndex={10}
      />
      <Image
        src='designArchTop.svg'
        position='absolute'
        bottom={{ base: '-200px', md: '-500px' }}
        right='0%'
        w='3000px'
        opacity='.5'
        zIndex={10}
      />
    </Stack>
  );
};

export default TopDesign;
