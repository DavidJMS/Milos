import React from "react"
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Text,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

const SimpleTable = ({title, fields, values}) => (
  <TableContainer>
  <Table backgroundColor={'white'} variant='simple'>
    <TableCaption>{title}</TableCaption>
    <Thead>
      <Tr>
        {fields && fields.map((field,index) => {
          return <Th key={index}>{field}</Th>
        })}
      </Tr>
    </Thead>
    <Tbody>
      {values && values.map((value, index) => (
        <Tr key={index}>
          {value && value.map((data, index2) => (
            <Td key={index2}><Text color='#8E9196'>{data}</Text></Td>
        ))}
        </Tr>
      ))}
    </Tbody>
  </Table>
</TableContainer>
)
export default SimpleTable