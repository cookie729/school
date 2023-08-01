import { CheckCircleIcon } from '@chakra-ui/icons';
import {
  Box,
  Container,
  HStack,
  List,
  ListItem,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

export const PlanPrice = () => {
  return (
    <Container
      display={{ base: 'block ', md: 'flex' }}
      maxW='100%'
      flexWrap='wrap'
      justifyContent='center'
    >
      <Box
        position='relative'
        border='4px solid'
        borderColor='green.400'
        borderRadius={20}
        w={{ base: '90%', md: '40%', xl: '30%' }}
        mx={{ base: 'auto', md: '6', xl: '3' }}
        my={10}
        height={{ base: 'auto', md: '478px' }}
        bg='white'
      >
        <Box
          position='absolute'
          top='-16px'
          left='50%'
          style={{ transform: 'translate(-50%)' }}
          textAlign='center'
        >
          <Text
            bg='#42b983'
            px={3}
            py={1}
            color='white'
            fontSize='sm'
            rounded='xl'
          >
            ☆イチオシ!
          </Text>
        </Box>

        <Box py={4} px='auto' textAlign='center'>
          <Text
            fontWeight='700'
            fontSize={{ base: '3xl', md: '6xl' }}
            color='green.400'
          >
            Basic
          </Text>
          <Text
            fontWeight='600'
            whiteSpace='nowrap'
            fontSize='1xl'
            bgGradient='linear(to-br, gray.600, gray.400, gray.600)'
            bgClip='text'
            m='-10px'
          >
            0から実務レベルが身に付く!
            <br />
            初級〜中級プラン
          </Text>
          <HStack justifyContent='center'>
            <Text fontSize='3xl' fontWeight='600' color='green.700'>
              ¥
            </Text>
            <Text
              fontSize={{ base: '3xl', md: '5xl' }}
              fontWeight='900'
              bgGradient='linear(to-br, green.400, yellow.200)'
              bgClip='text'
            >
              180,000
            </Text>
          </HStack>
          <Text fontSize={{ base: '1xl', md: '3xl' }} color='green.600'>
            /6ヶ月
          </Text>
        </Box>
        <VStack
          bg={useColorModeValue('green.50', 'green.700')}
          py={4}
          borderBottomRadius='xl'
        >
          <List spacing={3} textAlign='start' px={12}>
            <ListItem>
              <CheckCircleIcon color='#42b983' mr={2} />
              HTML
            </ListItem>
            <ListItem>
              <CheckCircleIcon color='#42b983' mr={2} />
              CSS
            </ListItem>
            <ListItem>
              <CheckCircleIcon color='#42b983' mr={2} />
              JavaScript
            </ListItem>
            <ListItem>
              <CheckCircleIcon color='#42b983' mr={2} />
              Vue.js
            </ListItem>
            <ListItem>
              <CheckCircleIcon color='#42b983' mr={2} />
              Git
            </ListItem>
          </List>
        </VStack>
      </Box>

      <Box
        position='relative'
        border='4px solid'
        borderColor='blue.600'
        borderRadius={20}
        w={{ base: '90%', md: '40%', xl: '30%' }}
        mx={{ base: 'auto', md: '6', xl: '3' }}
        my={10}
        height={{ base: 'auto', md: '478px' }}
        textAlign='center'
        bg='white'
      >
        <Box py={4} px='auto'>
          <Text
            fontWeight='700'
            fontSize={{ base: '3xl', md: '6xl' }}
            color='blue.500'
          >
            Start
          </Text>
          <Text
            fontWeight='600'
            whiteSpace='nowrap'
            fontSize='1xl'
            color='gray.500'
            m='-10px'
          >
            フロントエンドの入り口に立つ!
            <br />
            初級プラン
          </Text>
          <HStack justifyContent='center'>
            <Text fontSize='3xl' fontWeight='600' color='blue.700'>
              ¥
            </Text>
            <Text
              fontSize={{ base: '3xl', md: '5xl' }}
              fontWeight='900'
              color='blue.500'
            >
              120,000
            </Text>
          </HStack>
          <Text fontSize={{ base: '1xl', md: '3xl' }} color='blue.700'>
            /3ヶ月
          </Text>
        </Box>
        <VStack
          bg={useColorModeValue('gray.50', 'gray.700')}
          py={4}
          height='200px'
          borderBottomRadius='xl'
        >
          <List spacing={3} textAlign='start' px={12}>
            <ListItem>
              <CheckCircleIcon color='blue.500' mr={2} />
              HTML
            </ListItem>
            <ListItem>
              <CheckCircleIcon color='blue.500' mr={2} />
              CSS
            </ListItem>
            <ListItem>
              <CheckCircleIcon color='blue.500' mr={2} />
              JavaScript
            </ListItem>
          </List>
        </VStack>
      </Box>

      <Box
        position='relative'
        border='4px solid'
        borderColor='blue.600'
        borderRadius={20}
        w={{ base: '90%', md: '40%', xl: '30%' }}
        mx={{ base: 'auto', md: '6', xl: '3' }}
        my={10}
        height={{ base: 'auto', md: '478px' }}
        textAlign='center'
        bg='white'
      >
        <Box py={4} px='auto'>
          <Text
            fontWeight='700'
            fontSize={{ base: '3xl', md: '6xl' }}
            color='blue.500'
          >
            Vue
          </Text>
          <Text fontWeight='600' fontSize='1xl' color='gray.500' m='-10px'>
            実務に繋げる！
            <br />
            中級者プラン
          </Text>
          <HStack justifyContent='center'>
            <Text fontSize='3xl' fontWeight='600' color='blue.700'>
              ¥
            </Text>
            <Text
              fontSize={{ base: '3xl', md: '5xl' }}
              fontWeight='900'
              color='blue.500'
            >
              90,000
            </Text>
          </HStack>
          <Text fontSize={{ base: '1xl', md: '3xl' }} color='blue.700'>
            /3ヶ月
          </Text>
        </Box>

        <VStack
          bg={useColorModeValue('gray.50', 'gray.700')}
          py={4}
          height='200px'
          borderBottomRadius='xl'
        >
          <List spacing={3} textAlign='start' px={12}>
            <ListItem>
              <CheckCircleIcon color='blue.500' mr={2} />
              Vue.js
            </ListItem>
            <ListItem>
              <CheckCircleIcon color='blue.500' mr={2} />
              Git
            </ListItem>
          </List>
        </VStack>
      </Box>
    </Container>
  );
};

export default PlanPrice;
