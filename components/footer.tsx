import React from 'react';
import {
  Box,
  Center,
  Image,
  List,
  ListItem,
  Stack,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';

const onClickButton = (url: string): void => {
  window.open(url, '_blank');
};

const footerList = [
  {
    id: 1,
    title: '学習内容',
    url: '/curriculum',
  },
  {
    id: 2,
    title: '料金について',
    url: '/price',
  },
  {
    id: 3,
    title: 'よくあるご質問',
    url: '/questions',
  },
  {
    id: 4,
    title: 'プライバシーポリシー',
    url: '/privacyPolicy',
  },
  {
    id: 5,
    title: 'ご利用規約',
    url: '/terms',
  },
];

const footerListTab = [
  {
    id: 1,
    title: '運営会社',
    url: 'https://ring-tech.jp/',
  },
  {
    id: 2,
    title: 'お問合わせ',
    url: 'https://forms.gle/mfhFCfSPfR9MnCjz8',
  },
];
const Footer = () => {
  return (
    <Center
      p={8}
      bg='green.600'
      borderTop='1px solid rgba(0, 0, 0, 0.1)'
      top={0}
      zIndex={100}
      borderBottom='1px solid rgba(0, 0, 0, 0.1)'
      boxShadow='xl'
      display='flex'
      flexDirection='column'
      textAlign='left'
    >
      <VStack w={{ base: '100%' }} maxW='7xl'>
        <Link href='/'>
          <Box
            fontSize='2xl'
            fontWeight='bold'
            position='relative'
            zIndex={10}
            color='white'
            mr='auto'
            ml={4}
            my={8}
            _hover={{
              cursor: 'pointer',
            }}
          >
            <Image
              position='absolute'
              top={{ base: '-10px' }}
              alt='HeaderLogo'
              src='headerLogo.png'
              zIndex={-1}
            />
            <a>Vue Tech Academy</a>
          </Box>
        </Link>
      </VStack>
      <Stack w={{ base: '100%' }} maxW='7xl'>
        <List
          display={{ base: 'block', md: 'flex' }}
          flexWrap='wrap'
          w={{ base: '100%' }}
          mx='auto'
          color='white'
          fontSize='1xl'
          fontWeight='600'
          borderBottom='.5px solid rgba(255,255,255, .4)'
        >
          {footerList.map((list) => (
            <ListItem
              key={list.id}
              p={4}
              _hover={{
                opacity: '.8',
                cursor: 'pointer',
              }}
            >
              <Link href={list.url}>
                <a>{list.title}</a>
              </Link>
            </ListItem>
          ))}
          {footerListTab.map((listTab) => (
            <ListItem
              key={listTab.id}
              p={4}
              _hover={{
                opacity: '.8',
                cursor: 'pointer',
              }}
              onClick={() => onClickButton(listTab.url)}
            >
              {listTab.title}
            </ListItem>
          ))}
        </List>
        <Box
          fontSize='sm'
          color='white'
          pt={8}
          fontWeight='500'
          textAlign='center'
        >
          &copy; {new Date().getFullYear()} Vue Tech Academy All rights reserved
        </Box>
      </Stack>
    </Center>
  );
};

export default Footer;
