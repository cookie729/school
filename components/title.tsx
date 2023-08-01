import React, { ReactNode } from 'react';
import { Text } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
  color?: string;
  fontSize?: string;
}

export const Title = (props: Props) => {
  const { children, color, fontSize } = props;
  const contentStyle = {
    color,
    fontSize,
  };
  return (
    <Text
      style={contentStyle}
      textAlign='center'
      fontSize={{ base: '2xl', sm: '4xl', md: '5xl' }}
      fontWeight={{ base: 'extrabold', md: 'bold' }}
      mt='4'
      color='green.700'
    >
      {children}
    </Text>
  );
};

export default Title;
