import React from 'react';
import { Image, Stack } from '@chakra-ui/react';

export const BottomDesign = () => {
  return (
    <Stack maxW='100%' position='relative' zIndex={10}>
      <Image
        src='designDiagonalLineRight.svg'
        position='absolute'
        bottom='500px'
        right='0%'
        w='3000px'
        opacity='.3'
        zIndex={10}
        display={{ base: 'block', xl: 'none' }}
      />
      <Image
        src='designArchBottomBase.svg'
        position='absolute'
        bottom='350'
        right='0%'
        w='3000px'
        opacity='.3'
        display={{ base: 'block', xl: 'none' }}
      />
      <Image
        src='designDiagonalLineLeft.svg'
        position='absolute'
        bottom='700px'
        right='0%'
        w='3000px'
        opacity='.3'
        display={{ base: 'none', xl: 'block' }}
      />
      <Image
        src='designArchBottomXl.svg'
        position='absolute'
        bottom='200px'
        right='0%'
        w='3000px'
        opacity='.3'
        display={{ base: 'none', xl: 'block' }}
      />
    </Stack>
  );
};

export default BottomDesign;
