import React, { ReactNode } from 'react';
import {
  Box,
  Container,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';

interface FeatureProps {
  title: string;
}

const QuestionTitle = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      zIndex={50}
      as='span'
      fontSize={{ base: '3xl', md: '5xl' }}
      fontWeight={600}
      color='white'
      w='100%'
      textAlign='center'
      bgGradient='linear(to-b,green.500, green.300)'
      py={{ base: '6', md: '12' }}
      my={5}
    >
      {children}
    </Text>
  );
};

const QuestionText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      mx={{ base: 'auto', xl: '28' }}
      position='relative'
      borderBottom='.5px solid'
      borderColor='gray.200'
    >
      {children}
    </Text>
  );
};

const QuestionMark = () => {
  return (
    <Image
      src='question.svg'
      w={10}
      position='absolute'
      left='-44px'
      top='-5px'
    />
  );
};

const AnswerText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      mx={{ base: 'auto', xl: '28' }}
      position='relative'
      pt={6}
      fontSize={{ base: 'sm', md: 'md' }}
    >
      {children}
    </Text>
  );
};

const AnswerMark = () => {
  return (
    <Image
      src='answer.svg'
      w={10}
      position='absolute'
      left='-40px'
      top='20px'
    />
  );
};

const QuestionBox = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      px={14}
      py={6}
      my={10}
      bg='gray.50'
      shadow='lg'
      textAlign='left'
      fontSize={{ base: 'lg', md: 'xl' }}
      fontWeight='bold'
      color='gray.600'
      position='relative'
    >
      {children}
    </Box>
  );
};

const Category = ({ title }: FeatureProps) => {
  return (
    <Stack
      bg='gray.50'
      p={3}
      shadow='lg'
      _hover={{
        cursor: 'pointer',
        opacity: '.7',
      }}
    >
      <Text fontWeight={600} textAlign='center'>
        {title}
      </Text>
    </Stack>
  );
};

const Questions = () => {
  return (
    <>
      <Container maxW='7xl'>
        <Box textAlign='center' pt={28} position='relative'>
          <Image
            src='questionLogo.svg'
            position='absolute'
            top='200px'
            left='0'
            right='0'
            mx='auto'
            zIndex={5}
            w={{ base: '250px', sm: '300', md: '400px' }}
          />
          <Text
            zIndex={50}
            as='span'
            fontSize={{ base: '4xl', md: '5xl' }}
            fontWeight={600}
            color='green.700'
          >
            よくあるご質問
          </Text>
        </Box>

        <Box py={12}>
          <VStack spacing={2} textAlign='center' position='relative'>
            <Text
              fontWeight='bold'
              fontSize={{ base: '3xl' }}
              color='green.700'
            >
              質問カテゴリ
            </Text>
          </VStack>
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={10}
            py={10}
            mx='auto'
            w='80%'
            color='gray.500'
          >
            <Box>
              <a href='#learn'>
                <Category title='学習について' />
              </a>
            </Box>
            <Box>
              <a href='#vue'>
                <Category title='Vue.jsの需要について' />
              </a>
            </Box>
            <Box>
              <a href='#lecture'>
                <Category title='講師について' />
              </a>
            </Box>
            <Box>
              <a href='#environment'>
                <Category title='学習環境について' />
              </a>
            </Box>
            <Box>
              <a href='#charge'>
                <Category title='料金・保証について' />
              </a>
            </Box>
            <Box>
              <a href='#terms'>
                <Category title='受講の条件について' />
              </a>
            </Box>
            <Box>
              <a href='#works'>
                <Category title='転職について' />
              </a>
            </Box>
          </SimpleGrid>
        </Box>

        {/* 学習について */}
        <Stack
          id='learn'
          my={10}
          direction='column'
          spacing='24px'
          pt='100px'
          mt='-100px'
        >
          <QuestionTitle>学習について</QuestionTitle>

          <QuestionBox>
            <QuestionText>
              <QuestionMark />
              学習についていけるか心配です。
            </QuestionText>

            <AnswerText>
              <AnswerMark />
              プログラミング未経験者に特化した学習を提供しているのでご安心ください。
              <br />
              未経験の方でも理解できる効率的な学習順序でカリキュラムが組まれております。
              <br />
              受講生の皆さんはほぼ全員「未経験」でのスタートです。現役エンジニアがサポート致しますので安心して受講してください。
            </AnswerText>
          </QuestionBox>

          <QuestionBox>
            <QuestionText>
              <QuestionMark />
              受講したらどのレベルのエンジニアになれますか？
            </QuestionText>
            <AnswerText>
              <AnswerMark />
              VueTechAcademyでは「自走できるITエンジニア」の育成を目指しており、最終課題まで学習した人のほとんどがオリジナルのWebサービスを自分で調べながら作れるレベルになっています。
            </AnswerText>
          </QuestionBox>

          <QuestionBox>
            <QuestionText>
              <QuestionMark />
              学習期間はどのくらいを予定していますか？
            </QuestionText>

            <AnswerText>
              <AnswerMark />
              Basicプランでは6ヶ月(120日)、Start/Vueプランでは3ヶ月(90日)となっております。
            </AnswerText>
          </QuestionBox>

          <QuestionBox>
            <QuestionText>
              <QuestionMark />
              働きながら学習時間を作れるか不安です。
            </QuestionText>
            <AnswerText>
              <AnswerMark />
              Vue Tech Academyでは、テキストでの自習形式の学習になります。
              <br />
              どの時間帯でもご自分のお好きな時間に学習し、質問をすることができます。
              10:00〜19:00までの質問時間に間に合わない場合でも、翌朝講師より回答が返信されます。
              <br />
              また、学習期間も3~6ヶ月間と十分にありますので、仕事を続けながらでもしっかりと実力がつきます。
            </AnswerText>
          </QuestionBox>

          <QuestionBox>
            <QuestionText>
              <QuestionMark />
              オンラインに慣れておらず、1人でやり切れるか不安です。
            </QuestionText>
            <AnswerText>
              <AnswerMark />
              VueTechAcademyでは、オンラインでもやり切れる環境を用意しているのでご安心ください。
              <br />
              講師への質問し放題ですので、分からない事や不安な事は講師にいつでも相談可能です。
              また学習の進捗管理も行っているので、一人であってもサボりにくい環境となっています。
            </AnswerText>
          </QuestionBox>

          <QuestionBox>
            <QuestionText>
              <QuestionMark />
              学習は講義、自習どちらがメインになりますか？
            </QuestionText>
            <AnswerText>
              <AnswerMark />
              学習は自習形式です。
              <br />
              10時から19時までいつでも講師に質問できます。
              <br />
              教材24時間はいつでも見ることができ、19時以降でも質問をすると翌朝講師が回答をします。
              <br />
              このように自分のペースで学習を進め、わからないことがあればすぐ質問して疑問を解消する自習形式なので、生活に合わせた学習ができます。
            </AnswerText>
          </QuestionBox>

          <QuestionBox>
            <QuestionText>
              <QuestionMark />
              卒業後もカリキュラムの閲覧はできますか？
            </QuestionText>
            <AnswerText>
              <AnswerMark />
              卒業後も1年間はカリキュラムの閲覧が可能です。
              エンジニア転職後も学習内容の復習ができるので、ご自身のスキルアップにお役立てください。
            </AnswerText>
          </QuestionBox>
        </Stack>

        {/* vueの需要について */}
        <Stack id='vue' my={10} pt='100px' mt='-100px'>
          <QuestionTitle>Vue.jsの需要について</QuestionTitle>
          <QuestionBox>
            <QuestionText>
              <QuestionMark />
              Vue.js専門となっていますが今後需要はありますか？
            </QuestionText>
            <AnswerText>
              <AnswerMark />
              説明
            </AnswerText>
          </QuestionBox>

          <QuestionBox>
            <QuestionText>
              <QuestionMark />
              フロントエンド専門ですが、転職等できるでしょうか？
            </QuestionText>
            <AnswerText>
              <AnswerMark />
              説明
            </AnswerText>
          </QuestionBox>

          <QuestionBox>
            <QuestionText>
              <QuestionMark />
              Vue.jsが難しそうで心配です。
            </QuestionText>

            <AnswerText>
              <AnswerMark />
              Vue.jsを学習するにあたり必要不可欠な、JavaScript等の基礎を身につけてからの学習になりますので、ご安心ください。
              <br />
              分からない所は、いつでも講師に質問することができます。
            </AnswerText>
          </QuestionBox>
        </Stack>

        {/* 講師について */}
        <Stack id='lecture' my={10} pt='100px' mt='-100px'>
          <QuestionTitle>講師について</QuestionTitle>
          <QuestionBox>
            <QuestionText>
              <QuestionMark />
              講師のレベルはどの程度でしょうか？
            </QuestionText>
            <AnswerText>
              <AnswerMark />
              VueTechAcademyの講師は,全員が現役エンジニアで、カリキュラム内容を熟知しており、難易度が高くても熟練した講師が質問対応するため、ご安心ください。
            </AnswerText>
          </QuestionBox>
        </Stack>

        {/* 学習環境について */}
        <Stack id='environment' my={10} pt='100px' mt='-100px'>
          <QuestionTitle>学習環境について</QuestionTitle>
          <QuestionBox>
            <QuestionText>
              <QuestionMark />
              講義を受ける際に準備すべきものはありますか？
            </QuestionText>
            <AnswerText>
              <AnswerMark />
              パソコンのご準備をお願いします。ビデオ通話？
            </AnswerText>
          </QuestionBox>

          <QuestionBox>
            <QuestionText>
              <QuestionMark />
              パソコンの指定はありますか？
            </QuestionText>
            <AnswerText>
              <AnswerMark />
              Windows,Macどちらでも大丈夫です。お手持ちのパソコンで受講できます。
            </AnswerText>
          </QuestionBox>

          <QuestionBox>
            <QuestionText>
              <QuestionMark />
              スクールの教室はありますか？
            </QuestionText>
            <AnswerText>
              <AnswerMark />
              ありません。弊社は基本的にオンラインスクールとなっておりますので、お客様の学習したい場所で自由に学習する事ができます。
            </AnswerText>
          </QuestionBox>
        </Stack>

        {/* 料金・保証について */}
        <Stack id='charge' my={10} pt='100px' mt='-100px'>
          <QuestionTitle>料金・保証について</QuestionTitle>
          <QuestionBox>
            <QuestionText>
              <QuestionMark />
              金銭的に厳しい場合はどうすれば良いですか？
            </QuestionText>
            <Box>
              <AnswerText>
                <AnswerMark />
                VueTechAcademyでは分割払いが可能です。
              </AnswerText>
              <Box
                display='flex'
                fontSize={{ base: 'sm', md: 'md' }}
                mx={{ base: 'auto', xl: '28' }}
                position='relative'
              >
                <Text>分割払いについての詳細は</Text>
                <Link href='/price'>
                  <Text
                    color='blue.500'
                    borderBottom='1px solid'
                    _hover={{
                      cursor: 'pointer',
                    }}
                  >
                    <a>こちら</a>
                  </Text>
                </Link>
                <Text>をご参照ください。</Text>
              </Box>
            </Box>
          </QuestionBox>

          <QuestionBox>
            <QuestionText>
              <QuestionMark />
              クレジットカードは使えますか？
            </QuestionText>

            <Box>
              <AnswerText>
                <AnswerMark />
                クレジットカードでの決済はできません。現金払いのみとなっております。
              </AnswerText>
              <Box
                display='flex'
                fontSize={{ base: 'sm', md: 'md' }}
                mx={{ base: 'auto', xl: '28' }}
                position='relative'
              >
                <Text>お支払い方法についての詳細は</Text>
                <Link href='/price'>
                  <Text
                    color='blue.500'
                    borderBottom='1px solid'
                    _hover={{
                      cursor: 'pointer',
                    }}
                  >
                    <a>こちら</a>
                  </Text>
                </Link>
                <Text>をご参照ください。</Text>
              </Box>
            </Box>
          </QuestionBox>

          <QuestionBox>
            <QuestionText>
              <QuestionMark />
              返金保証はありますか？
            </QuestionText>
            <AnswerText>
              <AnswerMark />
              当社では返金保証の対応は行なっておりません。
            </AnswerText>
          </QuestionBox>

          <QuestionBox>
            <QuestionText>
              <QuestionMark />
              教育ローンは利用できますか？
            </QuestionText>
            <AnswerText>
              <AnswerMark />
              当社では教育ローンの対応は行なっておりません。
            </AnswerText>
          </QuestionBox>
        </Stack>

        {/* 受講の条件について */}
        <Stack id='terms' my={10} pt='100px' mt='-100px'>
          <QuestionTitle>受講の条件について</QuestionTitle>
          <QuestionBox>
            <QuestionText>
              <QuestionMark />
              パソコンは自分で準備する必要がありますか？
            </QuestionText>
            <AnswerText>
              <AnswerMark />
              学習いただく場合は、Mac,WindowsのPCをご用意いただく必要がございます。お持ちでない場合は、ご自身でご用意をお願いいたします。
            </AnswerText>
          </QuestionBox>

          <QuestionBox>
            <QuestionText>
              <QuestionMark />
              学生ですが、利用することはできますか？未成年でも受講可能ですか？
            </QuestionText>
            <AnswerText>
              <AnswerMark />
              はい、学生の方でも、未成年の方でも受講可能となっております。
            </AnswerText>
          </QuestionBox>

          <QuestionBox>
            <QuestionText>
              <QuestionMark />
              30歳を超えていても利用することはできますか？
            </QuestionText>
            <AnswerText>
              <AnswerMark />
              はい、30歳の方でも受講可能です。
            </AnswerText>
          </QuestionBox>

          <QuestionBox>
            <QuestionText>
              <QuestionMark />
              どこの地域でも受講可能ですか？
            </QuestionText>
            <AnswerText>
              <AnswerMark />
              はい、日本在住であればどこの地域でも可能です。
            </AnswerText>
          </QuestionBox>

          <QuestionBox>
            <QuestionText>
              <QuestionMark />
              自宅のインターネット環境構築に関するサポートはありますか？
            </QuestionText>
            <AnswerText>
              <AnswerMark />
              ありません。インターネット環境はご自身でご用意お願い致します。
            </AnswerText>
          </QuestionBox>
        </Stack>

        {/* 転職について */}
        <Stack id='works' my={10} pt='100px' mt='-100px'>
          <QuestionTitle>転職について</QuestionTitle>
          <QuestionBox>
            <QuestionText>
              <QuestionMark />
              転職サポートはありますか？
            </QuestionText>
            <AnswerText>
              <AnswerMark />
              説明
            </AnswerText>
          </QuestionBox>

          <QuestionBox>
            <QuestionText>
              <QuestionMark />
              30歳を過ぎても転職できますか？
            </QuestionText>
            <AnswerText>
              <AnswerMark />
              はい、個人差や努力によっても差が出ると思いますので、約束することはできませんが30歳を過ぎてからの転職は可能です。
              <br />
              また、VueTechAcademyの講座を修了して頂ければ、実務にも繋がる基礎的な知識やスキルを習得することができます。
            </AnswerText>
          </QuestionBox>
        </Stack>
      </Container>
    </>
  );
};

export default Questions;
