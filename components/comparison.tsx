import React from 'react';
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

export const Comparison = () => {
  return (
    <>
      <TableContainer
        w='100%'
        maxW='7xl'
        mx='auto'
        border='.5px solid rgba(108,122,137,.2)'
        borderRadius={10}
        marginBottom={8}
        mt='4'
      >
        <Table variant='simple'>
          <Thead bgGradient='linear(to-r, green.400, teal.400)'>
            <Tr>
              <Th borderRight='.5px solid rgba(108,122,137,.2)' w='20%'></Th>
              <Th
                borderRight='.5px solid rgba(108,122,137,.2)'
                w='20%'
                textAlign='center'
                color='white'
                fontSize='1xl'
                py={4}
                bgGradient='linear(to-t, green.600, green.300, green.600)'
              >
                Vue Tech Academy
              </Th>
              <Th
                borderRight='.5px solid rgba(108,122,137,.2)'
                w='20%'
                textAlign='center'
                color='white'
                fontSize='1xl'
              >
                A社
              </Th>
              <Th
                borderRight='.5px solid rgba(108,122,137,.2)'
                w='20%'
                textAlign='center'
                color='white'
                fontSize='1xl'
              >
                B社
              </Th>
              <Th w='20%' textAlign='center' color='white' fontSize='1xl'>
                C社
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td
                textAlign='center'
                borderRight='.5px solid rgba(108,122,137,.2)'
              >
                カリキュラム
              </Td>
              <Td
                textAlign='center'
                borderRight='.5px solid rgba(108,122,137,.2)'
                bg='green.50'
              >
                HTML/CSS
                <br />
                JavaScript
                <br />
                Vue.js
                <br />
                Git
              </Td>
              <Td
                textAlign='center'
                borderRight='.5px solid rgba(108,122,137,.2)'
              >
                HTML/CSS
                <br />
                JavaScript
                <br />
                jQuery
                <br />
                Ruby
                <br />
                Rails
                <br />
                PHP
                <br />
                Laravel
                <br />
                Python
                <br />
                Javaなど
              </Td>
              <Td
                textAlign='center'
                borderRight='.5px solid rgba(108,122,137,.2)'
              >
                HTML/CSS
                <br />
                JavaScript
                <br />
                Ruby
                <br />
                Ruby on Rails
              </Td>
              <Td textAlign='center'>
                HTML/CSS
                <br />
                Ruby
                <br />
                Rails
                <br />
                PHP
                <br />
                Laravel
                <br />
                JavaScript
                <br />
                Python
                <br />
                Django
                <br />
                Javaなど
              </Td>
            </Tr>
            <Tr>
              <Td
                textAlign='center'
                borderRight='.5px solid rgba(108,122,137,.2)'
              >
                受講料金
              </Td>
              <Td
                textAlign='center'
                borderRight='.5px solid rgba(108,122,137,.2)'
                bg='green.50'
              >
                180,000円
              </Td>
              <Td
                textAlign='center'
                borderRight='.5px solid rgba(108,122,137,.2)'
              >
                360,000円
              </Td>
              <Td
                textAlign='center'
                borderRight='.5px solid rgba(108,122,137,.2)'
              >
                440,000円
              </Td>
              <Td textAlign='center'>540,000円</Td>
            </Tr>
            <Tr>
              <Td
                textAlign='center'
                borderRight='.5px solid rgba(108,122,137,.2)'
              >
                期間
              </Td>
              <Td
                textAlign='center'
                borderRight='.5px solid rgba(108,122,137,.2)'
                bg='green.50'
              >
                6ヵ月
              </Td>
              <Td
                textAlign='center'
                borderRight='.5px solid rgba(108,122,137,.2)'
              >
                6ヵ月
              </Td>
              <Td
                textAlign='center'
                borderRight='.5px solid rgba(108,122,137,.2)'
              >
                5ヵ月
              </Td>
              <Td textAlign='center'>6ヵ月</Td>
            </Tr>
            <Tr>
              <Td
                textAlign='center'
                borderRight='.5px solid rgba(108,122,137,.2)'
              >
                1ヵ月あたり
              </Td>
              <Td
                textAlign='center'
                borderRight='.5px solid rgba(108,122,137,.2)'
                color='red.500'
                fontSize='2xl'
                fontWeight={{ base: '500', sm: '700' }}
                bg='orange.200'
              >
                約30,000円/月
              </Td>
              <Td
                textAlign='center'
                borderRight='.5px solid rgba(108,122,137,.2)'
              >
                60,000円/月
              </Td>
              <Td
                textAlign='center'
                borderRight='.5px solid rgba(108,122,137,.2)'
              >
                88,000円/月
              </Td>
              <Td textAlign='center'>90,000円/月</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Comparison;
