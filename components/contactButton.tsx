import React, { MouseEvent, ReactNode } from 'react';
import { Button } from '@chakra-ui/react';

interface Props {
  height?: string;
  fontSize?: string;
  padding?: string;
  background?: string;
  color?: string;
  border?: string;
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement> | any) => any | null;
}

export const ContactButton = (props: Props) => {
  const {
    height,
    fontSize,
    padding,
    background,
    color,
    border,
    children,
    onClick,
  } = props;

  const contentStyle = {
    height,
    fontSize,
    padding,
    background,
    color,
    border,
  };

  return (
    <>
      <Button
        style={contentStyle}
        position='relative'
        zIndex={50}
        h={{ base: '50px', sm: '80px' }}
        rounded='full'
        shadow='xl'
        fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
        px={{ base: '16', md: '36' }}
        my={{ base: '2', md: '4' }}
        colorScheme='#42b983'
        background='#42b983'
        _hover={{
          bg: 'white',
          border: '1px solid #42b983',
          color: '#42b983',
          opacity: 0.8,
        }}
        onClick={onClick}
      >
        {children}
      </Button>
    </>
  );
};

export default ContactButton;
