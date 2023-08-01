import React from 'react';
import {
  Box,
  SimpleGrid,
  Text,
  Stack,
  Flex,
  VStack,
  Container,
  Image,
} from '@chakra-ui/react';
import Title from './title';

interface FeatureProps {
  title: string;
  text: string;
  icon: string;
}

const Overview = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex w={16} h={16} align={'center'} justify={'center'} mb={1}>
        <Image src={icon} alt='icon' />
      </Flex>
      <Text fontSize='lg' fontWeight={600}>
        {title}
      </Text>
      <Text fontSize='md' fontWeight='600' color={'gray.400'}>
        {text}
      </Text>
    </Stack>
  );
};

const Overviews = () => {
  return (
    <Container maxW='7xl'>
      <Box py={32} position='relative'>
        <VStack spacing={2} textAlign='center'>
          <Title>概要</Title>
          <Text
            fontSize={{ base: '1xl', md: '2xl' }}
            color='gray.400'
            fontWeight='800'
            position='relative'
            zIndex={5}
          >
            本コースで習得できるスキル
          </Text>
        </VStack>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={10}
          py={10}
          mx='auto'
          w='70%'
        >
          <Overview
            icon='html.png'
            title='HTML'
            text='画面を作るコーディングスキル'
          />
          <Overview
            icon='css.png'
            title='CSS'
            text='見た目を整えるデザインスキル'
          />
          <Overview
            icon='js.png'
            title='JavaScript'
            text='画面に動きや機能を付けるスキル'
          />
          <Overview
            icon='vue.png'
            title='Vue.js'
            text='実務をする上で必須のフレームワークを使ったアプリケーション作成スキル'
          />
          <Overview icon='git.png' title='Git' text='ソースコード管理スキル' />
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Overviews;
