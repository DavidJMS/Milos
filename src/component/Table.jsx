import React from "react"
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

const SimpleTable = ({title, fields, values}) => (
  <TableContainer>
  <Table variant='simple'>
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
            <Td key={index2}>{data}</Td>
        ))}
        </Tr>
      ))}
    </Tbody>
  </Table>
</TableContainer>
)
export default SimpleTable