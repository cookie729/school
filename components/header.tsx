import { Box, Heading } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import Link from 'next/link';

const Header = () => {
  return (
    <Box
      position='sticky'
      top={0}
      zIndex={100}
      p={4}
      bgGradient='linear(to-r, green.500, teal.50)'
      borderBottom='1px solid rgba(0, 0, 0, 0.1)'
      boxShadow='xl'
    >
      <Heading
        maxW='7xl'
        mx='auto'
        fontSize='4xl'
        display='flex'
        alignItems='center'
        padding={0}
        position='relative'
        zIndex={10}
        color='white'
      >
        <Link href='/'>
          <a>
            <Image
              position='absolute'
              left='0%'
              top={{ base: '-5px', md: '-10px' }}
              alt='HeaderLogo'
              align='center'
              w='450px'
              h='70px'
              mr={3}
              src='headerLogo.png'
              zIndex={-1}
            />
            Vue Tech Academy
          </a>
        </Link>
      </Heading>
    </Box>
  );
};

export default Header;
