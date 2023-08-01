import React, { ReactNode } from 'react';
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  ListItem,
  VStack,
  List,
} from '@chakra-ui/react';

import ContactButton from './contactButton';

const urls = {
  contact: 'https://forms.gle/mfhFCfSPfR9MnCjz8',
  apply: 'https://forms.gle/cPKwgmSmJiK8yNKN9',
};
const onClickButton = (url: string): void => {
  window.open(url, '_blank');
};

const CheckBox = () => {
  return (
    <Image
      src='checkBoxRed.svg'
      position='absolute'
      w={{ base: '20px', sm: '25px', md: '35px' }}
      left={{ base: '-40px', md: '-50px' }}
      top={{ base: '5px', sm: '10px', md: '18px' }}
    />
  );
};

const RecommendedTextBox = ({ children }: { children: ReactNode }) => {
  return (
    <ListItem
      position='relative'
      listStylePosition='inside'
      py={{ base: '1', md: '3' }}
      fontSize={{ base: '1xl', md: '3xl' }}
      fontWeight='bold'
    >
      {children}
    </ListItem>
  );
};

const RecommendedText = ({ children }: { children: ReactNode }) => {
  return (
    <ListItem
      as='span'
      fontSize={{ base: '1xl', sm: '2xl', md: '3xl' }}
      fontWeight={'bold'}
      textDecoration='underline'
      textDecorationColor='red.400'
      textDecorationThickness='4px'
      textUnderlineOffset='5px'
    >
      {children}
    </ListItem>
  );
};

const Hero = () => {
  return (
    <>
      <Container
        maxW='7xl'
        position='relative'
        overflow='hidden'
        w='100%'
        mt={5}
      >
        <Text
          position='relative'
          zIndex={50}
          as='span'
          fontSize={{ base: '3xl', md: '6xl' }}
          color='green.800'
          fontWeight={{ base: 'extrabold', md: 'bold' }}
          textDecoration='underline'
          textDecorationColor='green.100'
          textDecorationThickness={{ base: '15px', md: '30px' }}
          textUnderlineOffset={{ base: '-8px', md: '-20px' }}
        >
          「未経験者専門」
        </Text>
        <br />
        <Text
          position='relative'
          as='span'
          fontSize={{ base: '2xl', md: '5xl' }}
          fontWeight={'bold'}
          color='green.800'
          zIndex='10'
        >
          月3万円でプログラミングが学べる！
        </Text>

        <Stack
          align='center'
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          pt={{ base: 6, md: 28 }}
          direction={{ base: 'column', md: 'row' }}
          overflow='hidden'
        >
          <Image
            position='absolute'
            top='20px'
            alt='Hero Back Image'
            w='100%'
            h='130%'
            src='heromoon.svg'
            zIndex='1'
          />
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading lineHeight={1.1} fontWeight={600}>
              <Text
                zIndex={50}
                as='span'
                position='relative'
                fontSize={{ base: '2xl', md: '4xl' }}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  zIndex: -1,
                }}
                color='green.800'
              >
                フロントエンド技術の取得を目的とした
              </Text>
              <br />
              <Text
                as='span'
                fontSize={{ base: '2xl', md: '4xl' }}
                color='green.800'
                position='relative'
                zIndex={50}
              >
                プログラミングスクールです
              </Text>
            </Heading>
            <Text color='gray.500' position='relative' zIndex={50}>
              HTML, CSS, JavaScript, Vue.js,
              Git等のフロントエンド開発に欠かせない技術を習得していただくことが可能です。
            </Text>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}
              alignItems='center'
            >
              <ContactButton
                height='45px'
                fontSize='1.1rem'
                padding='20px'
                onClick={() => onClickButton(urls.apply)}
              >
                お申し込みはこちら
              </ContactButton>
              <ContactButton
                height='45px'
                fontSize='1.1rem'
                padding='20px'
                background='#E2E8F0'
                color='#A0AEBF'
                border='none'
                onClick={() => onClickButton(urls.contact)}
              >
                お問合わせはこちら
              </ContactButton>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify='center'
            align='center'
            position='relative'
            w='full'
          >
            <Box position='relative' h='300px' w='full' overflow='hidden'>
              <Image
                position='relative'
                zIndex={5}
                alt='Hero Image'
                fit='cover'
                align='center'
                w='100%'
                h='150%'
                src='person.png'
              />
            </Box>
          </Flex>
        </Stack>
      </Container>

      <VStack
        w={{ base: '90%', sm: '95%', xl: '100%' }}
        maxW='7xl'
        p={4}
        mx='auto'
        borderRadius='50'
        textAlign='center'
        position='relative'
        bgGradient='linear(to-br,#42b983, green.300,green.50)'
        zIndex='10'
        color='white'
      >
        <Text
          as='span'
          fontSize={{ base: '2xl', md: '5xl' }}
          fontWeight='bold'
          textDecoration='underline'
          textDecorationStyle='dotted'
          textDecorationColor='white'
          textDecorationThickness='3px'
          textUnderlineOffset='10px'
        >
          こんな方に
          <Text
            as='span'
            fontSize={{ base: '3xl', md: '6xl' }}
            fontWeight='bold'
          >
            おススメ！
          </Text>
        </Text>

        <List spacing={3} textAlign='start' px={12}>
          <RecommendedTextBox>
            <CheckBox />
            プログラミングに興味はあるが
            <RecommendedText>スクール料金が高く</RecommendedText>
            て入会できない
          </RecommendedTextBox>

          <RecommendedTextBox>
            <CheckBox />
            プログラミングの
            <RecommendedText>敷居が高く</RecommendedText>
            て一歩が踏み出せない
          </RecommendedTextBox>

          <RecommendedTextBox>
            <CheckBox />
            <RecommendedText>何から始めて</RecommendedText>
            いいか分からない
          </RecommendedTextBox>

          <RecommendedTextBox>
            <CheckBox />
            フロントエンドの
            <RecommendedText>スクールが少なく</RecommendedText>
            困っていた
          </RecommendedTextBox>

          <RecommendedTextBox>
            <CheckBox />
            <RecommendedText>独学で挫折</RecommendedText>
            してしまった
          </RecommendedTextBox>
        </List>

        <Image
          w={{ lg: '550px' }}
          position='absolute'
          src='n1198.png'
          top={{ base: '55%', xl: '30%' }}
          right={{ lg: '-3%', xl: '-2%' }}
          display={{ base: 'none', lg: 'block' }}
        />
      </VStack>
    </>
  );
};

export default Hero;
