import React from 'react';
import { Box, Image, Stack } from '@chakra-ui/react';

import ContactButton from './contactButton';
import Title from './title';

export const InquirySpace = () => {
  const urls = {
    contact: 'https://forms.gle/mfhFCfSPfR9MnCjz8',
    apply: 'https://forms.gle/cPKwgmSmJiK8yNKN9',
  };
  const onClickButton = (url: string): void => {
    window.open(url, '_blank');
  };

  return (
    <Stack
      bg='green.300'
      alignItems='center'
      w='100vw'
      color='white'
      py={{ base: '12', md: '16' }}
      position='relative'
      overflow='hidden'
      mt={32}
      zIndex={50}
    >
      <Image
        w='100vw'
        h={{ base: '1000px', md: '1500px' }}
        position='absolute'
        src='questionDesign.svg'
        objectFit='cover'
        bottom='-5px'
      />
      <Box
        textAlign='center'
        m='0'
        position='relative'
        zIndex={5}
        fontWeight='bold'
      >
        <Box display={{ base: 'column', md: 'flex' }}>
          <Title color='white' fontSize='normal'>
            お申し込み・お問い合わせ
          </Title>
          <Title color='white' fontSize='normal'>
            はこちら
          </Title>
        </Box>
      </Box>
      <Box
        mt={9}
        display='flex'
        flexDirection='column'
        zIndex={30}
        fontWeight='bold'
        mx='auto'
      >
        <ContactButton onClick={() => onClickButton(urls.apply)}>
          お申し込み
        </ContactButton>
        <ContactButton
          color='#A0AEBF'
          background='#E2E8F0'
          border='none'
          onClick={() => onClickButton(urls.contact)}
        >
          お問合わせ
        </ContactButton>
      </Box>
    </Stack>
  );
};
