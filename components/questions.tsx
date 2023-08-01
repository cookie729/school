import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import { InquirySpace } from './inquirySpace';
import Title from './title';

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue('gray.50', 'gray.700')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontSize={'md'} fontWeight={600}>
          {name}
        </Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Questions() {
  return (
    <>
      <Container
        maxW={'7xl'}
        py={20}
        as={Stack}
        spacing={12}
        position='relative'
      >
        <Stack spacing={2} align={'center'} zIndex={10}>
          <Title>よくある質問</Title>
          <Text fontSize='lg' color='gray.500'>
            皆様から寄せられるよくある質問です。
          </Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}
          zIndex={10}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                仕事終わりの受講は可能ですか？
              </TestimonialHeading>
              <TestimonialText>
                可能です。
                <br />
                ご自身のペースで学習することが可能です。
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src='question-person1.svg'
              name={'受講生A'}
              title={'工場勤務'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                地方在住でも受講は可能ですか？
              </TestimonialHeading>
              <TestimonialText>
                可能です。
                <br />
                全てオンラインでの学習となります。
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src='question-person2.svg'
              name={'受講生B'}
              title={'パート勤務'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                質問は何時でも可能ですか？
              </TestimonialHeading>
              <TestimonialText>
                可能です。
                <br />
                質問への返信時間は10時~19時となります。
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src='question-person3.svg'
              name={'受講生C'}
              title={'福祉職勤務'}
            />
          </Testimonial>
        </Stack>
        <Image
          src='questionLogo.svg'
          display={{ base: 'none', md: 'block' }}
          position='absolute'
          bottom='-130px'
          zIndex={1}
        />
      </Container>

      <InquirySpace></InquirySpace>
    </>
  );
}
