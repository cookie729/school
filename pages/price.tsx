import React from 'react';
import {
  Box,
  Container,
  Image,
  List,
  ListItem,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react';
import BarData from 'data/chart';
import { InquirySpace } from 'components/inquirySpace';
import PlanPrice from 'components/planPrice';
import Comparison from 'components/comparison';
import Title from 'components/title';
import TopDesign from 'components/topDesign';
import BottomDesign from 'components/bottomDesign';
import { CheckCircleIcon } from '@chakra-ui/icons';

const Price = () => {
  return (
    <>
      <TopDesign />
      <Container
        maxW='100vw'
        w='100%'
        position='relative'
        zIndex={50}
        m='0'
        overflow='hidden'
      >
        <Box maxW='7xl' mx='auto' textAlign='center' py={12}>
          <Text
            position='relative'
            zIndex={50}
            as='span'
            fontSize={{ base: '4xl', md: '5xl' }}
            fontWeight={600}
            color='green.800'
          >
            料金について
          </Text>
          <Text
            fontSize={{ base: '1xl', md: '2xl' }}
            bgGradient='linear(to-br, gray.600, gray.300, gray.600)'
            bgClip='text'
            fontWeight='700'
            position='relative'
            zIndex={5}
          >
            月々最大30,000円で受けられる
          </Text>
        </Box>

        <Box py={12} position='relative' maxW='7xl' mx='auto'>
          <Box textAlign='center'>
            <Title>3つの学習プラン</Title>
            <Text
              fontSize={{ base: '1xl', md: '2xl' }}
              color='gray.400'
              fontWeight='800'
            >
              初心者でも中級者でもOK！
            </Text>
          </Box>
          <PlanPrice></PlanPrice>
        </Box>

        <Box>
          <Title>他社比較</Title>
          <Comparison></Comparison>
        </Box>

        <Box py={14} mb={6} maxW='7xl' mx='auto'>
          <Title>6ヶ月あたりの費用</Title>
          <Box display={{ base: 'block' }}>
            <Stack mx='auto' maxW='4xl'>
              <BarData></BarData>
              <br />
            </Stack>
          </Box>
        </Box>

        <VStack
          w='100vw'
          bg='green.700'
          position='relative'
          py={12}
          margin='0 calc(50% - 50vw)'
          zIndex={50}
          overflow='hidden'
        >
          <Image
            src='quality.svg'
            position='absolute'
            top='0'
            left='0'
            zIndex={10}
            maxW='995px'
            minW='600px'
          />
          <Box
            textAlign='center'
            color='green.50'
            position='relative'
            zIndex={50}
          >
            <Title color='#F0FFF4'>
              Vue Tech Academyの
              <br />
              クオリティ
            </Title>
            <Box>
              <List
                textAlign='left'
                fontWeight='bold'
                fontSize={{ base: 'lg', md: 'xl' }}
                m='6'
              >
                <ListItem my={2}>
                  <CheckCircleIcon mr={2} />
                  正しい学習順序で効率よく学べる！
                </ListItem>
                <ListItem my={2}>
                  <CheckCircleIcon mr={2} />
                  実務を意識したカリキュラムだから、今後に繋げられる！
                </ListItem>
                <ListItem my={2}>
                  <CheckCircleIcon mr={2} />
                  他社よりも安いのに充実した学習内容！
                </ListItem>
                <ListItem my={2}>
                  <CheckCircleIcon mr={2} />
                  現役エンジニアのサポートが受けられる！
                </ListItem>
                <ListItem my={2}>
                  <CheckCircleIcon mr={2} />
                  実務に必須のGitやフロントエンドフレームワークまで学べる！
                </ListItem>
              </List>
            </Box>
          </Box>

          <Box
            textAlign='center'
            py={8}
            my={2}
            position='relative'
            zIndex={50}
            w='100%'
          >
            <Title color='#F0FFF4'>なぜこんなに安くできるのか</Title>
            <Text
              fontSize={{ base: 'xl', md: '2xl' }}
              color='green.50'
              px={8}
              fontWeight='bold'
            >
              <br />
              プログラミングの楽しさを知って頂きたい為、
            </Text>
            <Text
              fontSize={{ base: '2xl', md: '3xl' }}
              color='green.50'
              px={8}
              mt={2}
              mx='auto'
              w={{ base: '100%', sm: '500px' }}
              fontWeight='bold'
              borderBottom='3px solid'
            >
              業界最安値に挑戦しています
            </Text>
          </Box>
        </VStack>

        <Stack py={12} my={2} maxW='7xl' mx='auto'>
          <Title>お支払いについて</Title>

          <TableContainer
            w='100%'
            maxW='7xl'
            mx='auto'
            border='.5px solid rgba(108,122,137,.2)'
            borderRadius={10}
            marginBottom={8}
          >
            <Table variant='simple'>
              <Thead bgGradient='linear(to-br,green.500,green.300 )'>
                <Tr>
                  <Th
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    w='20%'
                    textAlign='center'
                    color='white'
                    fontSize='1xl'
                    py={4}
                  >
                    分割回数
                  </Th>
                  <Th
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    w='20%'
                    textAlign='center'
                    color='white'
                    fontSize='1xl'
                    py={4}
                    bgGradient='linear(to-t, green.600, green.300, green.600)'
                  >
                    Basicプラン
                  </Th>
                  <Th
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    w='20%'
                    textAlign='center'
                    color='white'
                    fontSize='1xl'
                  >
                    Startプラン
                  </Th>
                  <Th
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    w='20%'
                    textAlign='center'
                    color='white'
                    fontSize='1xl'
                  >
                    Vueプラン
                  </Th>
                </Tr>
              </Thead>
              <Tbody bg='white'>
                <Tr>
                  <Td
                    textAlign='center'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                  >
                    6回(税込)
                  </Td>
                  <Td
                    textAlign='center'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    bg='green.50'
                  >
                    月々 60,000円
                  </Td>
                  <Td
                    textAlign='center'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                  >
                    ➖
                  </Td>
                  <Td
                    textAlign='center'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                  >
                    ➖
                  </Td>
                </Tr>
                <Tr>
                  <Td
                    textAlign='center'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                  >
                    3回(税込)
                  </Td>
                  <Td
                    textAlign='center'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    bg='green.50'
                  >
                    ➖
                  </Td>
                  <Td
                    textAlign='center'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                  >
                    月々 40,000円
                  </Td>
                  <Td
                    textAlign='center'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                  >
                    月々 30,000円
                  </Td>
                </Tr>
                <Tr>
                  <Td
                    textAlign='center'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    bg='green.300'
                  >
                    一括料金(税込)
                  </Td>
                  <Td
                    textAlign='center'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    bg='green.300'
                  >
                    180,000円
                  </Td>
                  <Td
                    textAlign='center'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    bg='green.300'
                  >
                    120,000円
                  </Td>
                  <Td
                    textAlign='center'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    bg='green.300'
                  >
                    90,000円
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Stack>
      </Container>

      <InquirySpace></InquirySpace>

      <BottomDesign />
    </>
  );
};

export default Price;
