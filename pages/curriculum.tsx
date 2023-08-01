import React, { ReactNode } from 'react';
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
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import { InquirySpace } from 'components/inquirySpace';
import Title from 'components/title';
import { CheckCircleIcon } from '@chakra-ui/icons';
import TopDesign from 'components/topDesign';
import BottomDesign from 'components/bottomDesign';

const ExplanationText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign='left'
      fontWeight='normal'
      fontSize={{ base: 'lg', md: 'xl' }}
    >
      {children}
    </Text>
  );
};

const Curriculum = () => {
  return (
    <>
      <TopDesign />
      <Container maxW='7xl' w='100%' position='relative' zIndex={50}>
        <Box textAlign='center' py={12}>
          <Text
            position='relative'
            zIndex={50}
            as='span'
            fontSize={{ base: '4xl', md: '5xl' }}
            fontWeight={600}
            color='green.700'
          >
            学習内容
          </Text>

          <Text
            fontSize={{ base: '1xl', md: '2xl' }}
            color='gray.400'
            fontWeight='800'
          >
            Vue Tech Academyの学習コースについて
          </Text>
        </Box>

        <Box textAlign='center' py={12} my={2}>
          <Stack
            color='green.700'
            border='3px solid'
            borderRadius={20}
            maxW='7xl'
            mx='auto'
            p={3}
            mt='8'
            fontWeight='bold'
            bg='white'
          >
            <Title>フロントエンド専門の理由</Title>
            <UnorderedList
              px={{ base: '4', md: '14' }}
              pb={5}
              textAlign='left'
              fontSize={{ base: 'md', sm: '2xl' }}
            >
              <ListItem>
                既存のプログラミングスクールはバックエンドが多くフロントエンド技術を専門で学べる場所が少ない
              </ListItem>
              <ListItem>
                フロントエンドエンジニアとして確実に実務で必要なスキルを迷わずに選べる
              </ListItem>
              <ListItem>現在、今後もフロントエンド技術の需要は高い</ListItem>
            </UnorderedList>
          </Stack>
        </Box>

        <Box textAlign='center' py={12} my={2}>
          <Title>現場で使える技術が身に付く</Title>
          <UnorderedList
            mt='8'
            px={{ base: '4', md: '16' }}
            pb={5}
            textAlign='left'
            fontSize={{ base: 'md', sm: '2xl' }}
            color='green.700'
            fontWeight='bold'
          >
            <ListItem my={3}>
              現場に入っても使える基礎から応用までのスキルをしっかり学べます。
            </ListItem>
            <ListItem my={3}>
              フロントエンドエンジニアの現場ではJavaScriptだけで作業をすることはほとんど無く、Vue.js等のJavaScriptフレームワークを必ず使います。
              <br />
              当社ではVue.jsに特化した学習を行う為、Vueとは何？から現場に繋がる技術を身につけられます。
            </ListItem>
            <ListItem my={3}>
              現場の未経験者にありがちなGitの問題も、最初に学び活用する事で卒業するまでに問題なく使用できます。
            </ListItem>
            <ListItem my={3}>
              現役エンジニアが講師の為、より現場に近い指導を受けられます。
            </ListItem>
          </UnorderedList>
        </Box>

        <VStack
          textAlign='center'
          py={12}
          my={2}
          color='green.800'
          spacing={10}
        >
          <Box display={{ base: 'column', lg: 'flex' }}>
            <Title>Vue Tech Academyで</Title>
            <Title>学ぶメリット</Title>
          </Box>

          <Box>
            <Text fontSize={{ base: 'xl', sm: '2xl' }} fontWeight='bold'>
              経験できる事
            </Text>
            <List textAlign='left' fontSize={{ base: 'lg', sm: 'xl' }}>
              <ListItem my={2}>
                <CheckCircleIcon color='green.400' mr={2} />{' '}
                ポートフォリオが作成できる
              </ListItem>
              <ListItem my={2}>
                <CheckCircleIcon color='green.400' mr={2} />
                課題を通して、より実務に近い経験ができる
              </ListItem>
              <ListItem my={2}>
                <CheckCircleIcon color='green.400' mr={2} />
                フロントエンドスキルで不可欠なフレームワーク(Vue.js)が学べる
              </ListItem>
              <ListItem my={2}>
                <CheckCircleIcon color='green.400' mr={2} />
                実務に欠かせないGitを習得できる
              </ListItem>
              <ListItem my={2}>
                <CheckCircleIcon color='green.400' mr={2} />
                現役エンジニアからレビューを受けられる
              </ListItem>
              <ListItem my={2}>
                <CheckCircleIcon color='green.400' mr={2} />
                現役エンジニアによる教育が受けられる
              </ListItem>
            </List>
          </Box>

          <Box>
            <Text fontWeight='bold' fontSize={{ base: 'xl', md: '2xl' }}>
              オンラインでも安心して取り組める
            </Text>
            <ExplanationText>
              オンライン学習中、分からない事は講師に質問できます。
              <br />
              質問時間を過ぎてしまった場合でも、翌朝講師が回答させて頂きます。
              <br />
              また、オンライン学習なので自分のペースで学習する事ができます。
            </ExplanationText>
          </Box>

          <Box>
            <Text
              fontWeight='bold'
              color='green.800'
              fontSize={{ base: 'xl', md: '2xl' }}
            >
              時間や場所を選ばない
            </Text>
            <ExplanationText>
              オンラインのテキスト学習の為、時間や場所は自由で日本でならどこでも受けられます。
              <br />
              進捗も管理する為、しっかり予定や目標に合わせて学習を進められます。
            </ExplanationText>
          </Box>
        </VStack>

        <VStack textAlign='center' py={12} my={2}>
          <Box display={{ lg: 'flex' }}>
            <Title>Vue Tech Academyで</Title>
            <Title>学べるスキル</Title>
          </Box>
          <Text
            fontSize={{ base: '1xl', md: '2xl' }}
            color='gray.400'
            fontWeight='800'
            p={3}
          >
            3ヶ月から6ヶ月で身につけられる
          </Text>

          <TableContainer
            w='100%'
            maxW='7xl'
            mx='auto'
            border='.5px solid rgba(108,122,137,.2)'
            borderRadius={10}
            marginBottom={8}
          >
            <Table variant='simple'>
              <Thead bgGradient='linear(to-r, green.400, teal.400)'>
                <Tr>
                  <Th
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    w='30%'
                    textAlign='center'
                    color='white'
                    fontSize='xl'
                    py={4}
                    bg='green.400'
                  >
                    習得スキル
                  </Th>
                  <Th
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    w='70%'
                    textAlign='center'
                    color='white'
                    fontSize='xl'
                    py={4}
                    bg='green.400'
                  >
                    内容
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td
                    textAlign='center'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    fontSize={{ base: 'xl' }}
                    color='gray.500'
                    fontWeight='800'
                  >
                    HTML
                    <Image src='html.png' w={50} mx='auto' mt={2} />
                  </Td>
                  <Td
                    textAlign='center'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    bg='green.50'
                  >
                    説明
                  </Td>
                </Tr>
                <Tr>
                  <Td
                    textAlign='center'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    fontSize={{ base: 'xl' }}
                    color='gray.500'
                    fontWeight='800'
                  >
                    CSS
                    <Image src='css.png' w={50} mx='auto' mt={2} />
                  </Td>
                  <Td
                    textAlign='center'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    bg='green.50'
                  >
                    説明
                  </Td>
                </Tr>
                <Tr>
                  <Td
                    textAlign='center'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    fontSize={{ base: 'xl' }}
                    color='gray.500'
                    fontWeight='800'
                  >
                    JavaScript
                    <Image src='js.png' w={50} mx='auto' mt={2} />
                  </Td>
                  <Td
                    textAlign='center'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    bg='green.50'
                  >
                    説明
                  </Td>
                </Tr>
                <Tr>
                  <Td
                    textAlign='center'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    fontSize={{ base: 'xl' }}
                    color='gray.500'
                    fontWeight='800'
                  >
                    Vue.js
                    <Image src='vue.png' w={50} mx='auto' mt={2} />
                  </Td>
                  <Td
                    textAlign='center'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    bg='green.50'
                  >
                    説明
                  </Td>
                </Tr>
                <Tr>
                  <Td
                    textAlign='center'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    fontSize={{ base: 'xl' }}
                    color='gray.500'
                    fontWeight='800'
                  >
                    Git
                    <Image src='git.png' w={50} mx='auto' mt={2} />
                  </Td>
                  <Td
                    textAlign='center'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    bg='green.50'
                  >
                    説明
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </VStack>

        <VStack
          textAlign='center'
          py={12}
          bg='green.900'
          spacing={10}
          color='green.100'
          position='relative'
          margin='0 calc(50% - 50vw)'
          my={16}
        >
          <Title color='#F4F4F2'>
            プログラミング初学者の9割が
            <br />
            挫折する理由
          </Title>

          <Box maxW='7xl'>
            <Text fontWeight='bold' fontSize={{ base: 'xl', md: '2xl' }}>
              学習の順序が分からず常に不安状態にある
            </Text>
            <ExplanationText>
              何から始めたらいいのか、本当にこのやり方が合っているのか分からない為、不安とストレスが大きく効率的な学習ができず挫折してしまう。
            </ExplanationText>
          </Box>

          <Box maxW='7xl'>
            <Text fontWeight='bold' fontSize={{ base: 'xl', md: '2xl' }}>
              不明点を聞けない
            </Text>
            <ExplanationText>
              覚える事が沢山あり、分からない事も山のようにあるのに誰にも教えてもらえない為、1人で悩み時間を掛けてしまう事で、学習が中々進まない上にゴールも見えず挫折してしまう。
            </ExplanationText>
          </Box>

          <Box maxW='7xl'>
            <Text fontWeight='bold' fontSize={{ base: 'xl', md: '2xl' }}>
              エラーが解決できない
            </Text>
            <ExplanationText>
              プログラミング初学者はエラーの原因を知る所で既に苦労してしまい、原因が分かってもエラーをどう対処していけばいいのか分からず、1人で悩み必要なスキルが中々身に付かず挫折してしまう。
            </ExplanationText>
          </Box>

          <Box maxW='7xl'>
            <Text fontWeight='bold' fontSize={{ base: 'xl', md: '2xl' }}>
              モチベーションが続かない
            </Text>
            <ExplanationText>
              初学者は言語の習得が中々スムーズには進みません。初期段階で進みが良くても実践で苦労すればゴールは遠く感じてしまい、目標のスキルを手に入れる前に気持ちが続かず挫折してしまいます。
            </ExplanationText>
          </Box>
        </VStack>

        <VStack
          textAlign='center'
          py={12}
          px={4}
          my={2}
          color='green.800'
          spacing={10}
          borderRadius={50}
          position='relative'
          overflow='hidden'
          zIndex={50}
          shadow='xl'
          bg='#fffcfa'
        >
          <Image
            zIndex={10}
            position='absolute'
            src='supportPC.svg'
            opacity='.4'
            maxW='7xl'
            h='1500px'
            top='-400px'
            left={{ base: '0px', xl: '' }}
            objectFit='cover'
            display={{ base: 'none', md: 'block' }}
          />
          <Image
            zIndex={10}
            position='absolute'
            src='supportSP.svg'
            opacity='.4'
            maxW='6xl'
            h={{ base: '2000px', sm: '1650' }}
            top={{ base: '-600px' }}
            left={{ base: '-550px', sm: '-400px' }}
            objectFit='cover'
            display={{ base: 'block', md: 'none' }}
          />
          <Title>挫折させない為のサポート</Title>

          <Box>
            <Text fontWeight='bold' fontSize={{ base: 'xl', md: '2xl' }}>
              正しい学習順序の提供
            </Text>
            <ExplanationText>
              当社では初学者でも理解しやすく、効率の良い順序でカリキュラムが組まれている為、
              <br />
              ・何をすれば良いか分からない
              <br />
              ・この学習方法で大丈夫なのか？
              <br />
              等、本来学習には必要の無い悩みや不安はありません。
            </ExplanationText>
          </Box>

          <VStack>
            <Box display={{ sm: 'flex' }}>
              <Text fontWeight='bold' fontSize={{ base: 'xl', md: '2xl' }}>
                現役のエンジニア/
              </Text>
              <Text fontWeight='bold' fontSize={{ base: 'xl', md: '2xl' }}>
                面接官がサポート
              </Text>
            </Box>
            <ExplanationText>
              不明点やエラー等の質問は勿論、受講生の学習の悩みや相談もできます。
              <br />
              1人で悩みを抱えてしまう事が無い為、無駄な悩みは省きスムーズな学習を実現できます。
            </ExplanationText>
          </VStack>

          <Box>
            <Text fontWeight='bold' fontSize={{ base: 'xl', md: '2xl' }}>
              質問し放題
            </Text>
            <Text
              textAlign='left'
              fontWeight='normal'
              fontSize={{ base: 'lg', md: 'xl' }}
            >
              10:00~19:00ならいつでも講師より質問の回答をします。
              <br />
              チャットで質問をする事は24時間いつでも可能です。
              <br />
              尚、質問に制限は無く、分からない事はいつでも何回でも質問可能となっています。
            </Text>
          </Box>

          <Box>
            <Text fontWeight='bold' fontSize={{ base: 'xl', md: '2xl' }}>
              モチベーションが維持できる
            </Text>
            <ExplanationText>
              スタートからゴールまで効率的なカリキュラムが組まれており、現役エンジニアに質問ができる。
              <br />
              スムーズな学習により効率的で楽しくプログラミング学習を継続できます。
            </ExplanationText>
          </Box>
        </VStack>

        <Box textAlign='center' py={12} my={2}>
          <Title>各プランの学習時間</Title>
          <TableContainer
            w='100%'
            maxW='7xl'
            border='.5px solid rgba(108,122,137,.2)'
            borderRadius={10}
            marginBottom={8}
          >
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    w='33%'
                    textAlign='center'
                    color='white'
                    fontSize='xl'
                    py={4}
                    bg='green.400'
                  >
                    プラン
                  </Th>
                  <Th
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    w='33%'
                    textAlign='center'
                    color='white'
                    fontSize='xl'
                    py={4}
                    bg='green.400'
                  >
                    習得スキル
                  </Th>
                  <Th
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    w='33%'
                    textAlign='center'
                    color='white'
                    fontSize='xl'
                    py={4}
                    bg='green.400'
                  >
                    学習時間
                  </Th>
                </Tr>
              </Thead>
              <Tbody bg='white'>
                <Tr>
                  <Td
                    textAlign='center'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    fontSize='2xl'
                    fontWeight='800'
                    color='green.400'
                  >
                    Basicプラン
                  </Td>
                  <Td
                    textAlign='center'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    bg='green.50'
                  >
                    HTML
                    <br />
                    CSS
                    <br />
                    JavaScript
                    <br />
                    Git
                    <br />
                    Vue
                  </Td>
                  <Td
                    textAlign='center'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    bg='green.50'
                  >
                    〇〇時間
                  </Td>
                </Tr>
                <Tr>
                  <Td
                    textAlign='center'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    fontSize='2xl'
                    color='blue.500'
                    fontWeight='800'
                  >
                    Startプラン
                  </Td>
                  <Td
                    textAlign='center'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    bg='green.50'
                  >
                    HTML
                    <br />
                    CSS
                    <br />
                    JavaScript
                  </Td>
                  <Td
                    textAlign='center'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    bg='green.50'
                  >
                    〇〇時間
                  </Td>
                </Tr>
                <Tr>
                  <Td
                    textAlign='center'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    fontSize='2xl'
                    color='blue.500'
                    fontWeight='800'
                  >
                    Vueプラン
                  </Td>
                  <Td
                    textAlign='center'
                    borderRight='.5px solid
                    rgba(108,122,137,.2)'
                    bg='green.50'
                  >
                    Git
                    <br />
                    Vue
                  </Td>
                  <Td
                    textAlign='center'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    bg='green.50'
                  >
                    〇〇時間
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>

        <Box textAlign='center' py={12} my={2}>
          <Title>レッスン内容</Title>

          <TableContainer
            w='100%'
            maxW='7xl'
            border='.5px solid rgba(108,122,137,.2)'
            borderRadius={10}
            marginBottom={8}
          >
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    w='30%'
                    textAlign='center'
                    color='white'
                    fontSize='xl'
                    py={4}
                    bg='green.400'
                  >
                    習得スキル
                  </Th>
                  <Th
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    w='65%'
                    textAlign='center'
                    color='white'
                    fontSize='xl'
                    py={4}
                    bg='green.400'
                  >
                    チャプタータイトル
                  </Th>
                </Tr>
              </Thead>
              <Tbody bg='white'>
                <Tr>
                  <Td
                    textAlign='left'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    fontSize='md'
                    color='green.700'
                    fontWeight='800'
                  >
                    レッスン0: 準備編
                  </Td>
                  <Td
                    textAlign='left'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    bg='green.50'
                  >
                    1. 概要説明
                    <br />
                    2. 各種アカウント準備
                    <br />
                    3. 学習準備
                    <br />
                  </Td>
                </Tr>
                <Tr>
                  <Td
                    textAlign='left'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    fontSize='md'
                    color='green.700'
                    fontWeight='800'
                  >
                    レッスン1: Git編
                  </Td>
                  <Td
                    textAlign='left'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    bg='green.50'
                  >
                    1. Gitの準備
                    <br />
                    2. CLIについて
                    <br />
                    3. Gitについて
                    <br />
                    4. Gitコマンドについて
                    <br />
                    5. GitHubについて
                    <br />
                    6. よくある質問/エラー
                  </Td>
                </Tr>
                <Tr>
                  <Td
                    textAlign='left'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    fontSize='md'
                    color='green.700'
                    fontWeight='800'
                  >
                    レッスン2: HTML/CSS編
                  </Td>
                  <Td
                    textAlign='left'
                    borderRight='.5px solid
                    rgba(108,122,137,.2)'
                    bg='green.50'
                  >
                    1. HTML/CSS学習準備
                    <br />
                    2. HTML/CSS概要
                    <br />
                    3. ヘッダーフッター作成
                    <br />
                    4. メインエリア作成
                    <br />
                    5. 仕上げ
                    <br />
                    6. レスポンシブ対応について
                    <br />
                    7. Flexboxについて
                  </Td>
                </Tr>
                <Tr>
                  <Td
                    textAlign='left'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    fontSize='md'
                    color='green.700'
                    fontWeight='800'
                  >
                    レッスン3: JavaScript編
                  </Td>
                  <Td
                    textAlign='left'
                    borderRight='.5px solid
                    rgba(108,122,137,.2)'
                    bg='green.50'
                  >
                    1. JavaScript概要
                    <br />
                    2. 変数
                    <br />
                    3. 演算子
                    <br />
                    4. 条件分岐
                    <br />
                    5. ループ処理
                    <br />
                    6. 関数
                  </Td>
                </Tr>
                <Tr>
                  <Td
                    textAlign='left'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    fontSize='md'
                    color='green.700'
                    fontWeight='800'
                  >
                    レッスン4: Vue.js編
                  </Td>
                  <Td
                    textAlign='left'
                    borderRight='.5px solid
                    rgba(108,122,137,.2)'
                    bg='green.50'
                  >
                    1. Vue.js概要
                    <br />
                    2. Vue.jsを使う
                    <br />
                    3. Vue.js環境構築
                    <br />
                    4. Bootstrap
                  </Td>
                </Tr>
                <Tr>
                  <Td
                    textAlign='left'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    fontSize='md'
                    color='green.700'
                    fontWeight='800'
                  >
                    レッスン5: Firebase編
                  </Td>
                  <Td
                    textAlign='left'
                    borderRight='.5px solid
                    rgba(108,122,137,.2)'
                    bg='green.50'
                  >
                    1. Firebase概要
                    <br />
                    2. Realtime Database概要
                    <br />
                    3. Authentication概要
                  </Td>
                </Tr>
                <Tr>
                  <Td
                    textAlign='left'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    fontSize='md'
                    color='green.700'
                    fontWeight='800'
                  >
                    レッスン6: 実践編
                  </Td>
                  <Td
                    textAlign='left'
                    borderRight='.5px solid
                    rgba(108,122,137,.2)'
                    bg='green.50'
                  >
                    Vue.jsでアプリ開発
                  </Td>
                </Tr>
                <Tr>
                  <Td
                    textAlign='left'
                    borderRight='.5px solid rgba(108,122,137,.2)'
                    fontSize='md'
                    color='green.700'
                    fontWeight='800'
                  >
                    レッスン7: オプション編
                  </Td>
                  <Td
                    textAlign='left'
                    borderRight='.5px solid
                    rgba(108,122,137,.2)'
                    bg='green.50'
                  >
                    オリジナルサービスを開発する
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
      <InquirySpace></InquirySpace>
      <BottomDesign />
    </>
  );
};

export default Curriculum;
