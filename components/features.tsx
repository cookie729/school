import {
  Box,
  Container,
  SimpleGrid,
  Text,
  Stack,
  HStack,
  VStack,
  Image,
} from '@chakra-ui/react';
import Title from './title';

const features = [
  {
    id: 1,
    title: 'フロントエンド専門',
    text: 'フロントエンドエンジニアになるために集中して学習していただきます。',
  },
  {
    id: 2,
    title: '現役のエンジニア/面接官がサポート',
    text: 'アルバイト等ではなく、現役正社員で活躍するメンバーが学習をサポートします。',
  },
  {
    id: 3,
    title: '時間や場所を選ばない',
    text: '学習は全てオンラインで行っていただきます。仕事終わりの夜間でも、休日でも、ご自身のペースで学習していただくことが可能です。',
  },
  {
    id: 4,
    title: '質問し放題',
    text: '疑問点がある時やエラーが解消できない時、エンジニアにチャットで質問していただくことが可能です。',
  },
];

const Features = () => {
  return (
    <Container
      maxW='100vw'
      bg='green.400'
      bgGradient={{ base: 'linear(green.400, green.50)', md: 'none' }}
      position='relative'
      overflow='hidden'
    >
      <Image
        src='featureLogo9.svg'
        position='absolute'
        bottom='0'
        zIndex={5}
        display={{ base: 'none', md: 'block' }}
      />
      <Box py={12} position='relative' zIndex={10}>
        <Stack spacing={4} as={Container} maxW='3xl' textAlign='center'>
          <Title color='white'>特徴</Title>

          <Text
            fontSize={{ base: '1xl', md: '2xl' }}
            color='white'
            fontWeight='800'
          >
            現役エンジニアと面接官が学習をサポートさせていただきます。
          </Text>
        </Stack>

        <Container maxW='6xl' mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {features.map((feature) => (
              <HStack
                key={feature.id}
                align='top'
                bg='white'
                borderRadius={10}
                p={4}
                boxShadow='2xl'
              >
                <Box
                  color='green.400'
                  height={{ base: '40px', md: '60px' }}
                  width={{ base: '40px', md: '60px' }}
                  borderRadius={50}
                  border={{ base: '3px solid', md: '5px solid' }}
                  px={2}
                  position='relative'
                >
                  <Text
                    position='absolute'
                    top={{ base: '-2px', md: '-6px' }}
                    left={{ base: '9px', md: '11px' }}
                    fontSize={{ base: 25, md: 40 }}
                    fontWeight='bold'
                    color='orange.300'
                  >
                    {feature.id}
                  </Text>
                </Box>
                <VStack align='start' w='80%'>
                  <Text fontWeight={600} color='orange.300' fontSize={21.5}>
                    {feature.title}
                  </Text>
                  <Text color='green.800' fontWeight='bold'>
                    {feature.text}
                  </Text>
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Container>
  );
};

export default Features;
