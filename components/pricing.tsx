import React from 'react';
import { Box, Stack, Text, VStack, Container } from '@chakra-ui/react';
import BarData from 'data/chart';
import { PlanPrice } from './planPrice';
import { Comparison } from './comparison';
import Title from './title';

const Pricing = () => {
  return (
    <Container maxW='7xl' mt={20}>
      <Box py={12}>
        <VStack spacing={2} textAlign='center'>
          <Title>料金について</Title>

          <Text
            fontSize={{ base: '1xl', md: '2xl' }}
            bgGradient='linear(to-br, gray.600, gray.300, gray.600)'
            bgClip='text'
            fontWeight='800'
            position='relative'
            zIndex={5}
          >
            初学者でも中級者でもOK！選べる3つのプラン
          </Text>
        </VStack>
        <PlanPrice></PlanPrice>
      </Box>
      <Title>他社比較</Title>
      <Comparison></Comparison>

      <Box py={14} mb={6}>
        <Title>6ヶ月間あたりの費用</Title>
        <Box display={{ base: 'block' }}>
          <Stack mx='auto' maxW='4xl'>
            <BarData></BarData>
            <br />
          </Stack>

          <Box
            borderRadius={15}
            p={6}
            bg='green.600'
            fontWeight={600}
            color='white'
            maxW='7xl'
            mx='auto'
            h='60%'
            my={{ base: '8' }}
          >
            <Text fontSize='2xl'>料金について</Text>
            <Text fontSize={{ base: '1xl', md: 'xl' }}>
              Vue Tech
              Academyでは、高額なスクール費用の障壁によってプログラミング学習を諦めてしまう方に対して、費用をできるだけ抑えてより多くの方にプログラミングの楽しさを知ってもらい国内のIT人材増加を図ることを目的としているため、業界最安値に挑戦しています。
            </Text>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Pricing;
